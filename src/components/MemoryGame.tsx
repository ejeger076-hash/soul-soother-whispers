import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface GameCard {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const images = [
  "photo-1472396961693-142e6e269027", // deer
  "photo-1500673922987-e212871fec22", // lights
  "photo-1465146344425-f00d5f5c8f07", // flowers
  "photo-1535268647677-300dbf3d78d1", // kitten
  "photo-1518877593221-1f28583780b4", // whale
];

export const MemoryGame = () => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const { toast } = useToast();

  const initializeGame = () => {
    const gameImages = images.slice(0, 4); // Use 4 pairs for 8 cards
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
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      setMoves(prev => prev + 1);

      if (cards[first].image === cards[second].image) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setFlippedCards([]);
          
          // Check if game is complete
          const newCards = cards.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          );
          if (newCards.every(card => card.isMatched)) {
            setIsGameComplete(true);
            toast({
              title: "Congratulations! 🎉",
              description: `You completed the memory game in ${moves + 1} moves! Your mind is getting stronger.`,
            });
          }
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
  }, [flippedCards, cards, moves, toast]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].isFlipped || cards[cardId].isMatched) {
      return;
    }

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-secondary/10">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-primary mb-2">Memory Healing Game</h3>
        <p className="text-muted-foreground mb-4">
          Find matching pairs to strengthen your mind and find inner peace
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <span className="text-sm text-muted-foreground">Moves: {moves}</span>
          <Button onClick={initializeGame} variant="outline" size="sm">
            New Game
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
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
            Beautiful work! Your mind is healing through play. 🌱
          </p>
        </div>
      )}
    </Card>
  );
};