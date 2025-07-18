import { ChatInterface } from "@/components/ChatInterface";
import teddyAvatar from "@/assets/teddy-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 font-sans">
      {/* Header Section */}
      <div className="text-center pt-12 pb-6 px-4">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={teddyAvatar}
            alt="Healsoul.ai Teddy Bear Companion" 
            className="w-24 h-24 object-contain animate-bounce-gentle hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Tagline */}
        <p className="text-purple-600 text-xs mb-6 font-medium tracking-wider uppercase">
          ✨ always remember: you are not alone ✨
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2 tracking-tight">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
          With your coolest friend, partner, parent.
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl p-3 shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-700 font-medium">
              <span className="bg-purple-100 px-3 py-1 rounded-full">✨ 100% Private</span>
              <span className="bg-pink-100 px-3 py-1 rounded-full">🔒 Encrypted</span>
              <span className="bg-blue-100 px-3 py-1 rounded-full">💜 Judgement-Free</span>
              <span className="bg-green-100 px-3 py-1 rounded-full">🤗 Always Here ✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-2xl mx-auto px-4 pb-8">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden relative">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-sm opacity-30 -z-10 animate-pulse-soft"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-3xl blur-md opacity-20 -z-20 animate-pulse-soft"></div>
          <ChatInterface />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <p className="text-gray-500 text-sm">
          Self-healing, reimagined.
        </p>
      </footer>
    </div>
  );
};

export default Index;
