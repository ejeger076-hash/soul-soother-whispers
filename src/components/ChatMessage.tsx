import { useState, useEffect } from "react";
import teddyAvatar from "@/assets/teddy-avatar.png";
import { MoodTracker } from "@/components/MoodTracker";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
  showAvatar?: boolean;
}

export const ChatMessage = ({ message, isUser, isTyping = false, showAvatar = true }: ChatMessageProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Check if message contains mood tracker trigger
  const shouldShowMoodTracker = !isUser && message.includes("[MOOD_TRACKER]");
  const cleanMessage = message.replace("[MOOD_TRACKER]", "").trim();
  
  // Typing animation for teddy messages
  useEffect(() => {
    if (!isUser && !isTyping && cleanMessage) {
      const timer = setTimeout(() => {
        if (currentIndex < cleanMessage.length) {
          setDisplayText(cleanMessage.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, 30);
      
      return () => clearTimeout(timer);
    } else if (isUser) {
      setDisplayText(message);
    }
  }, [currentIndex, cleanMessage, isUser, isTyping]);

  if (isTyping) {
    return (
      <div className="flex items-start gap-3 animate-slide-up">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-teddy-secondary">
          <img 
            src={teddyAvatar} 
            alt="Teddy Bear" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-teddy-bubble rounded-2xl rounded-tl-md px-4 py-3 max-w-[75%] shadow-sm border border-border/30">
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-sm text-muted-foreground ml-2">Teddy is thinking...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 animate-slide-up ${isUser ? 'flex-row-reverse' : ''}`}>
      {!isUser && showAvatar && (
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-teddy-secondary animate-bounce-gentle">
          <img 
            src={teddyAvatar} 
            alt="Teddy Bear" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`
        rounded-2xl px-4 py-3 shadow-sm
        ${isUser 
          ? 'bg-user-bubble text-foreground rounded-tr-md max-w-[75%]' 
          : `bg-teddy-bubble text-foreground rounded-tl-md border border-border/30 ${shouldShowMoodTracker ? 'max-w-[85%]' : 'max-w-[75%]'}`
        }
      `}>
        <p className="text-sm leading-relaxed font-medium">
          {isUser ? message : displayText}
          {!isUser && currentIndex < cleanMessage.length && (
            <span className="animate-typing">|</span>
          )}
        </p>
        
        {shouldShowMoodTracker && currentIndex >= cleanMessage.length && (
          <div className="mt-4 animate-fade-in">
            <MoodTracker />
          </div>
        )}
      </div>
    </div>
  );
};