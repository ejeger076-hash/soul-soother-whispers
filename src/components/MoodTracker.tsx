import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Mood {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

const moods: Mood[] = [
  { id: "joyful", emoji: "😊", label: "Joyful", color: "bg-yellow-100 text-yellow-800" },
  { id: "peaceful", emoji: "😌", label: "Peaceful", color: "bg-green-100 text-green-800" },
  { id: "grateful", emoji: "🙏", label: "Grateful", color: "bg-purple-100 text-purple-800" },
  { id: "hopeful", emoji: "🌟", label: "Hopeful", color: "bg-blue-100 text-blue-800" },
  { id: "calm", emoji: "🧘", label: "Calm", color: "bg-teal-100 text-teal-800" },
  { id: "anxious", emoji: "😰", label: "Anxious", color: "bg-orange-100 text-orange-800" },
  { id: "sad", emoji: "😢", label: "Sad", color: "bg-blue-200 text-blue-900" },
  { id: "overwhelmed", emoji: "😵", label: "Overwhelmed", color: "bg-red-100 text-red-800" },
];

const moodResponses = {
  joyful: "That's wonderful! 🌈 Your joy is contagious and beautiful. Keep sharing that light with the world - you're making it brighter! ✨",
  peaceful: "How lovely that you're feeling peaceful! 🕊️ This inner calm is a gift. Take a moment to breathe it in and let this serenity nourish your soul.",
  grateful: "Gratitude is such a powerful emotion! 🌻 Thank you for recognizing the good in your life. This mindset will continue to bring you abundance and joy.",
  hopeful: "Hope is like a beacon in the darkness! 🌅 Your optimism is a strength that will guide you through any challenge. Keep believing in beautiful possibilities.",
  calm: "Inner peace is a treasure! 🧘‍♀️ You've found your center, and that's beautiful. This calmness will serve you well in all aspects of life.",
  anxious: "I see you, and your feelings are completely valid. 🤗 Anxiety can feel overwhelming, but remember: you are stronger than your worries. Try taking three deep breaths with me. You're safe.",
  sad: "Your sadness is heard and honored. 💙 It's okay to feel this way - emotions are part of being human. You don't have to carry this alone. Gentle moments and brighter days are coming.",
  overwhelmed: "I feel your overwhelm, and I'm here with you. 🌊 When everything feels like too much, let's focus on just this moment. You don't have to solve everything right now. One breath, one step at a time."
};

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodNote, setMoodNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Let me know how you're feeling today 🧸",
        variant: "destructive",
      });
      return;
    }

    const selectedMoodData = moods.find(m => m.id === selectedMood);
    const personalizedResponse = selectedMoodData ? moodResponses[selectedMoodData.id as keyof typeof moodResponses] : "";
    
    // In a real app, this would save to a database
    setIsSubmitted(true);
    toast({
      title: "Mood recorded 💝",
      description: personalizedResponse,
    });

    // Reset after a delay
    setTimeout(() => {
      setSelectedMood(null);
      setMoodNote("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Card className="p-3 sm:p-6 bg-gradient-to-br from-background to-primary/5">
      <CardHeader className="text-center pb-3 sm:pb-4 px-0">
        <CardTitle className="text-lg sm:text-2xl font-semibold text-primary">Mood Check-in</CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground">
          How are you feeling right now? Your emotions matter.
        </p>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-6 px-0">
        {!isSubmitted ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {moods.map((mood) => (
                <Button
                  key={mood.id}
                  variant={selectedMood === mood.id ? "default" : "outline"}
                  className={`h-auto p-2 sm:p-4 flex flex-col gap-1 sm:gap-2 transition-all duration-200 ${
                    selectedMood === mood.id 
                      ? 'ring-2 ring-primary ring-offset-2' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => handleMoodSelect(mood.id)}
                >
                  <span className="text-xl sm:text-2xl">{mood.emoji}</span>
                  <span className="text-xs sm:text-xs font-medium">{mood.label}</span>
                </Button>
              ))}
            </div>

            {selectedMood && (
              <div className="space-y-3 sm:space-y-4 animate-fade-in">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 block">
                    Want to share more about how you're feeling? (optional)
                  </label>
                  <Textarea
                    placeholder="Tell me what's on your mind..."
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    className="min-h-[60px] sm:min-h-[80px] text-sm"
                  />
                </div>

                <Button onClick={handleSubmit} className="w-full text-sm sm:text-base py-2 sm:py-3">
                  Record My Mood 💝
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-6 sm:py-8 animate-fade-in">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🌟</div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
              Thank you for checking in!
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-2">
              Remember, every feeling is temporary and you're not alone in your journey.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};