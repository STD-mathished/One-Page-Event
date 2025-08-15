export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-4">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white/70">
        © {year} Réalisé par <span className="text-white font-medium">Mathis HEDER</span>
      </div>
    </footer>
  );
}
