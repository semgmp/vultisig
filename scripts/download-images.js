import fs from 'fs';
import path from 'path';
import https from 'https';
import fetch from 'node-fetch';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backers = {
  funds: [
    { name: '21e8 Capital', twitter: '21e8Capital', image: '21e8.png' },
    { name: 'Apollo Capital', twitter: 'ApolloCryptoAu', image: 'apollo.png' },
    { name: 'Delphi Ventures', twitter: 'Delphi_Ventures', image: 'delphi.png' },
    { name: 'Wintermute Ventures', twitter: 'wintermute-ventures', image: 'wintermute.png' },
    { name: 'Danxia Capital', twitter: 'Danxia_Capital', image: 'danxia.png' },
    { name: 'Banter Capital', twitter: 'Banter Capital', image: 'banter.png' },
    { name: 'Proof Group', twitter: 'njess', image: 'proof.png' },
    { name: 'Thunderbolt', twitter: '*', image: 'thunderbolt.png' },
    { name: 'UpsideDAO', twitter: '0xUpside', image: 'upside.png' },
    { name: 'Magnet Capital', twitter: 'Magnet_Cap', image: 'magnet.png' },
    { name: 'Kotti Capital', twitter: '*', image: 'kotti.png' },
    { name: 'Master Ventures', twitter: 'buildwithMV', image: 'master.png' },
  ],
  investors: [
    { name: 'JPTHOR', twitter: 'jpthor', image: 'jpthor.png' },
    { name: 'Perklin', twitter: 'mperklin', image: 'perklin.png' },
    { name: 'LoiLui', twitter: 'loi_luu', image: 'loilui.png' },
    { name: 'Marcel', twitter: 'marcelharmann', image: 'marcel.png' },
    { name: 'Viktor', twitter: 'Vikmeup', image: 'viktor.png' },
    { name: 'Vik', twitter: 'vikrantnyc', image: 'vik.png' },
  ],
  kols: [
    { name: 'THORTrades', twitter: 'ThorTrades8', image: 'thor.png' },
    { name: 'Coach Bruce', twitter: 'OX_DAO', image: 'bruce.png' },
    { name: 'Saunders Nuggets', twitter: 'NuggetsNewsAU', image: 'saunders.png' },
    { name: 'SliceX', twitter: 'SliceTank', image: 'slicex.png' },
    { name: 'NCF', twitter: 'NoTableNoFun', image: 'ncf.png' },
    { name: 'Elroy ARC', twitter: 'icunucmi', image: 'elroy.png' },
    { name: 'Mechanism Capital', twitter: 'MechanismCap', image: 'mechanism.png' },
    { name: 'Wolf of Defi', twitter: 'thewolfofdefi', image: 'wolf.png' },
    { name: 'Tyler Reynolds', twitter: 'tbr90', image: 'tyler.png' },
  ],
};

const outputDir = path.join(__dirname, '../public/assets/images/backers');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

// Function to get Twitter profile image URL
async function getTwitterProfileImage(username) {
  if (username === '*') return null;
  
  try {
    // First try to get the profile page
    const response = await fetch(`https://twitter.com/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch Twitter profile');
    
    const html = await response.text();
    
    // Extract the profile image URL from the meta tags
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match && match[1]) {
      return match[1].replace('_normal', '_400x400');
    }
    
    // Fallback to default Twitter avatar if no image found
    return `https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png`;
  } catch (error) {
    console.error(`Error fetching Twitter profile for ${username}:`, error);
    return null;
  }
}

// Function to optimize image
async function optimizeImage(filepath) {
  try {
    await sharp(filepath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 })
      .toFile(filepath.replace('.png', '.jpg'));
    
    // Remove the original PNG file
    fs.unlinkSync(filepath);
    
    return filepath.replace('.png', '.jpg');
  } catch (error) {
    console.error(`Error optimizing image ${filepath}:`, error);
    return filepath;
  }
}

// Main function to download all images
async function downloadAllImages() {
  const allBackers = [...backers.funds, ...backers.investors, ...backers.kols];
  const results = {
    success: [],
    failed: []
  };
  
  for (const backer of allBackers) {
    if (backer.twitter === '*') {
      console.log(`Skipping ${backer.name} (no Twitter handle)`);
      continue;
    }
    
    const imageUrl = await getTwitterProfileImage(backer.twitter);
    if (!imageUrl) {
      console.log(`No image found for ${backer.name}`);
      results.failed.push(backer.name);
      continue;
    }
    
    const filepath = path.join(outputDir, backer.image);
    try {
      await downloadImage(imageUrl, filepath);
      const optimizedPath = await optimizeImage(filepath);
      console.log(`Downloaded and optimized: ${backer.name}`);
      results.success.push(backer.name);
    } catch (error) {
      console.error(`Failed to download image for ${backer.name}:`, error);
      results.failed.push(backer.name);
    }
  }
  
  // Print summary
  console.log('\nDownload Summary:');
  console.log(`Successfully downloaded: ${results.success.length} images`);
  console.log(`Failed to download: ${results.failed.length} images`);
  if (results.failed.length > 0) {
    console.log('\nFailed downloads:');
    results.failed.forEach(name => console.log(`- ${name}`));
  }
}

// Run the script
downloadAllImages().catch(console.error); 