import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Heart } from "lucide-react";
import teddyAvatar from "@/assets/teddy-avatar.png";
import { ChatInterface } from "@/components/ChatInterface";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-tertiary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Teddy Bear Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={teddyAvatar}
                alt="Healsoul.ai Teddy Bear Companion"
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-gentle-bounce drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl scale-75 animate-glow"></div>
            </div>
          </div>

          {/* Small message below teddy */}
          <p className="text-sm text-muted-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            always remember: you are not alone
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Talk. Feel. Heal.
            <br />
            <span className="text-primary">
              With your coolest friend, partner, parent.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Healsoul.ai is your digital companion for emotional clarity, self-healing, and music therapy based on your mood.
          </p>

          {/* Privacy Banner */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-card border border-primary/20 rounded-2xl px-6 py-4 max-w-2xl mx-auto shadow-soft">
              <p className="text-foreground font-semibold text-center">
                <span className="text-primary">✨</span> 100% Private. Encrypted. Always Judgement-Free. Always Here for You. <span className="text-primary">✨</span>
              </p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="animate-slide-up max-w-3xl mx-auto mb-8" style={{ animationDelay: '0.2s' }}>
            <ChatInterfaceInline />
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Self-healing, reimagined.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChatInterfaceInline() {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-soft p-8 rounded-3xl">
      {/* Embedded Chat Interface - Using your existing component */}
      <div className="bg-background/50 rounded-2xl overflow-hidden">
        <ChatInterface />
      </div>
    </Card>
  );
}