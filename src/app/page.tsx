import DrumRoll from "./components/drumRoll";
import TransitionImages from "./components/transitionImages";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-svh w-svw mx-auto px-12 flex-col">
      <h1 className="font-bold font-serif text-9xl text-justify">Min Chun Fu .</h1>
      <DrumRoll />
    </main>
  );
}
