import { categorias } from "@/app/data/produtos";
import CategorySection from "@/app/components/CategorySection";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Produtos que Recomendo",
  description: "Uma seleção dos produtos que eu uso e recomendo.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            O que eu uso no dia a dia
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Aqui estão os produtos que faço parte da minha rotina e que indico
            de verdade. Cada link é de afiliado — você não paga nada a mais e
            ainda me ajuda a continuar criando conteúdo. 🙏
          </p>
        </div>
        {categorias.map((categoria) => (
          <CategorySection key={categoria.id} categoria={categoria} />
        ))}
      </main>
      <footer className="text-center py-8 text-sm text-gray-400 border-t border-gray-100 mt-10">
        Feito com ❤️ · Links de afiliado
      </footer>
    </div>
  );
}
