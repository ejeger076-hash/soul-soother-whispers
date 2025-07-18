import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-hero py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to start your healing journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start healing, one chat at a time.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Try Healsoul.ai Free 🌟
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-foreground mb-2">Healsoul.ai</p>
            <p>Your digital companion for mental wellness</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Made with 💜 for your mental wellness • Always remember: you are not alone
          </p>
        </div>
      </div>
    </footer>
  );
}