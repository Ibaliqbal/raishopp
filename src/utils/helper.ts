export function convertPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateRGBA(total: number): string[] {
  const rgbaColors: string[] = [];
  const usedColors: Set<string> = new Set();

  while (rgbaColors.length <= total) {
    // Menggunakan rentang 128-255 untuk warna yang lebih cerah
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    // Menggunakan alpha yang lebih tinggi untuk warna yang lebih solid
    const a = (Math.random() * 0.3 + 0.7).toFixed(2);

    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    if (!usedColors.has(rgbaColor)) {
      rgbaColors.push(rgbaColor);
      usedColors.add(rgbaColor);
    }
  }

  return rgbaColors;
}
