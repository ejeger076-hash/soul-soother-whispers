import { ChatInterface } from "@/components/ChatInterface";
import teddyAvatar from "@/assets/teddy-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-200/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-rose-200/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-pink-300/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Header Section */}
      <div className="text-center pt-12 pb-8 px-4 relative">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-lg shadow-pink-200/30 flex items-center justify-center border border-pink-100/50 backdrop-blur-sm">
            <img 
              src={teddyAvatar}
              alt="Teddy Bear Companion" 
              className="w-28 h-28 object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-purple-600/80 text-sm mb-6 font-medium tracking-wide">
          ✨ always remember: you are not alone ✨
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 leading-tight">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-medium text-purple-700/90 mb-8 leading-relaxed">
          With your coolest friend,<br />
          <span className="text-pink-600">partner, parent.</span>
        </h2>

        {/* Description */}
        <p className="text-purple-600/70 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-pink-100/70 to-purple-100/70 border border-pink-200/50 rounded-2xl p-6 shadow-lg shadow-pink-200/20 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-3 mb-3">
              <span className="bg-white/90 px-4 py-2 rounded-full text-purple-700 font-medium text-sm shadow-sm border border-pink-200/30">
                ✨ 100% Private
              </span>
              <span className="bg-white/90 px-4 py-2 rounded-full text-purple-700 font-medium text-sm shadow-sm border border-pink-200/30">
                🔒 Encrypted
              </span>
              <span className="bg-white/90 px-4 py-2 rounded-full text-purple-700 font-medium text-sm shadow-sm border border-pink-200/30">
                💜 Always Judgement-Free
              </span>
              <span className="bg-white/90 px-4 py-2 rounded-full text-purple-700 font-medium text-sm shadow-sm border border-pink-200/30">
                🤗 Always Here for You ✨
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-purple-200/30 border border-pink-200/30 overflow-hidden">
          <ChatInterface />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4 relative">
        <p className="text-purple-600/60 text-sm font-medium">
          Self-healing, reimagined. 💜
        </p>
      </footer>
    </div>
  );
};

export default Index;
