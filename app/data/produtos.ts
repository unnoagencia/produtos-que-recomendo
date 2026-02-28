export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

export interface Categoria {
  id: string;
  nome: string;
  emoji: string;
  produtos: Produto[];
}

export const categorias: Categoria[] = [
  {
    id: "audiovisual",
    nome: "Audiovisual",
    emoji: "🎬",
    produtos: [
      {
        id: "drone",
        nome: "Drone DJI Mini 4 Pro",
        descricao: "Drone compacto com câmera 4K e voo inteligente",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Drone",
        link: "#",
      },
      {
        id: "insta360",
        nome: "Insta360 X4",
        descricao: "Câmera 360° para vídeos imersivos e aventuras",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Insta360",
        link: "#",
      },
      {
        id: "tripe",
        nome: "Tripé Joby GorillaPod",
        descricao: "Tripé flexível para câmeras e smartphones",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Trip%C3%A9",
        link: "#",
      },
      {
        id: "microfone",
        nome: "Microfone DJI Mic 2",
        descricao: "Microfone lapela sem fio com ótima qualidade de áudio",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Microfone",
        link: "#",
      },
      {
        id: "iluminacao",
        nome: "Luz de Anel LED",
        descricao: "Iluminação profissional para vídeos e fotos",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Ilumina%C3%A7%C3%A3o",
        link: "#",
      },
    ],
  },
  {
    id: "ciclismo",
    nome: "Ciclismo",
    emoji: "🚴",
    produtos: [
      {
        id: "capacete",
        nome: "Capacete Ciclismo",
        descricao: "Capacete leve e aerodinâmico para ciclistas",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Capacete",
        link: "#",
      },
      {
        id: "computador",
        nome: "Computador de Bordo Garmin",
        descricao: "GPS e monitor de desempenho para o ciclismo",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Garmin",
        link: "#",
      },
    ],
  },
  {
    id: "viagem",
    nome: "Viagem",
    emoji: "✈️",
    produtos: [
      {
        id: "mochila",
        nome: "Mochila de Viagem 40L",
        descricao: "Mochila resistente e organizada para longas viagens",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Mochila",
        link: "#",
      },
      {
        id: "cubo-viagem",
        nome: "Cubos Organizadores",
        descricao: "Organize as roupas na mala de forma prática",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Cubos",
        link: "#",
      },
    ],
  },
];
