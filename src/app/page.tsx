export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-care-comfort to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-500">CARE Collective</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            A supportive platform for family caregivers to connect, share resources, 
            and coordinate care within their community.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="care-button-primary text-lg px-8 py-4">
              Request Help
            </button>
            <button className="care-button-secondary text-lg px-8 py-4">
              Offer Support
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="care-card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
            <p className="text-gray-600">Connect with other caregivers in your area who understand your journey.</p>
          </div>

          <div className="care-card text-center">
            <div className="w-16 h-16 bg-care-support/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-care-support" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Coordinate Care</h3>
            <p className="text-gray-600">Organize schedules, appointments, and care tasks with family and friends.</p>
          </div>

          <div className="care-card text-center">
            <div className="w-16 h-16 bg-care-calm/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-care-calm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Informed</h3>
            <p className="text-gray-600">Receive important announcements and updates from your care network.</p>
          </div>
        </div>

        {/* Setup Status */}
        <div className="mt-16 p-6 bg-primary-50 rounded-lg border border-primary-200 max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-primary-900 mb-2">🚧 Platform Setup in Progress</h2>
          <p className="text-primary-800">
            CARE Collective is being built with accessibility and caregiver needs as top priorities. 
            Full functionality will be available soon.
          </p>
        </div>
      </div>
    </main>
  );
}