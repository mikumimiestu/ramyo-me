import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown, ArrowRight } from 'lucide-react';

const Premium = () => {
  const plans = [
    {
      id: 'fan',
      name: 'Fan',
      price: 7.99,
      description: 'Perfect for casual viewers',
      features: [
        'Ad-supported streaming',
        'HD quality (720p)',
        'Watch on 1 device at a time',
        'New episodes one week after release',
        'Limited catalog access',
      ],
      notIncluded: [
        'Offline viewing',
        'Exclusive anime content',
        'Early access to new releases',
      ],
      recommended: false,
      color: 'slate',
    },
    {
      id: 'mega-fan',
      name: 'Mega Fan',
      price: 9.99,
      description: 'Our most popular plan',
      features: [
        'Ad-free streaming',
        'Full HD quality (1080p)',
        'Watch on 4 devices at a time',
        'New episodes same day as release',
        'Full catalog access',
        'Offline viewing',
      ],
      notIncluded: [
        'Exclusive anime content',
        'Early access to new releases',
      ],
      recommended: true,
      color: 'purple',
    },
    {
      id: 'ultimate-fan',
      name: 'Ultimate Fan',
      price: 14.99,
      description: 'For the dedicated anime enthusiast',
      features: [
        'Ad-free streaming',
        '4K Ultra HD quality',
        'Watch on unlimited devices',
        'New episodes same day as release',
        'Full catalog access',
        'Offline viewing',
        'Exclusive anime content',
        'Early access to new releases',
        'Exclusive merchandise discounts',
      ],
      notIncluded: [],
      recommended: false,
      color: 'accent',
    },
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            RamyoMe Premium
          </motion.h1>
          <motion.p
            className="text-slate-300 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Unlock the full anime experience with no ads, offline viewing, and exclusive content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`rounded-xl overflow-hidden border ${plan.recommended 
                ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                : 'border-slate-700'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.recommended && (
                <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <div className="p-6 bg-slate-800">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-${plan.color}-700 flex items-center justify-center mr-3`}>
                    <Crown size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-slate-400"> / month</span>
                </div>
                
                <motion.button 
                  className={`w-full py-2.5 rounded-lg ${plan.recommended 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'bg-slate-700 hover:bg-slate-600'} transition-colors font-medium`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe Now
                </motion.button>
              </div>
              
              <div className="p-6 bg-slate-900">
                <h4 className="font-medium mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-500">
                      <X size={18} className="text-slate-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose RamyoMe Premium?</h2>
              <p className="text-purple-200 mb-8">
                Join thousands of anime fans who have upgraded their viewing experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-700/50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Exclusive Content</h3>
                    <p className="text-purple-200/80 text-sm">
                      Get access to exclusive anime series and movies not available elsewhere.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-700/50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Watch Anywhere</h3>
                    <p className="text-purple-200/80 text-sm">
                      Stream on your phone, tablet, or TV with offline viewing options.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-700/50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Ad-Free Experience</h3>
                    <p className="text-purple-200/80 text-sm">
                      Enjoy uninterrupted streaming without any advertisements.
                    </p>
                  </div>
                </div>
              </div>
              
              <motion.a 
                href="#plans" 
                className="mt-8 inline-flex items-center px-6 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-purple-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose a Plan <ArrowRight className="ml-2" size={18} />
              </motion.a>
            </div>
            
            <div className="hidden lg:block relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center border-t border-slate-800 pt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="grid gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button className="w-full text-left p-4 focus:outline-none hover:bg-slate-750 transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Can I cancel my subscription at any time?</h3>
                  <span className="text-lg">+</span>
                </div>
              </button>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                Yes, you can cancel your subscription at any time. If you cancel, you'll be able to use your subscription until the end of your billing period.
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button className="w-full text-left p-4 focus:outline-none hover:bg-slate-750 transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">How many devices can I use with my subscription?</h3>
                  <span className="text-lg">+</span>
                </div>
              </button>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button className="w-full text-left p-4 focus:outline-none hover:bg-slate-750 transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Is there a free trial available?</h3>
                  <span className="text-lg">+</span>
                </div>
              </button>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <button className="w-full text-left p-4 focus:outline-none hover:bg-slate-750 transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">What payment methods do you accept?</h3>
                  <span className="text-lg">+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;