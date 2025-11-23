export default function ContactPage() {
  return (
    <main className="min-h-[60vh] bg-dark text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Kontakt
        </h1>

        <p className="text-sm text-zinc-400 mb-8 max-w-xl">
          Masz pytania dotyczące zamówienia, produktu lub współpracy? 
          Napisz do nas – odpowiemy tak szybko, jak to możliwe.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Dane kontaktowe */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Dane kontaktowe
            </h2>
            <p className="text-sm text-zinc-300">
              <span className="block text-zinc-400">E-mail:</span>
              <span>kontakt@kazochka.shop</span>
            </p>
            <p className="text-sm text-zinc-300">
              <span className="block text-zinc-400">Telefon:</span>
              <span>+48 000 000 000</span>
            </p>
            <p className="text-sm text-zinc-300">
              <span className="block text-zinc-400">Godziny pracy:</span>
              <span>Poniedziałek – Piątek, 9:00–17:00</span>
            </p>
          </div>

          {/* Prosty formularz */}
          <form className="space-y-4 rounded-2xl border border-white/10 bg-dark2 p-5">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Imię
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-dark3 px-3 py-2 text-sm text-foreground outline-none focus:border-neonBlue"
                placeholder="Twoje imię"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                E-mail
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-dark3 px-3 py-2 text-sm text-foreground outline-none focus:border-neonBlue"
                placeholder="Twój adres e-mail"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-300">
                Wiadomość
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-dark3 px-3 py-2 text-sm text-foreground outline-none focus:border-neonBlue resize-none"
                placeholder="Napisz, w czym możemy pomóc"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-neonOrange px-4 py-2 text-sm font-semibold text-black shadow-[0_0_18px_rgba(255,138,0,0.7)] hover:bg-[#ff9a24] transition"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
