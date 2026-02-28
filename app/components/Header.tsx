import { categorias } from "@/app/data/produtos";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h1 className="text-lg font-bold text-gray-900">Produtos que Recomendo</h1>
          <p className="text-sm text-gray-500">Uma seleção dos itens que uso e indico</p>
        </div>
        <nav className="flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-colors duration-200"
            >
              <span>{cat.emoji}</span>
              <span>{cat.nome}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
