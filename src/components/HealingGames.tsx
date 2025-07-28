import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MemoryGame } from "./MemoryGame";
import { MoodTracker } from "./MoodTracker";

type GameType = "memory" | "mood" | null;

export const HealingGames = () => {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  if (activeGame === "memory") {
    return (
      <div className="space-y-4">
        <Button 
          onClick={() => setActiveGame(null)} 
          variant="outline"
          className="mb-4"
        >
          ← Back to Games
        </Button>
        <MemoryGame />
      </div>
    );
  }

  if (activeGame === "mood") {
    return (
      <div className="space-y-4">
        <Button 
          onClick={() => setActiveGame(null)} 
          variant="outline"
          className="mb-4"
        >
          ← Back to Games
        </Button>
        <MoodTracker />
      </div>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-primary/5">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-primary mb-2">Healing Games</h3>
        <p className="text-muted-foreground">
          Gentle activities to help nurture your mind and soul
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
          onClick={() => setActiveGame("memory")}
        >
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🧩</div>
            <h4 className="font-semibold text-lg mb-2">Memory Game</h4>
            <p className="text-sm text-muted-foreground">
              Strengthen your mind with gentle memory exercises
            </p>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
          onClick={() => setActiveGame("mood")}
        >
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">💝</div>
            <h4 className="font-semibold text-lg mb-2">Mood Tracker</h4>
            <p className="text-sm text-muted-foreground">
              Check in with your emotions and feelings
            </p>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
};