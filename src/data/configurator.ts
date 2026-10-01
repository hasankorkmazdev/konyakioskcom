// models: seçilebilir kiosk tipleri. rules[model][grup] = izin verilen seçenekler (yazılmayan grup = hepsi serbest); rules[model].defaults = o modelde varsayılan.
export const configurator = {
  models: [
    "Kule",
    "Totem",
    "Desk"
  ],
  groups: [
    {
      id: "yon",
      label: "Ekran Yönü",
      type: "radio",
      default: "Yatay",
      options: [
        "Yatay",
        "Dikey"
      ]
    },
    {
      id: "ekran",
      label: "Ekran Boyutu",
      type: "radio",
      default: "21.5 inç",
      options: [
        "21.5 inç",
        "24 inç",
        "27 inç",
        "32 inç"
      ]
    },
    {
      id: "ram",
      label: "RAM",
      type: "radio",
      default: "4 GB",
      options: [
        "4 GB",
        "8 GB",
        "16 GB"
      ]
    },
    {
      id: "disk",
      label: "Disk Kapasitesi",
      type: "radio",
      default: "256 GB",
      options: [
        "128 GB",
        "256 GB",
        "512 GB"
      ]
    },
    {
      id: "disktip",
      label: "Disk Tipi",
      type: "radio",
      default: "SSD",
      options: [
        "HDD",
        "SSD"
      ]
    },
    {
      id: "montaj",
      label: "Montaj Tipi",
      type: "radio",
      default: "Ayaklı",
      options: [
        "Ayaklı",
        "Masa tipi",
        "Duvar tipi"
      ]
    },
    {
      id: "renk",
      label: "Gövde Rengi",
      type: "radio",
      default: "Beyaz",
      options: [
        "Beyaz",
        "Siyah",
        "Özel Reklam"
      ]
    },
    {
      id: "aksesuar",
      label: "Ek Donanımlar",
      type: "checkbox",
      default: [],
      options: [
        "Yazıcı",
        "Klavye",
        "Barkod / QR okuyucu",
        "Kablosuz mouse + klavye",
        "Hoparlör",
        "Mikrofon",
        "Mifare kart okuyucu",
        "Kredi kartı / POS",
        "Kamera"
      ]
    }
  ],
  rules: {
    Kule: {},
    Totem: {
      yon: [
        "Dikey"
      ],
      montaj: [
        "Ayaklı"
      ]
    },
    Desk: {
      yon: [
        "Yatay"
      ],
      montaj: [
        "Masa tipi"
      ]
    }
  }
};
