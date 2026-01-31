export default function Features() {
  const points = [
    { title: "Bahan Organik", desc: "100% tanpa pengawet" },
    { title: "Panggang Setiap Hari", desc: "Selalu fresh dari oven" },
    { title: "Resep Warisan", desc: "Rasa autentik yang khas" },
  ];

  return (
    <section className="py-20 mt-8 bg-white border-y border-amber-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((p, i) => (
            <div key={i} className="text-center">
              <h3 className="text-amber-900 font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-amber-700/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}