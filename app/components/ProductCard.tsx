import { Produto } from "@/app/data/produtos";
import Image from "next/image";

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1">
          {produto.nome}
        </h3>
        <p className="text-sm text-gray-500 flex-1 mb-4">{produto.descricao}</p>
        <a
          href={produto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-xl hover:bg-gray-700 transition-colors duration-200"
        >
          Ver produto →
        </a>
      </div>
    </div>
  );
}
