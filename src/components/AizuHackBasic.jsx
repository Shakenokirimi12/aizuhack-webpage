const AizuHackBasic = () => {
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
            <span className="text-base text-gray-600 block mb-2">初心者向け</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#009999] mb-4">
              Aizu Hack
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              プログラミングの第一歩を踏み出そう
            </p>
            <div className="bg-[#009999] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              2025年6月開催予定
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              イベント構成
            </h2>
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 mb-8">
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  ① アイデアソン
                </h3>
                <p className="text-gray-600">
                  テーマと審査基準をもとに、<br/>
                  チームでアイデアを練り上げます。<br/>
                  使用する技術の選定も行います。
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  ② 勉強会
                </h3>
                <p className="text-gray-600">
                  アイデアの実現に必要な技術について<br/>
                  メンターから学ぶことができます。
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#009999] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  ③ Hack Day
                </h3>
                <p className="text-gray-600">
                  学んだ技術を活かして開発を行い、<br/>
                  成果物を発表します。
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">
                ※ Hack Dayまでの期間は、開発作業は禁止となっています。
                テストや基礎技術の復習などに時間を活用してください。
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-8">
              参加方法
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999] rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  チーム参加
                </h3>
                <p className="text-gray-600 mb-4">
                  友人と一緒にチームを組んで参加できます。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    自分たちでチームを結成
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    チームメンバーと協力して開発
                  </li>
                </ul>
              </div>
              <div className="p-6 border-2 border-[#009999] rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  個人参加
                </h3>
                <p className="text-gray-600 mb-4">
                  1人での参加も歓迎します。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    運営がチーム編成をサポート
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#009999] font-bold">✓</span>
                    新しい仲間との出会いの機会
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#009999] mb-6">
              サポート体制
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  経験豊富なメンター陣
                </h3>
                <p className="text-gray-600">
                  新旧Zli運営とGDGoC運営メンバーを中心に、<br/>
                  充実したメンターサポートを提供します。
                </p>
              </div>
              <div className="p-6 border-2 border-[#009999]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#009999] mb-3">
                  運営体制
                </h3>
                <p className="text-gray-600">
                  10名程度の運営チームが、
                  参加者の皆さんの開発をサポートします。<br/>
                  技術的なサポートから、
                  チーム開発のアドバイスまで、<br/>
                  幅広くフォローします。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#009999] mb-6 text-center">
              エントリー
            </h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-8">
                参加登録は近日開始予定です。
                最新情報をお待ちください。
                <br />
                ＊参加条件の詳細は、エントリー開始時に発表いたします
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

export default AizuHackBasic;
