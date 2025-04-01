import React, { useState, useEffect } from 'react';
import { Shield, Users, Wallet, Github, Twitter, ArrowRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Download from './pages/Download';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/download" element={<Download />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Next-Gen Crypto Vault
                          </span>
                          <br />
                          <span className="text-neutral-900 dark:text-white">
                            for your digital assets
                          </span>
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300">
                          Enterprise-grade security meets user-friendly design. Your keys, your crypto, always.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to="/download"
                          className="btn-primary"
                        >
                          Download App
                        </Link>
                        <a href="#features" className="btn-secondary">
                          Learn More
                        </a>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl transform -rotate-6"></div>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                        <div className="relative bg-white dark:bg-neutral-800 rounded-3xl p-2 shadow-2xl transform transition duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                          <div className="relative overflow-hidden rounded-2xl">
                            <img 
                              src="/assets/images/App Mobile Screen Mockup 2.png" 
                              alt="Vultisig Interface" 
                              className="w-full h-auto transform transition duration-700 group-hover:scale-105 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Vultisig Section */}
              <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Vultisig</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Secure, simple, and powerful multi-signature solution</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Threshold Signatures */}
                    <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="h-48 mb-6 relative overflow-hidden rounded-xl bg-primary-50 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="/assets/images/features/threshold.svg"
                          alt="Threshold Signatures"
                          className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Threshold Signatures</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Multiple devices to sign—no single point of failure. Never lose funds with one compromised device
                      </p>
                    </div>

                    {/* Familiar Hardware */}
                    <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="h-48 mb-6 relative overflow-hidden rounded-xl bg-primary-50 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="/assets/images/features/hardware.svg"
                          alt="Familiar Hardware"
                          className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Familiar Hardware</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.
                      </p>
                    </div>

                    {/* Vault Shares */}
                    <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="h-48 mb-6 relative overflow-hidden rounded-xl bg-primary-50 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="/assets/images/features/vault.svg"
                          alt="Vault Shares"
                          className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vault Shares</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!
                      </p>
                    </div>

                    {/* Rich UI */}
                    <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="h-48 mb-6 relative overflow-hidden rounded-xl bg-primary-50 dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src="/assets/images/features/ui.svg"
                          alt="Rich UI"
                          className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rich UI</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Have all information displayed on big screens. Easy to see—easy to understand
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="py-32 bg-neutral-50 dark:bg-neutral-800/50" aria-labelledby="features-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                      Enterprise-grade security meets user-friendly design
                    </p>
                  </div>
                  <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="group p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10">
                      <div className="relative mb-8 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/assets/images/Vulti Agent Phone.png" 
                            alt="Self-Custodial Security" 
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Shield className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Self-Custodial Security</h3>
                      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Your keys, your crypto. Always maintain full control of your assets with our advanced security infrastructure.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Multi-signature protection
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Hardware wallet support
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Regular security audits
                        </li>
                      </ul>
                    </div>

                    <div className="group p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10">
                      <div className="relative mb-8 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/assets/images/Vulti Agent Workout.png" 
                            alt="Team Management" 
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Users className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Team Management</h3>
                      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Customize permissions and approval workflows for your organization with intuitive controls.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Role-based access control
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Custom approval workflows
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Activity monitoring
                        </li>
                      </ul>
                    </div>

                    <div className="group p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10">
                      <div className="relative mb-8 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="/assets/images/App Mobile Screen Mockup 2.png" 
                            alt="Sei Powered" 
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Wallet className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">Sei Powered</h3>
                      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Built on Sei blockchain for lightning-fast transactions and enhanced security protocols.
                      </p>
                      <ul className="mt-6 space-y-3">
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Fast transaction processing
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Cross-chain compatibility
                        </li>
                        <li className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          Advanced security features
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* How it Works Section */}
              <section id="how-it-works" className="py-24 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-secondary-500/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Next Level Security
                      </span>
                      <br />
                      <span className="text-3xl md:text-4xl text-neutral-600 dark:text-neutral-300 mt-4 block">
                        using your trusted devices
                      </span>
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                      VULTISIG eliminates the risks of traditional key management with next-gen crypto vaults
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="group bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          Traditional Wallets
                        </h3>
                        <ul className="space-y-6">
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Private keys</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">You need to trust the key generation process or you could lose your keys.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Public keys</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Converts your private key into a public key using a hash function, then encode it to create your unique address.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Seed phrases</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">A seed phrase is a human-readable representation of your private key using standardized words.</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="group bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          PRIVATE KEYS: A Single Point of Failure
                        </h3>
                        <ul className="space-y-6">
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Private key creation</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Creating private keys in one place makes them vulnerable to theft or loss. One mistake and your assets are at risk.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Storage of private keys</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Private keys stored in one place create a single point of failure, exposing your funds to hackers or mismanagement.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-300">Human error</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">People are vulnerable to being exploited or tricked. Most wallet drains happen due to social engineering that reveals the private key.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="group bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-primary-50 dark:hover:from-neutral-800 dark:hover:to-primary-900/10 cursor-pointer">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          Introducing Vultisig's recovery: vault shares instead of seed phrases
                        </h3>
                        <ul className="space-y-6">
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">With Vultisig, you bring your own trusted devices - phone, desktop, laptops or tablets.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Your devices create vaults together using their unique shards called "vault shares", which are unique to each device. The private key never exists, the devices just proof the collaborative access to it!</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Individual Vault-shares never store funds and can be safely imported/exported anywhere.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Each vault is natively multi-factor -- and you can co-sign safely anywhere in the world.</p>
                            </div>
                          </li>
                          <li className="flex items-start group/item">
                            <span className="text-primary-600 mr-4 text-xl">•</span>
                            <div>
                              <p className="text-neutral-600 dark:text-neutral-300 mt-2">Store each device's Vault Share separately and sleep soundly.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="py-32" aria-labelledby="security-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                      <h2 id="security-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Bank-Grade Security
                      </h2>
                      <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Our multi-signature technology requires multiple approvals for transactions, 
                        eliminating single points of failure and protecting against unauthorized access.
                      </p>
                      <ul className="mt-12 space-y-6">
                        <li className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-primary-600" />
                          </div>
                          <span className="text-lg group-hover:text-primary-600 transition-colors">Multi-factor authentication</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-primary-600" />
                          </div>
                          <span className="text-lg group-hover:text-primary-600 transition-colors">Hardware wallet support</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-primary-600" />
                          </div>
                          <span className="text-lg group-hover:text-primary-600 transition-colors">Regular security audits</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl transform rotate-6"></div>
                      <img
                        src="/assets/images/Vulti Agent Phone.png"
                        alt="Security Visualization"
                        className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Community Section */}
              <section id="community" className="py-32 bg-neutral-50 dark:bg-neutral-800/50" aria-labelledby="community-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 id="community-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      Join Our Community
                    </h2>
                    <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                      Be part of the future of decentralized finance
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                      <a href="#" className="group flex items-center gap-3 px-8 py-4 bg-neutral-800 dark:bg-neutral-700 text-white rounded-2xl hover:bg-neutral-700 transition-all duration-300 hover:shadow-xl">
                        <Github className="w-6 h-6" />
                        <span>GitHub</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="#" className="group flex items-center gap-3 px-8 py-4 bg-[#1DA1F2] text-white rounded-2xl hover:bg-[#1a8cd8] transition-all duration-300 hover:shadow-xl">
                        <Twitter className="w-6 h-6" />
                        <span>Twitter</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                    <div className="mt-20 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl blur-3xl"></div>
                      <img
                        src="/assets/images/Vulti Agent Workout.png"
                        alt="Community Dashboard"
                        className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl relative hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Backed By Section */}
              <section className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    BACKED AND TRUSTED BY
                  </h2>
                  
                  {/* Funds */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-white text-center">FUNDS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {[
                        { name: '21e8 Capital', twitter: '21e8Capital' },
                        { name: 'Apollo Capital', twitter: 'ApolloCryptoAu' },
                        { name: 'Delphi Ventures', twitter: 'Delphi_Ventures' },
                        { name: 'Wintermute Ventures', twitter: 'wintermute-ventures' },
                        { name: 'Danxia Capital', twitter: 'Danxia_Capital' },
                        { name: 'Banter Capital', twitter: 'BanterCapital' },
                        { name: 'Proof Group', twitter: 'njess' },
                        { name: 'Thunderbolt', twitter: 'Thunderbolt' },
                        { name: 'UpsideDAO', twitter: '0xUpside' },
                        { name: 'Magnet Capital', twitter: 'Magnet_Cap' },
                        { name: 'Kotti Capital', twitter: 'KottiCapital' },
                        { name: 'Master Ventures', twitter: 'buildwithMV' }
                      ].map((fund) => (
                        <div key={fund.name} className="group">
                          <div className="relative w-24 h-24 mx-auto mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-lg">
                              <img
                                src={`https://unavatar.io/twitter/${fund.twitter}`}
                                alt={fund.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-neutral-900 dark:text-white truncate">{fund.name}</h4>
                            <a href={`https://twitter.com/${fund.twitter}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                              @{fund.twitter}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industry Leading Investors */}
                  <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-white text-center">INDUSTRY LEADING INVESTORS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {[
                        { name: 'JPTHOR', twitter: 'jpthor' },
                        { name: 'Perklin', twitter: 'mperklin' },
                        { name: 'LoiLui', twitter: 'loi_luu' },
                        { name: 'Marcel', twitter: 'marcelharmann' },
                        { name: 'Viktor', twitter: 'Vikmeup' },
                        { name: 'Vik', twitter: 'vikrantnyc' }
                      ].map((investor) => (
                        <div key={investor.name} className="group">
                          <div className="relative w-24 h-24 mx-auto mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-lg">
                              <img
                                src={`https://unavatar.io/twitter/${investor.twitter}`}
                                alt={investor.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-neutral-900 dark:text-white truncate">{investor.name}</h4>
                            <a href={`https://twitter.com/${investor.twitter}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                              @{investor.twitter}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KOLs */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-white text-center">KOLs</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {[
                        { name: 'THORTrades', twitter: 'ThorTrades8' },
                        { name: 'Coach Bruce', twitter: 'OX_DAO' },
                        { name: 'Saunders Nuggets', twitter: 'NuggetsNewsAU' },
                        { name: 'SliceX', twitter: 'SliceTank' },
                        { name: 'NCF', twitter: 'NoTableNoFun' },
                        { name: 'Elroy ARC', twitter: 'icunucmi' },
                        { name: 'Mechanism Capital', twitter: 'MechanismCap' },
                        { name: 'Wolf of Defi', twitter: 'thewolfofdefi' },
                        { name: 'Tyler Reynolds', twitter: 'tbr90' }
                      ].map((kol) => (
                        <div key={kol.name} className="group">
                          <div className="relative w-24 h-24 mx-auto mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-lg">
                              <img
                                src={`https://unavatar.io/twitter/${kol.twitter}`}
                                alt={kol.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-neutral-900 dark:text-white truncate">{kol.name}</h4>
                            <a href={`https://twitter.com/${kol.twitter}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                              @{kol.twitter}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-neutral-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        Vultisig
                      </h3>
                      <p className="mt-6 text-neutral-400 leading-relaxed">
                        Secure multi-signature wallet solution for teams and communities.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Product</h4>
                      <ul className="mt-6 space-y-4">
                        <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
                        <li><a href="#security" className="text-neutral-400 hover:text-white transition-colors">Security</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Resources</h4>
                      <ul className="mt-6 space-y-4">
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">API</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Legal</h4>
                      <ul className="mt-6 space-y-4">
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-20 pt-8 border-t border-neutral-800 text-center text-neutral-400">
                    <p>© 2024 Vultisig. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;