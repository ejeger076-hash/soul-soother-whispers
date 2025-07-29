import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoodCheckIn } from "./MoodCheckIn";
import teddyAvatar from "@/assets/teddy-avatar.png";

export const ChatInterface = () => {
  const { messages, isLoading, sendMessage, initializeChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMoodSubmit = (moodId: string, moodLabel: string) => {
    const moodMessage = `I'm feeling ${moodLabel.toLowerCase()} right now.`;
    sendMessage(moodMessage);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-chat-bg to-secondary/20">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border/20 p-4 flex items-center gap-3 shadow-sm">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-teddy-secondary animate-pulse-soft">
          <img 
            src={teddyAvatar} 
            alt="HealSoul.ai Teddy" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">HealSoul.ai</h1>
          <p className="text-sm text-muted-foreground">
            ⭐ 100% Private. Encrypted. Always Judgment-Free. Always Here for You. ⭐
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-6 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              showAvatar={!message.isUser && (index === 0 || messages[index - 1]?.isUser)}
            />
          ))}
          
          {isLoading && (
            <ChatMessage
              message=""
              isUser={false}
              isTyping={true}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Mood Check-in */}
      <div className="max-w-2xl mx-auto w-full px-4 mb-2">
        <MoodCheckIn onMoodSubmit={handleMoodSubmit} />
      </div>

      {/* Input Area */}
      <div className="max-w-2xl mx-auto w-full">
        <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
      </div>

      {/* Footer */}
      <div className="text-center py-2 px-4">
        <p className="text-xs text-muted-foreground">
          Self-healing, reimagined. 💜
        </p>
      </div>
    </div>
  );
};