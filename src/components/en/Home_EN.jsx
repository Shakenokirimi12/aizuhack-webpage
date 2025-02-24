import { useEffect } from "react";

const Home_EN = () => {
    useEffect(() => {
      document.title = "Aizu Hack 2025";
    }, []);
  return (
    <div className="min-h-screen bg-[#009999]/10">
      <div className="w-full pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-16 bg-white rounded-lg shadow-lg mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#009999] mb-4">
              Aizu Hack 2025
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#007777] mb-4">
              Re:Aizu Hack 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Learn, Challenge, and Grow.
            </p>
            <div className="bg-[#009999] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              Scheduled for June 2025
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              What is AizuHack?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A student-led hackathon event held at the University of Aizu.
              Students interested in programming and creation gather to develop products in teams.
              Open to all students, from beginners to advanced developers.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              Take Your First Step with Aizu Hack, Reach the Summit with Re:Aizu Hack
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="/en/aizu-hack-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="p-8 border-2 border-[#009999] rounded-lg group-hover:shadow-2xl transition-all duration-300 ease-out">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#009999] mb-2">
                      <span className="text-base font-normal block text-gray-600 mb-1">
                        For Beginners
                      </span>
                      <span className="text-3xl font-extrabold tracking-wide">
                        Aizu Hack
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Recommended for Programming Beginners
                    </p>
                    <div className="inline-block bg-[#009999]/10 text-[#009999] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      Basic Course
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">
                        ✓
                      </span>
                      Hands-on Learning from Basics
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">
                        ✓
                      </span>
                      Comprehensive Mentor Support
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">
                        ✓
                      </span>
                      Beginner-Friendly Challenges
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-[#009999] group-hover:opacity-75 transition-opacity duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/en/re-aizu-hack-2025" 
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="p-8 border-2 border-[#007777] rounded-lg group-hover:shadow-2xl transition-all duration-300 ease-out">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#007777] mb-2">
                      <span className="text-base font-normal block text-gray-600 mb-1">
                        For Experienced Developers
                      </span>
                      <span className="text-3xl font-extrabold tracking-wide">
                        Re:Aizu Hack
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Recommended for Those with Development Experience
                    </p>
                    <div className="inline-block bg-[#007777]/10 text-[#007777] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      Advanced Course
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#007777] font-bold">
                        ✓
                      </span>
                      More Advanced Technical Challenges
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#007777] font-bold">
                        ✓
                      </span>
                      High Degree of Development Freedom
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#007777] font-bold">
                        ✓
                      </span>
                      Technical Mentoring from Companies
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-[#007777] group-hover:opacity-75 transition-opacity duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">Sponsors</h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-3">
              TO BE DETERMINED.....
            </h3>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Mentor Support
                </h3>
                <p className="text-gray-600">
                  Experienced senior students will support development as mentors.
                </p>
              </div>
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Experience Development
                </h3>
                <p className="text-gray-600">
                  Beginners will take their first step in development, while experienced developers will gain further experience by challenging team development.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">How to Participate</h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-6">
                Registration will start soon. Please wait for the latest information.
              </p>
              <button
                className="bg-[#009999] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#008888] transition-colors disabled:opacity-50"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home_EN;
