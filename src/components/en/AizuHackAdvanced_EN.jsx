import { useEffect } from "react";

const AizuHackAdvanced_EN = () => {
  useEffect(() => {
    document.title = "Re:Aizu Hack 2025";
  }, []);
  const ArrowRight = () => (
    <div className="hidden md:flex items-center justify-center">
      <svg
        className="w-8 h-8 text-[#005555]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7-7 7M3 12h18"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#005555]/10">
      <main className="w-full pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-16 bg-white rounded-lg shadow-lg mb-16">
            <span className="text-base text-gray-600 block mb-2">
              For Experienced Developers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#005555] mb-4">
              Re:Aizu Hack
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Taking UoA's Technical Prowess to the World
            </p>
            <div className="bg-[#005555] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              Scheduled for June 2025
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-6">
              Event Structure
            </h2>
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 mb-8">
              <div className="p-6 border-2 border-[#005555] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  ① Ideathon
                </h3>
                <p className="text-gray-600">
                  Teams develop ideas based on themes and evaluation criteria.
                  <br />
                  Select advanced technology stacks and
                  <br />
                  plan implementation strategies.
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#005555] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  ② Hack Day
                </h3>
                <p className="text-gray-600">
                  Transform ideas into reality,
                  <br />
                  creating sophisticated solutions
                  <br />
                  leveraging technical expertise.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">
                * Development work is prohibited until Hack Day.
                <br />
                Please use this time for technical validation and prototype
                design.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-8">
              Participation Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#005555] rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  Participation Format
                </h3>
                <p className="text-gray-600 mb-4">Team participation only.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    Form teams with technically skilled peers
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    Clear role definition within teams
                  </li>
                </ul>
              </div>
              <div className="p-6 border-2 border-[#005555] rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  Required Skills
                </h3>
                <p className="text-gray-600 mb-4">
                  We're looking for participants with the following experience
                  and skills:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    Development or research experience
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    Understanding of advanced tech stacks and multiple languages
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#005555]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  Technical Challenges
                </h3>
                <p className="text-gray-600">
                  Leverage the high technical capabilities of UoA students
                  <br />
                  to tackle more challenging problems.
                </p>
              </div>
              <div className="p-6 border-2 border-[#005555]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  External Impact
                </h3>
                <p className="text-gray-600">
                  Created products will showcase UoA's technical capabilities.
                  <br />
                  Opportunities to connect with companies provided.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#005555] mb-6 text-center">
              Entry
            </h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-8">
                Registration will start soon.
                <br />
                Please wait for the latest information.
                <br />* Detailed participation requirements will be announced
                when entry opens
              </p>
              <button
                className="bg-[#005555] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#004444] transition-colors disabled:opacity-50"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AizuHackAdvanced_EN;
