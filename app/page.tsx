import HeroHeader from "./components/Hero";
import PitchSection from "./components/PitchSection";
import Program from "./components/Program";
import {ProgramItem, Props} from "./types/Props"

export default function Home() {
  const items = [
  { time: "19:00", title: "Ouverture", description: "Accueil & ambiance", iconEmoji: "✨" },
  { time: "19:30", title: "DJ Aurora", description: "Ambient set d’ouverture", iconEmoji: "✨" },
  { time: "20:15", title: "Neon Labs", description: "Performance visuelle live", iconEmoji: "🧪" },
  { time: "21:00", title: "KAZE", description: "Live electro organique", iconEmoji: "✨" },
  { time: "22:00", title: "Collectif Flux", description: "Jam lumière & danse", iconEmoji: "💡" },
];
  return (
    <main style={{ height: "100vh" }}>
     <HeroHeader/>
     <PitchSection/>
     <Program items={items}/>
    </main>
  );
}
