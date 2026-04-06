import { useState } from 'react'

export default function TermsOfService({ setCurrentPage }) {
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
          <h1 className="font-headline text-2xl md:text-4xl text-primary">Terms of Service</h1>
        </div>
        
        <div className="space-y-6 text-secondary text-sm md:text-base leading-relaxed">
          <p>Welcome to FARONA Beach Villa. By booking with us, you agree to the following terms and conditions.</p>
          
          <h2 className="font-bold text-primary text-lg">Booking & Reservations</h2>
          <p>All bookings are confirmed through WhatsApp. Please provide your expected arrival time when booking. Check-in is available 24 hours.</p>
          
          <h2 className="font-bold text-primary text-lg">Check-in & Check-out</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Check-in: Available 24 hours</li>
            <li>Check-out: From 10:00 AM to 12:00 PM</li>
            <li>Please inform us of your expected arrival time in advance</li>
          </ul>
          
          <h2 className="font-bold text-primary text-lg">House Rules</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No smoking allowed in the villa</li>
            <li>No parties or events permitted</li>
            <li>No pets allowed</li>
            <li>No age restriction for check-in</li>
          </ul>
          
          <h2 className="font-bold text-primary text-lg">Children & Beds</h2>
          <p>Children of all ages are welcome. Cribs and extra beds are not available at this property.</p>
          
          <h2 className="font-bold text-primary text-lg">Payment Methods</h2>
          <p>We accept: American Express, Visa, Mastercard, Maestro, UnionPay credit card, and Cash.</p>
          
          <h2 className="font-bold text-primary text-lg">Cancellation Policy</h2>
          <p>Cancellation and prepayment policies vary according to accommodation type. Please contact us for details.</p>
          
          <h2 className="font-bold text-primary text-lg">Special Requests</h2>
          <p>FARONA Beach Villa takes special requests. Please add your requests in the next step when booking.</p>
          
          <p className="text-xs text-gray-400 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </div>
  )
}