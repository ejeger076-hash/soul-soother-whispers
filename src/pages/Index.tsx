import { ChatInterface } from "@/components/ChatInterface";
import teddyAvatar from "@/assets/teddy-avatar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted font-sans relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blush rounded-full opacity-20 blur-2xl animate-float-gentle"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-sky rounded-full opacity-30 blur-xl animate-pulse-soft"></div>
      <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-cream rounded-full opacity-25 blur-2xl animate-breathe"></div>
      
      {/* Header Section */}
      <div className="text-center pt-16 pb-8 px-4 relative z-10">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={teddyAvatar}
            alt="Healsoul.ai Teddy Bear Companion" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float-gentle hover:animate-breathe transition-all duration-500"
          />
        </div>

        {/* Tagline */}
        <p className="text-lavender text-sm mb-8 font-medium tracking-wide">
          ✨ always remember: you are not alone ✨
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-lavender via-primary to-lavender bg-clip-text text-transparent mb-3 tracking-tight">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-8">
          With your coolest friend, partner, parent.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base leading-relaxed">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-4 shadow-lg">
            <div className="flex flex-wrap justify-center gap-3 text-sm text-foreground/80 font-medium">
              <span className="bg-blush px-4 py-2 rounded-full">✨ 100% Private</span>
              <span className="bg-cream px-4 py-2 rounded-full">🔒 Encrypted</span>
              <span className="bg-sky px-4 py-2 rounded-full">💜 Judgement-Free</span>
              <span className="bg-accent px-4 py-2 rounded-full">🤗 Always Here ✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-md mx-auto px-4 pb-12 relative z-10">
        <div className="bg-card/95 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 overflow-hidden relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 via-blush/20 to-sky/20 rounded-3xl blur-xl opacity-60 -z-10"></div>
          <ChatInterface />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-4 relative z-10">
        <p className="text-muted-foreground text-sm font-light">
          Self-healing, reimagined.
        </p>
      </footer>
    </div>
  );
};

export default Index;
