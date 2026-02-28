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
        imagem: "https://i.postimg.cc/nhC7NQ13/DJI_mic.webp",
        link: "https://meli.la/1weLhU7",
      },
      {
        id: "dji-mic-mini",
        nome: "DJI Mic Mini 2TX + 1RX",
        descricao: "Versão mais portátil para quem quer mobilidade total sem perder qualidade de som.",
        imagem: "https://i.postimg.cc/fRJX10vr/DJI_mic_mini.webp",
        link: "https://meli.la/1sFGx6w",
      },
      {
        id: "insta360-x4",
        nome: "Insta 360 X4",
        descricao: "Câmera 360º com qualidade absurda para POV, bastidores e cenas imersivas.",
        imagem: "https://i.postimg.cc/NfNmNxRP/Insta_360_x4_copiar.webp",
        link: "https://meli.la/1foHFFS",
      },
      {
        id: "insta360-x5",
        nome: "Insta 360 X5",
        descricao: "Evolução da linha 360 com ainda mais definição e estabilidade cinematográfica.",
        imagem: "https://i.postimg.cc/4xmtjh12/Insta_360_X5_copiar.webp",
        link: "https://meli.la/2pm8mTq",
      },
      {
        id: "drone-dji-mini-5-pro",
        nome: "Drone DJI Mini 5 Pro",
        descricao: "Drone leve, poderoso e ideal para imagens aéreas profissionais com praticidade.",
        imagem: "https://i.postimg.cc/zGVW4Rkd/Drone.webp",
        link: "https://meli.la/24vpNvo",
      },
      {
        id: "lanterna-luz-criativa",
        nome: "Lanterna para luz criativa de vídeo",
        descricao: "Luz portátil para efeitos criativos e recortes dramáticos em gravações.",
        imagem: "https://i.postimg.cc/CxzD9f42/lanterna_de_led.png",
        link: "https://s.click.aliexpress.com/e/_mMiAZNL",
      },
      {
        id: "luz-led-60w",
        nome: "Luz de LED para vídeo 60W",
        descricao: "Iluminação principal forte e versátil para dar volume e profundidade à cena.",
        imagem: "https://i.postimg.cc/K8RLCgNX/Led.png",
        link: "https://s.click.aliexpress.com/e/_m0o4Pm5",
      },
      {
        id: "microfone-fifine",
        nome: "Microfone Dinâmico Fifine USB/XLR",
        descricao: "Ótimo custo-benefício para podcast, aulas e gravações com som encorpado.",
        imagem: "https://i.postimg.cc/fRJX10KV/Microfone.webp",
        link: "https://s.click.aliexpress.com/e/_mOL3fxr",
      },
      {
        id: "braco-microfone",
        nome: "Braço de Microfone perfil baixo",
        descricao: "Organização e estética limpa no setup, com mobilidade e firmeza.",
        imagem: "https://i.postimg.cc/W1CrVbWN/brac_o_microfone.webp",
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
        id: "capacete-giro",
        nome: "Capacete Giro Isode II MIPS",
        descricao: "Segurança com tecnologia MIPS e ótimo conforto para treinos longos.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Capacete+Giro",
        link: "https://meli.la/1N6r9Hj",
      },
      {
        id: "sapatilha-shimano",
        nome: "Sapatilha Shimano XC5",
        descricao: "Leve, firme e eficiente para MTB e gravel com excelente transferência de potência.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Shimano+XC5",
        link: "https://meli.la/1r5pcu6",
      },
      {
        id: "suporte-gps-insta360",
        nome: "Suporte GPS + Insta 360",
        descricao: "Solução prática para gravar seus pedais com visão dinâmica no guidão.",
        imagem: "https://i.postimg.cc/jSmNTdgS/Suporte_para_Insta_360_e_GPS.webp",
        link: "https://s.click.aliexpress.com/e/_mtDfkG5",
      },
      {
        id: "smartwatch-huawei-gt6",
        nome: "Smartwatch HUAWEI WATCH GT 6 Pro 46mm",
        descricao: "Monitoramento preciso de treino, bateria longa e construção premium.",
        imagem: "https://i.postimg.cc/XYmFW7HJ/Smartwatch_1_copiar.webp",
        link: "https://meli.la/2hbGkw7",
      },
    ],
  },
  {
    id: "viagem",
    nome: "Viagem e aventura",
    emoji: "✈️",
    produtos: [
      {
        id: "bota-macboot",
        nome: "Bota Macboot Alpes 02 Prova D'água",
        descricao: "Resistente, confortável e pronta para trilhas e viagens sem dor de cabeça.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Bota+Macboot",
        link: "https://meli.la/2tedHDZ",
      },
      {
        id: "bastao-azteq",
        nome: "Bastão Caminhada Azteq Actos",
        descricao: "Leve, dobrável e com sistema antichoque para trilhas mais seguras.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Bast%C3%A3o+Azteq",
        link: "https://meli.la/1vNdQPs",
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
        nome: "Ray-Ban Meta Wayfarer Gen 2 Transitions",
        descricao: "Óculos inteligente para gravar POV e criar conteúdo com liberdade total.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Ray-Ban+Meta",
        link: "https://meli.la/2U1o9BY",
      },
      {
        id: "oakley-vanguard-meta",
        nome: "Oakley Meta Vanguard Black Prizm Road",
        descricao: "Performance esportiva com tecnologia Meta integrada para capturas rápidas.",
        imagem: "https://placehold.co/400x300/f1f5f9/64748b?text=Oakley+Meta",
        link: "https://meli.la/1iF4vTe",
      },
      {
        id: "mac-mini-m4",
        nome: "Apple Mac Mini M4 16GB/256GB",
        descricao: "Máquina compacta e potente para automações, IA e produção pesada.",
        imagem: "https://i.postimg.cc/9QrTsqp0/Macmini.webp",
        link: "https://meli.la/1TNHPf7",
      },
      {
        id: "macbook-pro-m3-pro",
        nome: "MacBook Pro 14\" M3 Pro 18GB",
        descricao: "Performance profissional para edição, estratégia e multitarefa intensa.",
        imagem: "https://i.postimg.cc/BnXDR1g6/Macbook_Pro.webp",
        link: "https://meli.la/25jatWF",
      },
      {
        id: "iphone-17-pro",
        nome: "iPhone 17 Pro 256GB",
        descricao: "Câmera e processamento de ponta para criação de conteúdo em qualquer lugar.",
        imagem: "https://i.postimg.cc/vZc9C6zH/i_Phone.webp",
        link: "https://meli.la/1JUutUF",
      },
      {
        id: "airpods-pro-3",
        nome: "Apple AirPods Pro 3",
        descricao: "Cancelamento de ruído e qualidade sonora para foco e mobilidade.",
        imagem: "https://i.postimg.cc/K8RLCgNG/Airpod_Pro_3.webp",
        link: "https://meli.la/2zx7pV5",
      },
      {
        id: "airpods-max",
        nome: "Apple AirPods Max",
        descricao: "Imersão sonora premium para edição e concentração total.",
        imagem: "https://i.postimg.cc/6pgRK5j8/Airpod_Max_1_copiar.webp",
        link: "https://meli.la/28X7quf",
      },
      {
        id: "dummy-plug-hdmi",
        nome: "Dummy Plug HDMI 4K 1.4",
        descricao: "Essencial para rodar máquinas remotamente sem monitor físico.",
        imagem: "https://i.postimg.cc/8zjWxrHC/Dummy.webp",
        link: "https://meli.la/1YXYrV6",
      },
      {
        id: "suporte-magsafe",
        nome: "Suporte de Telefone com ímã MagSafe",
        descricao: "Praticidade e firmeza para gravar vídeos e usar o celular no setup.",
        imagem: "https://i.postimg.cc/ht6xnPyG/suporte_magne_tico_para_telefone.webp",
        link: "https://s.click.aliexpress.com/e/_mr1kwsl",
      },
      {
        id: "suporte-mesa-duplo",
        nome: "Suporte de Mesa Duplo Pistão a Gás",
        descricao: "Organização e ergonomia para dois monitores com ajuste fácil.",
        imagem: "https://i.postimg.cc/mgtMKFwt/brac_o_aticulado.webp",
        link: "https://meli.la/1nCCZTR",
      },
      {
        id: "mesa-ergonomica",
        nome: "Mesa Ergonômica com Regulagem de Altura",
        descricao: "Alternar entre sentado e em pé melhora foco e energia no dia.",
        imagem: "https://i.postimg.cc/SxJ8Hzrj/mesa.webp",
        link: "https://meli.la/1Q1ioAM",
      },
      {
        id: "cadeira-dt3-nero",
        nome: "Cadeira Gamer DT3 Nero XL",
        descricao: "Conforto e postura para longas horas de trabalho estratégico.",
        imagem: "https://i.postimg.cc/K8RLCgNK/cadeira.webp",
        link: "https://meli.la/21UyxpP",
      },
    ],
  },
  {
    id: "musica",
    nome: "Música",
    emoji: "🎸",
    produtos: [
      {
        id: "violao-takamine",
        nome: "Violão Takamine GD11 MCE",
        descricao: "Violão eletroacústico equilibrado, ótimo para gravações e apresentações.",
        imagem: "https://i.postimg.cc/nhC7NQkn/Viola_o.webp",
        link: "https://meli.la/1YPtqdB",
      },
      {
        id: "amplificador-laney",
        nome: "Amplificador Laney",
        descricao: "Timbre forte e confiável para estudo ou palco.",
        imagem: "https://i.postimg.cc/7Zd74YsJ/Amplicador_1_copiar.webp",
        link: "https://meli.la/1fUTJUo",
      },
      {
        id: "pedal-boss-rc5",
        nome: "Pedal Boss RC-5",
        descricao: "Loop station compacta para criar camadas e tocar sozinho com potência.",
        imagem: "https://i.postimg.cc/YCZg7qnj/Pedal_Lopping_1_copiar.webp",
        link: "https://meli.la/1eamcvn",
      },
      {
        id: "pedal-boss-fs7",
        nome: "Pedal Boss FS-7 Dual Footswitch",
        descricao: "Controle extra para expandir possibilidades ao vivo.",
        imagem: "https://i.postimg.cc/rwKW7tJ2/Pedal_FS_Switch.webp",
        link: "https://meli.la/1zhvXHn",
      },
    ],
  },
];
