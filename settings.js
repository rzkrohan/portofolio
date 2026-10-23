/*
 * settings.js
 * Semua data portofolio ada di sini. Ubah isinya, lalu halaman ikut berubah.
 * Ganti nilai yang bertanda XXXX / DOMAIN / USERNAME dengan data aslimu.
 */
window.SETTINGS = {
  site: {
    url: "rizkyrohan.ai.id", // dipakai untuk canonical, sitemap, dan Open Graph
    title: "Rizky Saputra | Portofolio Web Developer & Bot WhatsApp",
    description:
      "Portofolio Rizky Saputra, developer 17 tahun dari Jawa Barat. Membuat Web API dan Bot WhatsApp dengan JavaScript dan Node.js.",
    keywords:
      "Rizky Saputra, portofolio developer, web developer Indonesia, bot WhatsApp, web API, Node.js, JavaScript, Jawa Barat",
    themeColor: "#05070b",
  },

  profile: {
    name: "Rizky Saputra",
    initials: "RS",
    photo: "", // isi dengan nama file foto, misal "foto.jpg" (letakkan di folder public)
    age: 17,
    location: "Jawa Barat, Indonesia",
    focus: "Web API & Bot WhatsApp",
    status: "Terbuka untuk belajar dan kolaborasi",
    tagline:
      "Saya membangun web API dan bot WhatsApp dengan JavaScript dan Node.js, lalu merapikannya sampai siap dipakai orang lain.",
    chips: ["Web Developer", "Bot Builder", "Jawa Barat"],
  },

  contacts: [
    { label: "WhatsApp", value: "+6289665543100", url: "https://wa.me/6289665543100" },
    { label: "GitHub", value: "github.com/rzkrohan", url: "https://github.com/rzkrohan" },
    { label: "Email", value: "rizkysaputra12909@gmail.com", url: "rizkysaputra12909@gmail.com" },
  ],

  socials: [
    { label: "TikTok", value: "@iamrzk_", url: "https://www.tiktok.com/@iamrzk_" },
    { label: "Instagram", value: "@iamrzk209", url: "https://www.instagram.com/iamrzk209" },
  ],

  communities: [
    { label: "Saluran WhatsApp", value: "Gabung saluran", url: "https://whatsapp.com/channel/0029VbDWBmtA89MamPba8q3f" },
  ],

  // level: 0 sampai 100
  skills: [
    { name: "JavaScript", level: 85 },
    { name: "Vibe Coding", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 40 },
    { name: "Murni Coding", level: 35 },
    { name: "TypeScript", level: 25 },
  ],

  // level: 0 sampai 100
  editors: [
    { name: "Alight Motion", level: 96 },
    { name: "Keyflow", level: 70 },
    { name: "CapCut", level: 25 },
    { name: "NedeVideo", level: 5 },
  ],

  projects: [
    {
      name: "Web API",
      status: "Aktif",
      description:
        "Layanan web API yang dibangun dengan Node.js. Konfigurasinya diatur lewat file ini.",
      tags: ["Node.js", "JavaScript", "REST API"],
      url: "https://kyzorohan.web.id",
    },
    {
      name: "Bot WhatsApp",
      status: "Aktif",
      description:
        "Bot WhatsApp dengan Node.js untuk otomatisasi pesan dan perintah. Pengaturannya juga diatur lewat file ini.",
      tags: ["Node.js", "JavaScript", "WhatsApp"],
      url: "https://chat.whatsapp.com/H45dfF3jzUj9kdasBCT2PQ",
    },
  ],
};

// Dukungan untuk Node.js (opsional)
if (typeof module !== "undefined" && module.exports) {
  module.exports = SETTINGS;
}
