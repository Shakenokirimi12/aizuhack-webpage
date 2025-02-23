const Home = () => {
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
              会津大学学内ハッカソン
            </p>
            <div className="bg-[#009999] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              2025年6月開催予定
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              AizuHackとは？
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              会津大学で開催される学生主体のハッカソンイベントです。
              プログラミングやものづくりに興味がある学生が集まり、
              チームでプロダクト開発に取り組みます。
              初心者から上級者まで、すべての学生が参加できます。
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              始める？それとも極める？
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="/aizu-hack-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="p-8 border-2 border-[#009999] rounded-lg group-hover:shadow-2xl transition-all duration-300 ease-out">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#009999] mb-2">
                      <span className="text-base font-normal block text-gray-600 mb-1">
                        初心者向け
                      </span>
                      <span className="text-3xl font-extrabold tracking-wide">
                        Aizu Hack
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      プログラミング初心者の方におすすめ
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
                      基礎から学べるハンズオン
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">
                        ✓
                      </span>
                      手厚いメンターサポート
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">
                        ✓
                      </span>
                      初心者向けの課題設定
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-[#009999] group-hover:opacity-75 transition-opacity duration-300">
                      <span className="mr-2">詳細を見る</span>
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
                href="/re-aizu-hack-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="p-8 border-2 border-[#007777] rounded-lg group-hover:shadow-2xl transition-all duration-300 ease-out">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#007777] mb-2">
                      <span className="text-base font-normal block text-gray-600 mb-1">
                        経験者向け
                      </span>
                      <span className="text-3xl font-extrabold tracking-wide">
                        Re:Aizu Hack
                      </span>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      開発経験をお持ちの方におすすめ
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
                      より高度な技術的チャレンジ
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#007777] font-bold">
                        ✓
                      </span>
                      自由度の高い開発環境
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 text-[#007777] font-bold">
                        ✓
                      </span>
                      企業からの技術メンタリング
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-[#007777] group-hover:opacity-75 transition-opacity duration-300">
                      <span className="mr-2">詳細を見る</span>
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
            <h2 className="text-3xl font-bold text-[#009999] mb-6">特徴</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  メンターによるサポート
                </h3>
                <p className="text-gray-600">
                  経験豊富な先輩学生がメンターとして、
                  開発をサポートします。
                </p>
              </div>
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  開発を経験する
                </h3>
                <p className="text-gray-600">
                  初心者は開発を経験する第一歩として、経験者の方はさらなる経験を積む機会として、
                  チームでの開発に挑戦します。
                </p>
              </div>ï
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">参加方法</h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-6">
                参加登録は近日開始予定です。 最新情報をお待ちください。
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

export default Home;
