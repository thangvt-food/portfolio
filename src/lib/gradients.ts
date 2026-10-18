// Vibrant per-item color system — youthful, high-energy palette
export const GRADIENTS = [
  "from-violet-600 via-fuchsia-500 to-orange-400",
  "from-orange-500 via-amber-400 to-yellow-300",
  "from-sky-500 via-cyan-400 to-teal-300",
  "from-emerald-500 via-lime-400 to-yellow-300",
  "from-rose-500 via-pink-500 to-fuchsia-400",
  "from-indigo-600 via-violet-500 to-purple-400",
  "from-fuchsia-500 via-pink-400 to-rose-300",
];

export const PASTELS = [
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-rose-100 text-rose-700",
  "bg-indigo-100 text-indigo-700",
  "bg-fuchsia-100 text-fuchsia-700",
];

export const PASTEL_CARDS = [
  "bg-violet-50 border-violet-200",
  "bg-amber-50 border-amber-200",
  "bg-sky-50 border-sky-200",
  "bg-emerald-50 border-emerald-200",
  "bg-rose-50 border-rose-200",
  "bg-indigo-50 border-indigo-200",
];

export const gradientFor = (i: number) => GRADIENTS[i % GRADIENTS.length];
export const pastelFor = (i: number) => PASTELS[i % PASTELS.length];
export const pastelCardFor = (i: number) => PASTEL_CARDS[i % PASTEL_CARDS.length];
