window.SITE = {
  name: "Juni's Home BBQ & Catering",
  tagline: "Jasa catering BBQ live cooking terpercaya. Pesan lewat WhatsApp.",
  wa: "62 813-2102-1570",              // format 62..., no + and no spaces. Demo: your number, not the owner's.
  address: "Cirateun, Jl. Dr. Setiabudi No.KM 10 No. 10, RT.03/RW.07, Ledeng, Cidadap, Bandung City, West Java 40143",
  mapsUrl: "https://maps.app.goo.gl/wdBheFQurLfWwQmb8",
  hours: "Setiap hari 09.00–17.00",
  instagram: "https://www.junishomebbq.com/",
  demo: true,                      // remove at launch
  // cover: "assets/cover.jpg",    // their public product photo, under 150KB
  theme: { primary: "#b45309" },
  fields: [
    { id: "nama", label: "Nama", type: "text" },
    { id: "metode", label: "Metode", type: "select", options: ["Ambil di tempat", "Dine in", "Antar (ongkir via chat)"] }
  ],
  items: [
    { name: "Kopi Susu Gula Aren", price: 18000, desc: "Signature kami", cat: "Kopi", badge: "Best seller", img: "" },
    { name: "Americano", price: 15000, desc: "Hot / iced", cat: "Kopi", img: "" },
    { name: "Roti Bakar Coklat Keju", price: 17000, desc: "Hangat, renyah", cat: "Makanan", img: "" }
  ]
};
