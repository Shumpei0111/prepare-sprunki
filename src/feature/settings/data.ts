type StyleType = "beats" | "effects" | "melodies" | "vocals";

interface SprunkiType {
  image: string;
  music: string;
  type?: StyleType;
}

export const sprunkis = {
  Oren: {
    image: "/sprunki/Orensvg.svg",
    music: "/music/Oren.wav",
    type: "beats",
  },
  Raddy: {
    image: "/sprunki/Raddysvg.svg",
    music: "/music/Raddy.wav",
    type: "beats",
  },
  Cluker: {
    image: "/sprunki/Clukersvg.svg",
    music: "/music/Cluker.wav",
    type: "beats",
  },
  FunBot: {
    image: "/sprunki/Funbotsvg.svg",
    music: "/music/Funbot.wav",
    type: "beats",
  },
  Vineria: {
    image: "/sprunki/Vinerasvg.svg",
    music: "/music/Vineria.wav",
    type: "beats",
  },
  Gray: {
    image: "/sprunki/Graysvg.svg",
    music: "/music/Gray.wav",
    type: "effects",
  },
  Brud: {
    image: "/sprunki/Brudsvg.svg",
    music: "/music/Brud.wav",
    type: "effects",
  },
  Garnold: {
    image: "/sprunki/Garnoldsvg.svg",
    music: "/music/Garnold.wav",
    type: "effects",
  },
  Owakcx: {
    image: "/sprunki/Owakcxsvg.svg",
    music: "/music/Owakcx.wav",
    type: "effects",
  },
  Sky: {
    image: "/sprunki/Skysvg.svg",
    music: "/music/Sky.wav",
    type: "effects",
  },
  MrSun: {
    image: "/sprunki/MrSunsvg.svg",
    music: "/music/MrSun.wav",
    type: "melodies",
  },
  Durple: {
    image: "/sprunki/Durplesvg.svg",
    music: "/music/Durple.wav",
    type: "melodies",
  },
  MrTree: {
    image: "/sprunki/MrTreesvg.svg",
    music: "/music/MrTree.wav",
    type: "melodies",
  },
  Simon: {
    image: "/sprunki/Simonsvg.svg",
    music: "/music/Simon.wav",
    type: "melodies",
  },
  Tunner: {
    image: "/sprunki/Tunnersvg.svg",
    music: "/music/Tunner.wav",
    type: "melodies",
  },
  MrFunComputer: {
    image: "/sprunki/MrFunComputersvg.svg",
    music: "/music/MrFunComputer.wav",
    type: "vocals",
  },
  Wenda: {
    image: "/sprunki/Wendasvg.svg",
    music: "/music/Wenda.wav",
    type: "vocals",
  },
  Pinki: {
    image: "/sprunki/Pinkisvg.svg",
    music: "/music/Pinki.wav",
    type: "vocals",
  },
  Jevin: {
    image: "/sprunki/Jevinsvg.svg",
    music: "/music/Jevin.mpeg",
    type: "vocals",
  },
  Black: {
    image: "/sprunki/Blacksvg.svg",
    music: "/music/Black.wav",
    type: "vocals",
  },
} satisfies Record<string, SprunkiType>;
