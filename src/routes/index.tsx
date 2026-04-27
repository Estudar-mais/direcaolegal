import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BannerCarousel } from "@/components/banner-carousel";
import {
  Car,
  GraduationCap,
  ShieldCheck,
  Clock,
  Award,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-driving.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Direção Legal — treinamento para habilitados" },
      {
        name: "description",
        content:
          "Direção Legal: treinamento para habilitados. Aulas práticas e instrutores qualificados.",
      },
      { property: "og:title", content: "Direção Legal — treinamento para habilitados" },
      {
        property: "og:description",
        content: "Treinamento prático para habilitados que querem perder o medo e dirigir com segurança no dia a dia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
          <div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-secondary-foreground">
              Volte a dirigir
              <br />
              <span className="text-primary drop-shadow-[0_0_30px_oklch(0.86_0.19_95/0.6)]">
                com confiança!
              </span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80 max-w-lg">
              Treinamento prático para habilitados que querem perder o medo e dirigir com segurança no dia a dia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="text-base font-bold h-14 px-8 shadow-[0_0_30px_oklch(0.86_0.19_95/0.5)] hover:scale-105 transition-transform"
              >
                <Link to="/contato">Agendar aula</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-base font-bold h-14 px-8 shadow-[0_0_30px_oklch(0.86_0.19_95/0.5)] hover:scale-105 transition-transform"
              >
                <Link to="/servicos">Ver serviços</Link>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-3xl font-black text-primary">7k</div>
                <div className="text-xs text-secondary-foreground/60">Alunos formados</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">14</div>
                <div className="text-xs text-secondary-foreground/60">Anos de história</div>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <BannerCarousel />
          </div>
        </div>
      </section>

      {/* SOBRE O SERVIÇO & PARA QUEM É */}
      <section className="py-24 bg-background border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Sobre */}
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                Sobre o serviço
              </span>
              <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 leading-tight text-foreground">
                O Direção Legal é um treinamento especializado para habilitados.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nosso foco é ajudar você a ganhar confiança, prática e independência no trânsito. Mais do que aulas, é um acompanhamento para você perder o medo e assumir o volante com segurança.
              </p>
            </div>

            {/* Para quem é */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-primary/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <Users className="h-6 w-6 text-primary" />
                Para quem é indicado?
              </h3>
              <ul className="space-y-5">
                {[
                  "Pessoas que tiraram a CNH e não dirigem há muito tempo.",
                  "Quem tem medo de dirigir ou sente insegurança no trânsito.",
                  "Quem quer aprender na prática (cidade, trânsito real, estacionamento).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-foreground/80 font-medium text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Nossos diferenciais
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              4 grandes benefícios
              <br />
              do nosso método
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Car,
                title: "Trânsito real",
                desc: "Aulas práticas diretamente na cidade, enfrentando as situações reais do dia a dia.",
              },
              {
                icon: ShieldCheck,
                title: "Instrutor experiente",
                desc: "Profissionais qualificados, pacientes e focados em te dar total segurança ao volante.",
              },
              {
                icon: Clock,
                title: "Horários flexíveis",
                desc: "Agendamentos que se adaptam à sua rotina, para você treinar no seu tempo livre.",
              },
              {
                icon: Users,
                title: "Atendimento personalizado",
                desc: "Foco total na sua dificuldade, seja em baliza, ladeiras ou trânsito intenso.",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="p-8 border-2 hover:border-primary transition-all hover:shadow-[0_10px_40px_-10px_oklch(0.86_0.19_95/0.4)] hover:-translate-y-1 group bg-card"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Nossos serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Categorias <span className="text-primary">de habilitação</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: "A",
                desc: "Motos",
                img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
              },
              {
                cat: "B",
                desc: "Carros",
                img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
              },
              {
                cat: "D",
                desc: "Ônibus",
                img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
              },
              {
                cat: "E",
                desc: "Carretas",
                img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
              },
            ].map((c) => (
              <Link
                to="/servicos"
                key={c.cat}
                className="group relative overflow-hidden bg-black rounded-2xl text-center transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_oklch(0.86_0.19_95/0.4)] h-64 md:h-80 flex flex-col justify-end p-8 border border-primary/20 hover:border-primary"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={c.img}
                    alt={c.desc}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 text-white">
                  <div className="text-7xl font-black text-primary drop-shadow-md group-hover:text-primary-foreground transition-colors">
                    {c.cat}
                  </div>
                  <div className="mt-3 text-lg font-bold opacity-90">{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - DESATIVADO POR ENQUANTO */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">O que nossos alunos dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mariana S.", text: "Passei de primeira! Os instrutores são incríveis e muito pacientes. Recomendo!" },
              { name: "Carlos R.", text: "Ambiente top, aulas práticas excelentes. A Direção Legal mudou meu medo de dirigir." },
              { name: "Juliana P.", text: "Atendimento maravilhoso, horários que cabem na minha rotina. 10 de 10!" },
            ].map((t, i) => (
              <Card key={i} className="p-8 border-2 bg-gradient-to-br from-card to-primary/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/80 italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center font-black text-primary-foreground">{t.name[0]}</div>
                  <div className="font-bold">{t.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0/0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black max-w-3xl mx-auto leading-tight">
            Pronto para voltar a dirigir?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto opacity-80">
            Agende sua primeira aula hoje e dê o primeiro passo para a sua independência.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base font-bold h-14 px-8 hover:scale-105 transition-transform"
            >
              <Link to="/contato">Falar com a equipe</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" /> Sem taxas escondidas
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" /> Parcele em até 12x
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" /> Veículos com duplo comando
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
