import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Mood {
  id: string;
  emoji: string;
  label: string;
}

const moods: Mood[] = [
  { id: "joyful", emoji: "😊", label: "Joyful" },
  { id: "peaceful", emoji: "😌", label: "Peaceful" },
  { id: "grateful", emoji: "🙏", label: "Grateful" },
  { id: "hopeful", emoji: "🌟", label: "Hopeful" },
  { id: "calm", emoji: "🧘", label: "Calm" },
  { id: "anxious", emoji: "😰", label: "Anxious" },
  { id: "sad", emoji: "😢", label: "Sad" },
  { id: "overwhelmed", emoji: "😵", label: "Overwhelmed" },
];

interface MoodCheckInProps {
  onMoodSubmit: (mood: string, label: string) => void;
}

export const MoodCheckIn = ({ onMoodSubmit }: MoodCheckInProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood.id);
    onMoodSubmit(mood.id, mood.label);
    setIsExpanded(false);
    setSelectedMood(null);
  };

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 shadow-sm">
      <CardContent className="p-3">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-sm font-medium text-primary hover:bg-primary/10"
        >
          <span>💝 Mood Check-in</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        
        {isExpanded && (
          <div className="mt-3 space-y-2 animate-fade-in">
            <p className="text-xs text-muted-foreground text-center mb-3">
              How are you feeling right now?
            </p>
            <div className="grid grid-cols-4 gap-2">
              {moods.map((mood) => (
                <Button
                  key={mood.id}
                  variant="outline"
                  size="sm"
                  className="h-auto p-2 flex flex-col gap-1 hover:scale-105 transition-all duration-200 hover:bg-primary/10 border-primary/20"
                  onClick={() => handleMoodSelect(mood)}
                >
                  <span className="text-lg">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};