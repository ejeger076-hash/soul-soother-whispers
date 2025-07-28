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
    
    // In a real app, this would save to a database
    setIsSubmitted(true);
    toast({
      title: "Mood recorded 💝",
      description: `Thank you for sharing that you're feeling ${selectedMoodData?.label.toLowerCase()}. Your feelings are valid and important.`,
    });

    // Reset after a delay
    setTimeout(() => {
      setSelectedMood(null);
      setMoodNote("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-primary/5">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-semibold text-primary">Mood Check-in</CardTitle>
        <p className="text-muted-foreground">
          How are you feeling right now? Your emotions matter.
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {!isSubmitted ? (
          <>
            <div className="grid grid-cols-4 gap-3">
              {moods.map((mood) => (
                <Button
                  key={mood.id}
                  variant={selectedMood === mood.id ? "default" : "outline"}
                  className={`h-auto p-4 flex flex-col gap-2 transition-all duration-200 ${
                    selectedMood === mood.id 
                      ? 'ring-2 ring-primary ring-offset-2' 
                      : 'hover:scale-105'
                  }`}
                  onClick={() => handleMoodSelect(mood.id)}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>

            {selectedMood && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Want to share more about how you're feeling? (optional)
                  </label>
                  <Textarea
                    placeholder="Tell me what's on your mind..."
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>

                <Button onClick={handleSubmit} className="w-full">
                  Record My Mood 💝
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Thank you for checking in!
            </h3>
            <p className="text-muted-foreground">
              Remember, every feeling is temporary and you're not alone in your journey.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};