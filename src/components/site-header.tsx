import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-black text-primary-foreground shadow-[0_0_20px_oklch(0.86_0.19_95/0.5)]">
            DL
          </div>
          <span className="text-lg font-black tracking-tight text-secondary-foreground">
            DIREÇÃO<span className="text-primary">LEGAL</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">Início</Link>
          <Link to="/servicos" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">Serviços</Link>
          <Link to="/sobre" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">Sobre</Link>
          <Link to="/contato" className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary">Contato</Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg" className="font-bold shadow-[0_0_25px_oklch(0.86_0.19_95/0.4)]">
            <Link to="/contato">Matricule-se</Link>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-secondary-foreground" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/20 bg-secondary px-4 py-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="text-secondary-foreground/90">Início</Link>
          <Link to="/servicos" onClick={() => setOpen(false)} className="text-secondary-foreground/90">Serviços</Link>
          <Link to="/sobre" onClick={() => setOpen(false)} className="text-secondary-foreground/90">Sobre</Link>
          <Link to="/contato" onClick={() => setOpen(false)} className="text-secondary-foreground/90">Contato</Link>
          <Button asChild className="font-bold">
            <Link to="/contato">Matricule-se</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
