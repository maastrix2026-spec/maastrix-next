const stats = [
  {
    value: "22+",
    label: "Years Experience",
  },
  {
    value: "AI",
    label: "First Engineering",
  },
  {
    value: "10+",
    label: "Industries Served",
  },
  {
    value: "360°",
    label: "Digital Delivery",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/10"
          style={{
            animationDelay: `${index * 120}ms`,
          }}
        >
          <p className="text-5xl font-black tracking-tight text-white group-hover:text-cyan-300">
            {stat.value}
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}