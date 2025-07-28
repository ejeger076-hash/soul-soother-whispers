
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

    console.log("Sending message:", userMessage);
    
    // Add user message
    addMessage(userMessage, true);
    setIsLoading(true);

    try {
      const webhookUrl = "https://heasoul.app.n8n.cloud/webhook/59f7601f-22ad-437e-a4c1-303eb7a29f30";
      console.log("Making request to webhook:", webhookUrl);
      
      // Send to webhook with additional options for CORS
      const response = await fetch(webhookUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        console.error("HTTP error! status:", response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get response text first to handle empty responses
      const responseText = await response.text();
      console.log("Response text:", responseText);
      
      let data;
      if (responseText.trim()) {
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          console.log("Response is not JSON, treating as plain text");
          data = { output: responseText };
        }
      } else {
        console.log("Empty response received");
        data = {};
      }
      console.log("Parsed data:", data);
      
      // Add teddy response with a delay for natural feel
      setTimeout(() => {
        const message = data.output || "I'm here for you! 🧸 Tell me more about how you're feeling.";
        const formattedMessage = message.replace(/\\n/g, '\n');
        console.log("Adding AI response:", formattedMessage);
        addMessage(formattedMessage, false);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error sending message:", error);
      console.error("Error type:", error.constructor.name);
      console.error("Error message:", error.message);
      
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
