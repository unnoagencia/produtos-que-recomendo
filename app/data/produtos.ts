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
        imagem: "/images/produtos/drone.webp",
        link: "#",
      },
      {
        id: "insta360",
        nome: "Insta360 X4",
        descricao: "Câmera 360° para vídeos imersivos e aventuras",
        imagem: "/images/produtos/insta360.webp",
        link: "#",
      },
      {
        id: "tripe",
        nome: "Tripé Joby GorillaPod",
        descricao: "Tripé flexível para câmeras e smartphones",
        imagem: "/images/produtos/braco-articulado.webp",
        link: "#",
      },
      {
        id: "microfone",
        nome: "Microfone DJI Mic 2",
        descricao: "Microfone lapela sem fio com ótima qualidade de áudio",
        imagem: "/images/produtos/microfone.webp",
        link: "#",
      },
      {
        id: "iluminacao",
        nome: "Luz de Anel LED",
        descricao: "Iluminação profissional para vídeos e fotos",
        imagem: "/images/produtos/iluminacao.png",
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
        imagem: "/images/produtos/pedal-lopping.webp",
        link: "#",
      },
      {
        id: "computador",
        nome: "Computador de Bordo Garmin",
        descricao: "GPS e monitor de desempenho para o ciclismo",
        imagem: "/images/produtos/pedal-fs-switch.webp",
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
        imagem: "/images/produtos/cadeira.webp",
        link: "#",
      },
      {
        id: "cubo-viagem",
        nome: "Cubos Organizadores",
        descricao: "Organize as roupas na mala de forma prática",
        imagem: "/images/produtos/mesa.webp",
        link: "#",
      },
    ],
  },
  {
    id: "tecnologia",
    nome: "Tecnologia",
    emoji: "💻",
    produtos: [
      {
        id: "rayban-meta-gen2",
        nome: "Ray-Ban Meta Gen 2",
        descricao: "Óculos inteligentes com câmera, áudio e IA integrada",
        imagem: "/images/produtos/smartwatch.webp",
        link: "#",
      },
      {
        id: "oakley-vanguard-meta",
        nome: "Oakley Vanguard Meta",
        descricao: "Óculos esportivos inteligentes com tecnologia Meta",
        imagem: "/images/produtos/suporte-telefone.webp",
        link: "#",
      },
      {
        id: "macbook-pro-m3-pro",
        nome: "MacBook Pro M3 Pro",
        descricao: "Laptop profissional da Apple com chip M3 Pro",
        imagem: "/images/produtos/macbook-pro-m3-pro.webp",
        link: "#",
      },
      {
        id: "ipad-pro-m4",
        nome: "iPad Pro M4",
        descricao: "Tablet profissional ultrafino com chip M4 da Apple",
        imagem: "/images/produtos/iphone.webp",
        link: "#",
      },
      {
        id: "mac-mini-m4",
        nome: "Mac Mini M4",
        descricao: "Desktop compacto e poderoso com chip M4 da Apple",
        imagem: "/images/produtos/mac-mini-m4.webp",
        link: "#",
      },
    ],
  },
];
