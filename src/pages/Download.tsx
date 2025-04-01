import React from 'react';

const Download: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Download Vultisig</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with Vultisig on your preferred platform. Secure, fast, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Apps */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">Mobile Apps</h3>
              <div className="space-y-6">
                <a href="#" className="block group">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <img 
                      src="/assets/images/App Mobile Screen Mockup 2.png" 
                      alt="iOS App" 
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">Download on App Store</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">iOS 14.0 or later</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <img 
                      src="/assets/images/Vulti Agent Phone.png" 
                      alt="Android App" 
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">Get it on Play Store</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Android 8.0 or later</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">SHA256 Verification:</p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm text-gray-600 dark:text-gray-300">
                  8f7b3c2a1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4
                </div>
              </div>
            </div>

            {/* Desktop Apps */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">Desktop Apps</h3>
              <div className="space-y-6">
                <a href="#" className="block group">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <img 
                      src="/assets/images/Vulti Agent Workout.png" 
                      alt="Windows App" 
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">Download for Windows</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Windows 10 or later</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <img 
                      src="/assets/images/Vulti Agent Workout.png" 
                      alt="macOS App" 
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">Download for macOS</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">macOS 11.0 or later</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <img 
                      src="/assets/images/Vulti Agent Workout.png" 
                      alt="Linux App" 
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">Download for Linux</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ubuntu 20.04 or later</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">SHA256 Verification:</p>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg font-mono text-sm text-gray-600 dark:text-gray-300">
                  1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d
                </div>
              </div>
            </div>

            {/* Browser Extension */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center">Browser Extension</h3>
              <div className="text-center">
                <img 
                  src="/assets/images/Vulti Agent Workout.png" 
                  alt="Browser Extension" 
                  className="w-32 h-32 mx-auto mb-6 rounded-xl object-cover"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our browser extension is currently in development. Join our Discord community to get early access and updates.
                </p>
                <a 
                  href="https://discord.gg/vultisig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By downloading, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download; 