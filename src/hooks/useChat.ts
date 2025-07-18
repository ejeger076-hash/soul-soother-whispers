import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addMessage = useCallback((content: string, isUser: boolean) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  }, []);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (isLoading) return;

    // Add user message
    addMessage(userMessage, true);
    setIsLoading(true);

    try {
      // Send to webhook
      const response = await fetch(
        "https://heasoul.app.n8n.cloud/webhook-test/59f7601f-22ad-437e-a4c1-303eb7a29f30",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      
      // Add teddy response with a delay for natural feel
      setTimeout(() => {
        addMessage(data || "I'm here for you! 🧸 Tell me more about how you're feeling.", false);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error sending message:", error);
      
      // Fallback response when webhook fails
      setTimeout(() => {
        addMessage(
          "I'm having trouble connecting right now, but I'm still here for you! 🧸 Sometimes technology has hiccups, but my care for you never does. Please try again in a moment.",
          false
        );
        setIsLoading(false);
      }, 1000);

      toast({
        title: "Connection issue",
        description: "I'm having trouble connecting, but I'm still here for you!",
        variant: "destructive",
      });
    }
  }, [isLoading, addMessage, toast]);

  const initializeChat = useCallback(() => {
    if (messages.length === 0) {
      addMessage("Hey! 🧸 I'm always here for you. How are you feeling today?", false);
    }
  }, [messages.length, addMessage]);

  return {
    messages,
    isLoading,
    sendMessage,
    initializeChat,
  };
};