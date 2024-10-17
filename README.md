reactjs-project-set-up/
│
```
├── node_modules/         # Berisi semua dependencies yang dibutuhkan oleh project.
```
├── public/               # Folder publik untuk aset statis seperti gambar dan font.
```
│   ├── fonts/            # Berisi file font yang digunakan dalam project.
│   ├── images/           # Berisi file gambar yang digunakan dalam project.
│   └── vite.svg          # Contoh file SVG (ikon) default dari Vite.
└── src/                  # Folder utama berisi kode aplikasi
    ├── components/       # Berisi komponen-komponen React yang dibagi menjadi beberapa level abstraksi
    │   ├── atoms/        # Komponen terkecil, tidak dapat dipecah lagi (contoh: Button, Input)
    │   ├── molecules/    # Gabungan dari beberapa atoms membentuk komponen yang lebih kompleks (contoh: Form Field)
    │   ├── organisms/    # Komponen yang lebih besar, gabungan dari molecules dan atoms (contoh: Header, Card)
    │   ├── templates/    # Struktur halaman dasar yang mengkombinasikan beberapa organisms
    │
    ├── config/           # Tempat konfigurasi seperti API dan Firebase
    │
    ├── hooks/            # Custom React Hooks untuk digunakan di seluruh aplikasi
    │
    ├── lib/              # Berisi helper functions dan utilities
    │   ├── helpers/      # Fungsi-fungsi bantu untuk berbagai kebutuhan
    │   └── utils/        # Utilities yang sering digunakan (contoh: format date, currency)
    │
    ├── pages/            # Halaman-halaman utama dalam aplikasi
    │
    ├── services/         # Tempat konsumsi API, interaksi dengan backend
    │
    ├── store/            # State management untuk aplikasi, Redux slices biasanya disimpan di sini
    │   └── slices/       # Folder ini berisi slice state management (contoh: authSlice, userSlice)
    │
    ├── types/            # Tempat untuk definisi tipe TypeScript (interface, types)
    │   └── index.ts      # Berisi tipe data umum yang digunakan dalam aplikasi
    │
    ├── App.tsx           # Komponen utama yang memuat semua komponen lainnya
    ├── index.css         # CSS utama yang diterapkan di seluruh aplikasi
    ├── main.tsx          # Entry point dari aplikasi React
    ├── vite-env.d.ts     # Konfigurasi lingkungan untuk Vite (jika menggunakan Vite)
    │
    ├── .eslintrc.cjs     # Konfigurasi untuk ESLint (tools linter untuk menjaga kualitas kode)
    ├── index.html        # Halaman HTML root yang digunakan untuk memuat aplikasi React
    ├── package-lock.json # Informasi lengkap mengenai dependencies yang digunakan
    ├── package.json      # Metadata project dan daftar dependencies
    ├── postcss.config.js # Konfigurasi untuk PostCSS (jika menggunakan Tailwind CSS)
    ├── tailwind.config.js# Konfigurasi untuk Tailwind CSS
    └── README.md         # Dokumentasi project
