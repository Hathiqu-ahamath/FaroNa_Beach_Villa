import { useState } from 'react'

export default function PrivacyPolicy({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-surface pt-20 pb-12 px-4 md:px-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline text-2xl md:text-4xl text-primary">Privacy Policy</h1>
        </div>
        
        <div className="space-y-6 text-secondary text-sm md:text-base leading-relaxed">
          <p>At FaroNa Beach Villa, we value your privacy and are committed to protecting your personal information.</p>
          
          <h2 className="font-bold text-primary text-lg">Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, phone number, and booking details when you make a reservation through WhatsApp.</p>
          
          <h2 className="font-bold text-primary text-lg">How We Use Your Information</h2>
          <p>We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Process and confirm your bookings</li>
            <li>Communicate with you about your reservation</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our services</li>
          </ul>
          
          <h2 className="font-bold text-primary text-lg">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted service providers who assist us in operating our website and conducting our business.</p>
          
          <h2 className="font-bold text-primary text-lg">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through WhatsApp or email.</p>
          
          <p className="text-xs text-gray-400 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </div>
  )
}