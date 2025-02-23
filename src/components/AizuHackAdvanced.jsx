const AizuHackAdvanced = () => {
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
              経験者向け
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#005555] mb-4">
              Re:Aizu Hack
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              会津大生の技術力を世界へ
            </p>
            <div className="bg-[#005555] text-white inline-block px-6 py-3 rounded-full text-lg font-semibold">
              2025年6月開催予定
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-6">
              イベント構成
            </h2>
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8 mb-8">
              <div className="p-6 border-2 border-[#005555] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  ① アイデアソン
                </h3>
                <p className="text-gray-600">
                  テーマと審査基準をもとに、チームでアイデアを練り上げます。
                  <br />
                  高度な技術スタックの選定と
                  <br />
                  実装計画の立案を行います。
                </p>
              </div>
              <ArrowRight />
              <div className="p-6 border-2 border-[#005555] rounded-lg flex-1">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  ② Hack Day
                </h3>
                <p className="text-gray-600">
                  アイデアを実装に移し、
                  <br />
                  技術力を活かした高度なソリューションを
                  <br />
                  作り上げます。
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm">
                ※ Hack Dayまでの期間は、開発作業は禁止となっています。
                <br />
                技術検証やプロトタイプの設計などに時間を活用してください。
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-8">参加要件</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#005555] rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  参加形式
                </h3>
                <p className="text-gray-600 mb-4">チーム参加のみとなります。</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    技術力のある仲間とチームを結成
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    チーム内での役割分担を明確化
                  </li>
                </ul>
              </div>
              <div className="p-6 border-2 border-[#005555] rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  求められるスキル
                </h3>
                <p className="text-gray-600 mb-4">
                  以下のような経験・スキルを持つ方を想定しています。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    開発経験や研究経験
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 text-[#005555] font-bold">
                      ✓
                    </span>
                    高度な技術スタックの理解・多言語の理解
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#005555] mb-6">特徴</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-[#005555]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  技術的チャレンジ
                </h3>
                <p className="text-gray-600">
                  会津大学の強みである学生の高い技術力を活かし、
                  <br />
                  より挑戦的な課題に取り組むことができます。
                </p>
              </div>
              <div className="p-6 border-2 border-[#005555]/20 rounded-lg">
                <h3 className="text-xl font-semibold text-[#005555] mb-3">
                  対外的な成果
                </h3>
                <p className="text-gray-600">
                  作成したプロダクトは、会津大学の技術力を示す重要な成果となります。
                  <br />
                  企業との接点も提供されます。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#005555] mb-6 text-center">
              エントリー
            </h2>
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-8">
                参加登録は近日開始予定です。
                <br />
                最新情報をお待ちください。
                <br />
                ＊参加要件の詳細は、エントリー開始時に発表いたします
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

export default AizuHackAdvanced;
