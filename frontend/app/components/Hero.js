'use client';

import { Sparkles, Heart, Leaf, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-ayurveda-light via-white to-ayurveda-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-ayurveda-secondary animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-ayurveda-accent rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ayurveda-primary leading-tight">
              Discover the Power of <span className="text-ayurveda-secondary">Ayurveda</span> for Your Health
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              Harness 5000 years of ancient wisdom to find personalized food remedies, natural healing, and holistic wellness for your modern lifestyle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a 
                href="/signup" 
                className="group bg-ayurveda-primary hover:bg-ayurveda-green text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Get Started Free
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
              <a 
                href="/remedies" 
                className="group bg-white hover:bg-ayurveda-light text-ayurveda-primary border-2 border-ayurveda-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Explore Remedies
                  <Leaf className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-ayurveda-secondary mr-2" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-ayurveda-secondary mr-2" />
                <span>Holistic Approach</span>
              </div>
              <div className="flex items-center">
                <Leaf className="h-5 w-5 text-ayurveda-secondary mr-2" />
                <span>Ancient Wisdom</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://www.panchkaram.com/userfiles/blog_images/1763087487Ayurvedas-Cornerstone-for-Liver-Detoxification.jpeg"
                alt="Ayurveda for Liver Detoxification and Health"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayurveda-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-ayurveda-secondary rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ayurveda-primary">Natural Healing</p>
                  <p className="text-xs text-gray-600">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ayurveda-secondary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-ayurveda-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </div>
  );
}
