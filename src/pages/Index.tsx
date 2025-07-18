import { ChatInterface } from "@/components/ChatInterface";
import teddyAvatar from "@/assets/teddy-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted font-sans relative overflow-hidden">
      {/* Very subtle background elements */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-blush rounded-full opacity-10 blur-3xl animate-float-gentle"></div>
      <div className="absolute top-60 right-32 w-32 h-32 bg-sky rounded-full opacity-15 blur-2xl animate-pulse-soft"></div>
      <div className="absolute bottom-60 left-1/3 w-36 h-36 bg-cream rounded-full opacity-12 blur-3xl animate-breathe"></div>
      
      {/* Header Section - Desktop Only */}
      <div className="text-center pt-20 pb-12 px-8 relative z-10 max-w-4xl mx-auto">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-12">
          <img 
            src={teddyAvatar}
            alt="Healsoul.ai Teddy Bear Companion" 
            className="w-40 h-40 object-contain animate-float-gentle hover:animate-breathe transition-all duration-700"
          />
        </div>

        {/* Tagline */}
        <p className="text-lavender text-lg mb-12 font-medium tracking-wide">
          ✨ always remember: you are not alone ✨
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl font-semibold bg-gradient-to-r from-lavender via-primary to-lavender bg-clip-text text-transparent mb-6 tracking-tight">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-3xl font-medium text-foreground/80 mb-12">
          With your coolest friend, partner, parent.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl p-6 shadow-sm">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-foreground/80 font-medium">
              <span className="bg-blush px-6 py-3 rounded-full">✨ 100% Private</span>
              <span className="bg-cream px-6 py-3 rounded-full">🔒 Encrypted</span>
              <span className="bg-sky px-6 py-3 rounded-full">💜 Judgement-Free</span>
              <span className="bg-accent px-6 py-3 rounded-full">🤗 Always Here ✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section - Small Desktop Version */}
      <div className="max-w-lg mx-auto px-8 pb-16 relative z-10">
        <div className="bg-card/95 backdrop-blur-md rounded-3xl shadow-lg border border-border/30 overflow-hidden relative">
          {/* Very subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-lavender/10 via-blush/10 to-sky/10 rounded-3xl blur-xl opacity-40 -z-10"></div>
          <ChatInterface />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 px-8 relative z-10">
        <p className="text-muted-foreground text-lg font-light">
          Self-healing, reimagined.
        </p>
      </footer>
    </div>
  );
};

export default Index;
