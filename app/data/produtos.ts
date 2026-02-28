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
        id: "dji-mic-2",
        nome: "DJI Mic 2",
        descricao: "Áudio sem fio profissional, compacto e confiável para vídeos externos e entrevistas.",
        imagem: "/images/produtos/microfone.webp",
        link: "https://meli.la/1weLhU7",
      },
      {
        id: "dji-mic-mini",
        nome: "DJI Mic Mini 2TX + 1RX",
        descricao: "Versão mais portátil para quem quer mobilidade total sem perder qualidade de som.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=DJI+Mic+Mini",
        link: "https://meli.la/1sFGx6w",
      },
      {
        id: "insta360-x4",
        nome: "Insta 360 X4",
        descricao: "Câmera 360º com qualidade absurda para POV, bastidores e cenas imersivas.",
        imagem: "/images/produtos/insta360.webp",
        link: "https://meli.la/1foHFFS",
      },
      {
        id: "insta360-x5",
        nome: "Insta 360 X5",
        descricao: "Evolução da linha 360 com ainda mais definição e estabilidade cinematográfica.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Insta+360+X5",
        link: "https://meli.la/2pm8mTq",
      },
      {
        id: "drone-dji-mini-5-pro",
        nome: "Drone DJI Mini 5 Pro",
        descricao: "Drone leve, poderoso e ideal para imagens aéreas profissionais com praticidade.",
        imagem: "/images/produtos/drone.webp",
        link: "https://meli.la/24vpNvo",
      },
      {
        id: "lanterna-luz-criativa",
        nome: "Lanterna para luz criativa de vídeo",
        descricao: "Luz portátil para efeitos criativos e recortes dramáticos em gravações.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Lanterna+LED",
        link: "https://s.click.aliexpress.com/e/_mMiAZNL",
      },
      {
        id: "luz-led-60w",
        nome: "Luz de LED para vídeo 60W",
        descricao: "Iluminação principal forte e versátil para dar volume e profundidade à cena.",
        imagem: "/images/produtos/iluminacao.png",
        link: "https://s.click.aliexpress.com/e/_m0o4Pm5",
      },
      {
        id: "microfone-fifine",
        nome: "Microfone Dinâmico Fifine USB/XLR",
        descricao: "Ótimo custo-benefício para podcast, aulas e gravações com som encorpado.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Fifine+USB%2FXLR",
        link: "https://s.click.aliexpress.com/e/_mOL3fxr",
      },
      {
        id: "braco-microfone",
        nome: "Braço de Microfone perfil baixo",
        descricao: "Organização e estética limpa no setup, com mobilidade e firmeza.",
        imagem: "/images/produtos/braco-articulado.webp",
        link: "https://s.click.aliexpress.com/e/_mPhrcJL",
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
    id: "musica",
    nome: "Música",
    emoji: "🎵",
    produtos: [],
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
