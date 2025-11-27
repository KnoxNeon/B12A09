import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section className="py-20 pb-24 lg:pb-32 bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Never miss an update
    </h2>
    
    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
      Join 25,000+ subscribers and get the latest news, insights, and exclusive content 
      delivered straight to your inbox every week.
    </p>

    <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
      />
      
      <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-50 transition whitespace-nowrap">
        Subscribe Now
      </button>
    </div>

    <p className="mt-6 text-sm text-white/80">
      No spam, ever. Unsubscribe anytime with one click.
    </p>
  </div>
</section>
    </div>
  )
}

export default Newsletter
