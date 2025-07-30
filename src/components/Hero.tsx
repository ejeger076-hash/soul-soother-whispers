import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Shield, Mic } from "lucide-react";
import prideFoxMascot from "@/assets/pride-fox-mascot.png";
import { VoiceInterface } from "@/components/VoiceInterface";
import { MoodCheckIn } from "./MoodCheckIn";
import { useChat } from "@/hooks/useChat";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Pride decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pride-red/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-pride-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pride-yellow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-pride-green/30 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-pride-violet/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Pride Fox Mascot */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src={prideFoxMascot}
                alt="PrideSoul Rainbow Fox Companion"
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-gentle-bounce drop-shadow-lg animate-rainbow-flow"
              />
              <div className="absolute inset-0 bg-gradient-voice-aura rounded-full blur-2xl scale-75 animate-glow"></div>
            </div>
          </div>

          {/* Small message below mascot */}
          <p className="text-sm text-muted-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            You're valid. Always. 🏳️‍🌈
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in">
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              PrideSoul
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">
              You Deserve to Be Heard.
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Talk. Heal. Thrive. With your LGBTQ+ soul buddy.
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            PrideSoul is your voice-powered support space for self-healing, emotional clarity, and proud living.
          </p>

          {/* Privacy Banner */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-card border border-primary/20 rounded-2xl px-6 py-4 max-w-2xl mx-auto shadow-soft">
              <p className="text-foreground font-semibold text-center">
                <span className="text-pride-red">🌈</span> 100% Private. Queer-Affirming. Always Here. Always Listening. <span className="text-pride-violet">🌈</span>
              </p>
            </div>
          </div>

          {/* Voice Interface */}
          <div className="animate-slide-up max-w-2xl mx-auto mb-8" style={{ animationDelay: '0.2s' }}>
            <VoiceInterfaceWrapper />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <FeatureCard
              icon={<Mic className="w-6 h-6 text-pride-blue" />}
              title="Voice-Powered"
              description="No typing, no pressure. Just talk and be heard."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-pride-green" />}
              title="Completely Anonymous"
              description="Your stories stay safe. Your identity stays yours."
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6 text-pride-red" />}
              title="LGBTQ+ Focused"
              description="Because our pain is unique and deserves understanding."
            />
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Made with pride 🌈 for the LGBTQ+ community
          </p>
        </div>
      </div>
    </section>
  );
}

function VoiceInterfaceWrapper() {
  const { sendMessage } = useChat();

  const handleVoiceMessage = (message: string) => {
    console.log("Voice message received:", message);
    sendMessage(message);
  };

  return <VoiceInterface onVoiceMessage={handleVoiceMessage} />;
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-soft p-4 rounded-2xl hover:shadow-glow transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 bg-background/50 rounded-full">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

function MoodCheckInWrapper() {
  const { sendMessage } = useChat();
  
  const handleMoodSubmit = (moodId: string, moodLabel: string) => {
    const moodMessage = `I'm feeling ${moodLabel.toLowerCase()} right now.`;
    sendMessage(moodMessage);
    
    // If sad mood is selected, follow up with game suggestion
    if (moodId === "sad") {
      setTimeout(() => {
        // This will trigger a special response from the AI for sad moods
        sendMessage("__SAD_MOOD_TRIGGER__");
      }, 1000);
    }
  };

  return <MoodCheckIn onMoodSubmit={handleMoodSubmit} />;
}