import { useState } from "react";
import { Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const quickResponses = [
    "I'm feeling anxious",
    "Help me track my mood",
    "I just want to talk"
  ];

  const handleQuickResponse = (response: string) => {
    if (!disabled) {
      onSendMessage(response);
    }
  };

  return (
    <div className="border-t border-border/20 bg-card p-4 space-y-3">
      {/* Quick Response Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {quickResponses.map((response, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => handleQuickResponse(response)}
            disabled={disabled}
            className="text-xs bg-secondary/50 hover:bg-accent border-border/40 text-foreground hover:text-accent-foreground transition-all duration-200"
          >
            {response}
          </Button>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 items-end">
        <div className="flex-1">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share what's on your mind..."
            disabled={disabled}
            className="bg-muted/30 border-border/40 rounded-2xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:bg-background transition-colors"
          />
        </div>
        <Button
          type="submit"
          disabled={!message.trim() || disabled}
          size="sm"
          className="rounded-2xl px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-md"
        >
          {disabled ? (
            <Heart className="w-4 h-4 animate-pulse-soft" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </Button>
      </form>
    </div>
  );
};