import { useState, useRef, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import prideFoxMascot from "@/assets/pride-fox-mascot.png";

// Extend Window interface for speech recognition
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

interface VoiceInterfaceProps {
  onVoiceMessage?: (message: string) => void;
}

export function VoiceInterface({ onVoiceMessage }: VoiceInterfaceProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = '';
          let interimTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptSegment = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcriptSegment;
            } else {
              interimTranscript += transcriptSegment;
            }
          }

          setTranscript(finalTranscript || interimTranscript);

          if (finalTranscript && onVoiceMessage) {
            onVoiceMessage(finalTranscript);
            setTranscript("");
          }
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onVoiceMessage]);

  const startListening = () => {
    if (recognitionRef.current && isSupported) {
      setIsListening(true);
      setTranscript("");
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-soft p-6 rounded-3xl">
      <div className="flex flex-col items-center space-y-6">
        {/* Mascot with Voice Aura */}
        <div className="relative">
          {/* Voice aura rings when listening */}
          {isListening && (
            <>
              <div className="absolute inset-0 bg-gradient-voice-aura rounded-full animate-voice-ripple scale-150 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-voice-aura rounded-full animate-voice-ripple scale-125 opacity-40" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute inset-0 bg-gradient-voice-aura rounded-full animate-voice-ripple scale-110 opacity-20" style={{ animationDelay: '0.6s' }}></div>
            </>
          )}
          
          {/* Mascot */}
          <div className={`relative w-32 h-32 md:w-40 md:h-40 ${isListening ? 'animate-pride-pulse' : 'animate-gentle-bounce'}`}>
            <img
              src={prideFoxMascot}
              alt="PrideSoul Fox Companion"
              className="w-full h-full object-contain drop-shadow-lg animate-rainbow-flow"
            />
            <div className="absolute inset-0 bg-gradient-voice-aura rounded-full blur-2xl scale-75 opacity-30"></div>
          </div>
        </div>

        {/* Voice Status & Transcript */}
        <div className="text-center min-h-[60px] flex flex-col justify-center">
          {isListening ? (
            <div className="space-y-2">
              <p className="text-voice-listening font-semibold text-lg">
                🎤 Listening... let it out, I'm here for you 🏳️‍🌈
              </p>
              {transcript && (
                <p className="text-muted-foreground text-sm italic">
                  "{transcript}"
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-foreground font-semibold text-lg">
                Ready to listen 💙
              </p>
              <p className="text-muted-foreground text-sm">
                Tap to talk - no judgments here, love
              </p>
            </div>
          )}
        </div>

        {/* Tap to Talk Button */}
        {isSupported ? (
          <Button
            onClick={toggleListening}
            className={`
              w-20 h-20 rounded-full border-4 transition-all duration-300
              ${isListening 
                ? 'bg-voice-listening border-voice-pulse shadow-voice hover:bg-voice-pulse' 
                : 'bg-primary border-primary-glow shadow-glow hover:bg-primary-glow'
              }
            `}
            disabled={!isSupported}
          >
            {isListening ? (
              <MicOff className="w-8 h-8 text-white" />
            ) : (
              <Mic className="w-8 h-8 text-white" />
            )}
          </Button>
        ) : (
          <div className="text-center text-muted-foreground text-sm">
            <p>Voice input not supported in your browser</p>
            <p className="text-xs mt-1">Try Chrome or Safari for voice features</p>
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-pride-red/10 border-pride-red/30 text-pride-red hover:bg-pride-red/20"
            onClick={() => onVoiceMessage?.("I'm feeling overwhelmed right now")}
          >
            Feeling overwhelmed
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-pride-blue/10 border-pride-blue/30 text-pride-blue hover:bg-pride-blue/20"
            onClick={() => onVoiceMessage?.("I need someone to talk to")}
          >
            Need to talk
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-pride-violet/10 border-pride-violet/30 text-pride-violet hover:bg-pride-violet/20"
            onClick={() => onVoiceMessage?.("I'm feeling unseen and misunderstood")}
          >
            Feeling unseen
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-pride-green/10 border-pride-green/30 text-pride-green hover:bg-pride-green/20"
            onClick={() => onVoiceMessage?.("Help me ground myself please")}
          >
            Help me ground myself
          </Button>
        </div>
      </div>
    </Card>
  );
}