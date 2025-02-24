import { useEffect } from "react";

const AizuHackBasic_EN = () => {
  useEffect(() => {
    document.title = "Aizu Hack 2025";
  }, []);
  const ArrowRight = () => (
    <div className="hidden md:flex items-center justify-center">
      <svg className="w-8 h-8 text-[#009999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M3 12h18" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#009999]/10">
      <main className="w-full pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-16 bg-white rounded-lg shadow-lg mb-16">
            <span className="text-base text-gray-600 block mb-2">For Beginners</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#009999] mb-4">
              Aizu Hack
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Take Your First Step in Programming
            </p>
            <div className="bg-[#009999] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              Scheduled for June 2025
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              Event Structure
            </h2>
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 mb-8">
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                   ① Ideathon
                </h3>
                <p className="text-gray-600">
                  Develop ideas as a team based on<br/>
                  themes and evaluation criteria.<br/>
                  Select technologies to use.
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                   ② Study Session
                </h3>
                <p className="text-gray-600">
                  Learn necessary technologies<br/>
                  from mentors to realize your ideas.
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                   ③ Hack Day
                </h3>
                <p className="text-gray-600">
                  Develop using the technologies learned<br/>
                  and present your results.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">
                * Development work is prohibited until Hack Day.
                Please use this time for testing and reviewing basic technologies.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-8">
              How to Participate
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999] rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Team Participation
                </h3>
                <p className="text-gray-600 mb-4">
                  Participate with friends as a team.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    Form your own team
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    Develop collaboratively with team members
                  </li>
                </ul>
              </div>
              <div className="p-6 border-2 border-[#009999] rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Individual Participation
                </h3>
                <p className="text-gray-600 mb-4">
                  Solo participants are welcome.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    Team formation support from organizers
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    Opportunity to meet new friends
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              Support System
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Experienced Mentors
                </h3>
                <p className="text-gray-600">
                  Comprehensive mentor support provided by<br/>
                  current and former Zli and GDGoC organizers.
                </p>
              </div>
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  Organization Structure
                </h3>
                <p className="text-gray-600">
                  A team of about 10 organizers will support<br/>
                  participants' development journey.<br/>
                  We provide comprehensive support from<br/>
                  technical assistance to team development advice.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#009999] mb-6 text-center">
              Entry
            </h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-8">
                Registration will start soon.
                Please wait for the latest information.
                <br />
                * Detailed participation requirements will be announced when entry opens
              </p>
              <button className="bg-[#009999] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#008888] transition-colors disabled:opacity-50" disabled>
                Coming Soon
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AizuHackBasic_EN;
