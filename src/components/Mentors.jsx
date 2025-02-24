const MentorCard = ({ name, twitter, github, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-[#009999]">{name}</h3>
          <div className="flex space-x-4">
            {twitter && (
              <a 
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:opacity-80"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            )}
            {github && (
              <a 
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:opacity-80"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

const Mentors = () => {
  const mentors = [
    {
      name: "しゃけのきりみ。",
      twitter: "shakenokirimi12",
      github: "Shakenokirimi12",
      bio: "Aizu Hack2025主催者。会津大学学部2年。React、Node.js、JavaScriptを得意とする。2月には初心者ハッカソンを主催し、2度目のハッカソン主催となる。",
    },
    {
      name: "佐藤 花子",
      twitter: "hanako_sato",
      github: "hanakos",
      bio: "会津大学大学院在学中。機械学習とWebアプリケーション開発に興味があり、PythonとJavaScriptを使用した開発経験が豊富。複数のAI関連プロジェクトに参加し、技術指導の経験も持つ。",
    },
    {
      name: "鈴木 一郎",
      twitter: "i_suzuki",
      github: "suzuki-dev",
      bio: "会津大学3年生。複数のハッカソンで入賞経験あり。フロントエンド開発を得意とし、UIデザインにも関心がある。学生の視点から参加者をサポートし、モダンな技術スタックの活用を推奨。",
    },
    {
      name: "高橋 美咲",
      twitter: "misaki_t",
      github: "misakit",
      bio: "会津大学卒業生。スタートアップでバックエンド開発を担当。データベース設計とAPIアーキテクチャに精通。チーム開発の経験が豊富で、プロジェクトマネジメントの観点からもアドバイス可能。",
    },
    {
      name: "中村 健一",
      twitter: "knakamura",
      github: "kenichi-n",
      bio: "会津大学4年生。オープンソースプロジェクトにコントリビューターとして参加。モバイルアプリ開発の経験も豊富。GitとGitHubの効果的な活用方法について指導可能。",
    },
    {
      name: "小林 直子",
      twitter: "naoko_k",
      github: "naoko-dev",
      bio: "会津大学大学院修了。現在は技術コンサルタントとして活動。システム設計からデプロイメントまで幅広く対応。クラウドサービスの活用やセキュリティについても詳しい。",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-[#009999] mb-12">
          メンター紹介
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard
              key={index}
              name={mentor.name}
              twitter={mentor.twitter}
              github={mentor.github}
              bio={mentor.bio}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
