import { ChatInterface } from "@/components/ChatInterface";
import teddyAvatar from "@/assets/teddy-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-8 px-4">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={teddyAvatar}
            alt="Healsoul.ai Teddy Bear Companion" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-600 text-sm mb-8 font-medium">
          always remember: you are not alone
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
          With your coolest friend, partner, parent.
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700">
              <span>✨ 100% Private.</span>
              <span>Encrypted.</span>
              <span>Always Judgement-Free.</span>
              <span>Always Here for You. ✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
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
