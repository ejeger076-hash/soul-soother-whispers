import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Header Section */}
      <div className="text-center pt-8 pb-6 px-4">
        {/* Teddy Bear Image */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/d2575f9d-380a-407a-9067-6e2447bf26f4.png" 
              alt="Teddy Bear Companion" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm mb-4 font-medium">
          always remember: you are not alone
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Talk. Feel. Heal.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
          With your coolest friend,<br />
          partner, parent.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Healsoul.ai is your digital companion for emotional clarity, self-healing,
          and music therapy based on your mood.
        </p>

        {/* Highlight Banner */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 mb-2 text-sm">
              <span className="bg-white/60 px-3 py-1 rounded-full text-foreground font-medium">
                ✨ 100% Private
              </span>
              <span className="bg-white/60 px-3 py-1 rounded-full text-foreground font-medium">
                Encrypted
              </span>
              <span className="bg-white/60 px-3 py-1 rounded-full text-foreground font-medium">
                Always Judgement-Free
              </span>
              <span className="bg-white/60 px-3 py-1 rounded-full text-foreground font-medium">
                Always Here for You ✨
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          <ChatInterface />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 px-4">
        <p className="text-muted-foreground text-sm">
          Self-healing, reimagined.
        </p>
      </footer>
    </div>
  );
};

export default Index;
