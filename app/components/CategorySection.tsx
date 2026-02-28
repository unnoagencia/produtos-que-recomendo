import { Categoria } from "@/app/data/produtos";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  categoria: Categoria;
}

export default function CategorySection({ categoria }: CategorySectionProps) {
  return (
    <section id={categoria.id} className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{categoria.emoji}</span>
        <h2 className="text-xl font-semibold text-gray-800">{categoria.nome}</h2>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categoria.produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}
