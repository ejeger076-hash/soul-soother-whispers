import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

type Difficulty = "easy" | "medium" | "hard";

interface GameCard {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface DifficultyConfig {
  pairs: number;
  gridCols: string;
  label: string;
  description: string;
}

const images = [
  "photo-1472396961693-142e6e269027", // deer
  "photo-1500673922987-e212871fec22", // lights
  "photo-1465146344425-f00d5f5c8f07", // flowers
  "photo-1535268647677-300dbf3d78d1", // kitten
  "photo-1518877593221-1f28583780b4", // whale
  "photo-1441974231531-c6227db76b6e", // forest
  "photo-1506905925346-21bda4d32df4", // mountains
  "photo-1469474968028-56623f02e42e", // lake
];

const difficultyConfig: Record<Difficulty, DifficultyConfig> = {
  easy: { pairs: 4, gridCols: "grid-cols-4", label: "Easy", description: "4 pairs • Perfect for beginners" },
  medium: { pairs: 6, gridCols: "grid-cols-4", label: "Medium", description: "6 pairs • Build your focus" },
  hard: { pairs: 8, gridCols: "grid-cols-4", label: "Hard", description: "8 pairs • Challenge your mind" },
};

export const MemoryGame = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [bestScores, setBestScores] = useState<Record<Difficulty, number | null>>({
    easy: null,
    medium: null,
    hard: null,
  });
  const { toast } = useToast();

  // Load best scores from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("memoryGameScores");
    if (saved) {
      setBestScores(JSON.parse(saved));
    }
  }, []);

  const initializeGame = () => {
    const config = difficultyConfig[difficulty];
    const gameImages = images.slice(0, config.pairs);
    const cardPairs = [...gameImages, ...gameImages];
    const shuffledCards = cardPairs
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setIsGameComplete(false);
    setGameStarted(true);
  };

  useEffect(() => {
    if (!gameStarted) initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const currentMoves = moves + 1;
      setMoves(currentMoves);

      if (cards[first].image === cards[second].image) {
        // Match found
        setTimeout(() => {
          setCards(prev => {
            const newCards = prev.map(card => 
              card.id === first || card.id === second 
                ? { ...card, isMatched: true }
                : card
            );
            
            // Check if game is complete
            if (newCards.every(card => card.isMatched)) {
              setIsGameComplete(true);
              
              // Check if it's a new best score
              const currentBest = bestScores[difficulty];
              const isNewBest = !currentBest || currentMoves < currentBest;
              
              if (isNewBest) {
                const newBestScores = { ...bestScores, [difficulty]: currentMoves };
                setBestScores(newBestScores);
                localStorage.setItem("memoryGameScores", JSON.stringify(newBestScores));
                
                toast({
                  title: "New Personal Best! 🏆",
                  description: `Amazing! ${currentMoves} moves on ${difficultyConfig[difficulty].label} difficulty!`,
                });
              } else {
                toast({
                  title: "Congratulations! 🎉",
                  description: `Completed in ${currentMoves} moves! Your best: ${currentBest}`,
                });
              }
            }
            
            return newCards;
          });
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].isFlipped || cards[cardId].isMatched) {
      return;
    }

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setIsGameComplete(false);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    setGameStarted(false);
    setIsGameComplete(false);
  };

  if (!gameStarted) {
    return (
      <Card className="p-6 bg-gradient-to-br from-background to-secondary/10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-primary mb-2">Memory Healing Game</CardTitle>
          <p className="text-muted-foreground">
            Choose your difficulty and strengthen your mind through gentle focus
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {(Object.keys(difficultyConfig) as Difficulty[]).map((diff) => {
              const config = difficultyConfig[diff];
              const bestScore = bestScores[diff];
              return (
                <Button
                  key={diff}
                  variant={difficulty === diff ? "default" : "outline"}
                  className="w-full h-auto p-4 justify-between"
                  onClick={() => handleDifficultyChange(diff)}
                >
                  <div className="text-left">
                    <div className="font-semibold">{config.label}</div>
                    <div className="text-sm opacity-80">{config.description}</div>
                  </div>
                  {bestScore && (
                    <Badge variant="secondary" className="ml-2">
                      Best: {bestScore} moves
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
          
          <Button onClick={initializeGame} className="w-full" size="lg">
            Start Game
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-secondary/10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-2xl font-semibold text-primary">Memory Healing Game</h3>
          <Badge variant="outline">{difficultyConfig[difficulty].label}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">
          Find matching pairs to strengthen your mind and find inner peace
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <span className="text-sm text-muted-foreground">Moves: {moves}</span>
          {bestScores[difficulty] && (
            <span className="text-sm text-muted-foreground">
              Best: {bestScores[difficulty]} moves
            </span>
          )}
          <Button onClick={handleNewGame} variant="outline" size="sm">
            Change Difficulty
          </Button>
          <Button onClick={initializeGame} variant="outline" size="sm">
            Restart
          </Button>
        </div>
      </div>

      <div className={`grid ${difficultyConfig[difficulty].gridCols} gap-3 max-w-md mx-auto`}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 ${
              card.isFlipped || card.isMatched 
                ? 'transform-none' 
                : 'hover:scale-105'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                {card.isFlipped || card.isMatched ? (
                  <img
                    src={`https://images.unsplash.com/${card.image}?w=200&h=200&fit=crop`}
                    alt="Memory card"
                    className={`w-full h-full object-cover ${
                      card.isMatched ? 'opacity-75 ring-2 ring-primary' : ''
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-2xl">🧸</span>
                  </div>
                )}
              </div>
            </CardContent>
          </div>
        ))}
      </div>

      {isGameComplete && (
        <div className="text-center mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-primary font-medium">
            Beautiful work on {difficultyConfig[difficulty].label} mode! Your mind is healing through play. 🌱
          </p>
          <Button onClick={handleNewGame} className="mt-3" variant="outline">
            Try Different Difficulty
          </Button>
        </div>
      )}
    </Card>
  );
};