// Données ESSOFA SHOP — produits, catégories et images.
// IMAGES : placez vos photos dans images/<id-du-produit>/1.jpg, 2.jpg … (3 à 5 photos par article)
// puis changez IMAGE_EXT ci-dessous en "jpg" (ou "webp"/"png"). Les .svg actuels sont des visuels d'illustration.
const IMAGE_EXT = "svg";
const imgPath = (p, i) => `images/${p.id}/${p.images[i].file}.${IMAGE_EXT}`;
const PRODUCTS = [
 {
  "id": "pagne-royal",
  "category": "Pagnes",
  "name": "Pagne Royal Éclat",
  "price": "12 500 FCFA",
  "description": "Tissu élégant aux motifs raffinés, idéal pour vos tenues et cérémonies.",
  "icon": "pagne",
  "cotisation": "Oui",
  "priceNum": 12500,
  "colors": [
   {
    "name": "Bleu royal",
    "hex": "#2447b8",
    "image": 0
   },
   {
    "name": "Rouge bordeaux",
    "hex": "#a3202f",
    "image": 1
   },
   {
    "name": "Vert émeraude",
    "hex": "#12805c",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu royal"
   },
   {
    "file": "2",
    "label": "Rouge bordeaux"
   },
   {
    "file": "3",
    "label": "Vert émeraude"
   },
   {
    "file": "4",
    "label": "Bleu royal — détail"
   },
   {
    "file": "5",
    "label": "Bleu royal — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris à découvrir dans la galerie",
   "Idéal pour cérémonies, fêtes et tenues sur mesure",
   "Couture possible : parlez-en avec la boutique"
  ]
 },
 {
  "id": "pagne-kente",
  "category": "Pagnes",
  "name": "Pagne Motifs Prestige",
  "price": "15 000 FCFA",
  "description": "Une sélection colorée pour composer un style authentique et moderne.",
  "icon": "pagne",
  "cotisation": "Oui",
  "priceNum": 15000,
  "colors": [
   {
    "name": "Jaune soleil",
    "hex": "#d9a21b",
    "image": 0
   },
   {
    "name": "Orange brûlé",
    "hex": "#c4561a",
    "image": 1
   },
   {
    "name": "Violet",
    "hex": "#6b3fa0",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Jaune soleil"
   },
   {
    "file": "2",
    "label": "Orange brûlé"
   },
   {
    "file": "3",
    "label": "Violet"
   },
   {
    "file": "4",
    "label": "Jaune soleil — détail"
   },
   {
    "file": "5",
    "label": "Jaune soleil — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris à découvrir dans la galerie",
   "Idéal pour cérémonies, fêtes et tenues sur mesure",
   "Couture possible : parlez-en avec la boutique"
  ]
 },
 {
  "id": "sac-classic",
  "category": "Sacs d'école",
  "name": "Sac à dos Classic",
  "price": "9 500 FCFA",
  "description": "Sac robuste et pratique pour l'école, avec plusieurs compartiments.",
  "icon": "sac",
  "cotisation": "Oui",
  "priceNum": 9500,
  "colors": [
   {
    "name": "Bleu marine",
    "hex": "#1f3a7a",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#2a2a33",
    "image": 1
   },
   {
    "name": "Rouge",
    "hex": "#c0392b",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu marine"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Rouge"
   },
   {
    "file": "4",
    "label": "Bleu marine — détail"
   },
   {
    "file": "5",
    "label": "Bleu marine — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs compartiments pour ranger livres et cahiers",
   "Pensé pour le quotidien des élèves et étudiants",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "sac-premium",
  "category": "Sacs d'école",
  "name": "Sac à dos Premium",
  "price": "14 500 FCFA",
  "description": "Confort, rangement et finition soignée pour les journées bien remplies.",
  "icon": "sac",
  "cotisation": "Oui",
  "priceNum": 14500,
  "colors": [
   {
    "name": "Vert forêt",
    "hex": "#1f6b4f",
    "image": 0
   },
   {
    "name": "Gris anthracite",
    "hex": "#3d4352",
    "image": 1
   },
   {
    "name": "Bleu ciel",
    "hex": "#3b86c9",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Vert forêt"
   },
   {
    "file": "2",
    "label": "Gris anthracite"
   },
   {
    "file": "3",
    "label": "Bleu ciel"
   },
   {
    "file": "4",
    "label": "Vert forêt — détail"
   },
   {
    "file": "5",
    "label": "Vert forêt — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs compartiments pour ranger livres et cahiers",
   "Pensé pour le quotidien des élèves et étudiants",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "shoe-urban",
  "category": "Chaussures",
  "name": "Sneakers Urban",
  "price": "18 000 FCFA",
  "description": "Sneakers polyvalentes au look contemporain pour tous les jours.",
  "icon": "chaussure",
  "cotisation": "Oui",
  "priceNum": 18000,
  "colors": [
   {
    "name": "Bleu",
    "hex": "#2c5fc3",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#26262e",
    "image": 1
   },
   {
    "name": "Rouge",
    "hex": "#c63a3a",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Rouge"
   },
   {
    "file": "4",
    "label": "Bleu — détail"
   },
   {
    "file": "5",
    "label": "Bleu — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris à découvrir dans la galerie",
   "Pointures disponibles : demandez-nous",
   "À essayer directement à la boutique"
  ]
 },
 {
  "id": "shoe-elegant",
  "category": "Chaussures",
  "name": "Chaussures Élégance",
  "price": "22 000 FCFA",
  "description": "Une paire chic pour compléter vos looks professionnels ou de cérémonie.",
  "icon": "chaussure",
  "cotisation": "Oui",
  "priceNum": 22000,
  "colors": [
   {
    "name": "Noir",
    "hex": "#1e1e24",
    "image": 0
   },
   {
    "name": "Marron",
    "hex": "#7a4a28",
    "image": 1
   },
   {
    "name": "Bordeaux",
    "hex": "#7d1f35",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Noir"
   },
   {
    "file": "2",
    "label": "Marron"
   },
   {
    "file": "3",
    "label": "Bordeaux"
   },
   {
    "file": "4",
    "label": "Noir — détail"
   },
   {
    "file": "5",
    "label": "Noir — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris à découvrir dans la galerie",
   "Pointures disponibles : demandez-nous",
   "À essayer directement à la boutique"
  ]
 },
 {
  "id": "robe-chic",
  "category": "Prêt-à-porter",
  "name": "Robe Chic ESSOFA",
  "price": "25 000 FCFA",
  "description": "Coupe féminine élégante et confortable, pensée pour un style affirmé.",
  "icon": "mode",
  "cotisation": "Oui",
  "priceNum": 25000,
  "colors": [
   {
    "name": "Fuchsia",
    "hex": "#c2185b",
    "image": 0
   },
   {
    "name": "Bleu nuit",
    "hex": "#1b2c6b",
    "image": 1
   },
   {
    "name": "Vert",
    "hex": "#1e7a5a",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Fuchsia"
   },
   {
    "file": "2",
    "label": "Bleu nuit"
   },
   {
    "file": "3",
    "label": "Vert"
   },
   {
    "file": "4",
    "label": "Fuchsia — détail"
   },
   {
    "file": "5",
    "label": "Fuchsia — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris dans la galerie",
   "Tailles disponibles : demandez-nous",
   "Se marie facilement avec vos pagnes et accessoires"
  ]
 },
 {
  "id": "chemise-homme",
  "category": "Prêt-à-porter",
  "name": "Chemise Homme Premium",
  "price": "17 500 FCFA",
  "description": "Chemise soignée, facile à associer, pour une allure nette et moderne.",
  "icon": "mode",
  "cotisation": "Oui",
  "priceNum": 17500,
  "colors": [
   {
    "name": "Bleu ciel",
    "hex": "#5a8fd1",
    "image": 0
   },
   {
    "name": "Blanc cassé",
    "hex": "#e9e6dc",
    "image": 1
   },
   {
    "name": "Gris",
    "hex": "#7b8394",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu ciel"
   },
   {
    "file": "2",
    "label": "Blanc cassé"
   },
   {
    "file": "3",
    "label": "Gris"
   },
   {
    "file": "4",
    "label": "Bleu ciel — détail"
   },
   {
    "file": "5",
    "label": "Bleu ciel — vue de côté"
   }
  ],
  "highlights": [
   "Plusieurs coloris dans la galerie",
   "Tailles disponibles : demandez-nous",
   "Se marie facilement avec vos pagnes et accessoires"
  ]
 },
 {
  "id": "set-cuisine",
  "category": "Ustensiles de cuisine",
  "name": "Set Cuisine 7 pièces",
  "price": "32 000 FCFA",
  "description": "Ensemble pratique pour équiper votre cuisine avec l'essentiel.",
  "icon": "cuisine",
  "cotisation": "Oui",
  "priceNum": 32000,
  "colors": [
   {
    "name": "Inox",
    "hex": "#a9b2c2",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#34343c",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Inox"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Inox — détail"
   },
   {
    "file": "4",
    "label": "Inox — vue de côté"
   }
  ],
  "highlights": [
   "Pour une cuisine du quotidien",
   "Entretien facile",
   "Disponible en plusieurs finitions"
  ]
 },
 {
  "id": "poele",
  "category": "Ustensiles de cuisine",
  "name": "Poêle Antiadhésive",
  "price": "11 500 FCFA",
  "description": "Cuisson quotidienne facilitée avec une surface antiadhésive.",
  "icon": "cuisine",
  "cotisation": "Non",
  "priceNum": 11500,
  "colors": [
   {
    "name": "Noir",
    "hex": "#2b2b31",
    "image": 0
   },
   {
    "name": "Gris",
    "hex": "#6b7280",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Noir"
   },
   {
    "file": "2",
    "label": "Gris"
   },
   {
    "file": "3",
    "label": "Noir — détail"
   },
   {
    "file": "4",
    "label": "Noir — vue de côté"
   }
  ],
  "highlights": [
   "Pour une cuisine du quotidien",
   "Entretien facile",
   "Disponible en plusieurs finitions"
  ]
 },
 {
  "id": "cartable",
  "category": "Fournitures scolaires",
  "name": "Pack Rentrée Scolaire",
  "price": "19 500 FCFA",
  "description": "Un assortiment pratique pour bien commencer l'année scolaire.",
  "icon": "scolaire",
  "cotisation": "Oui",
  "priceNum": 19500,
  "colors": [
   {
    "name": "Bleu",
    "hex": "#2f5bb5",
    "image": 0
   },
   {
    "name": "Vert",
    "hex": "#2a8a63",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu"
   },
   {
    "file": "2",
    "label": "Vert"
   },
   {
    "file": "3",
    "label": "Bleu — détail"
   },
   {
    "file": "4",
    "label": "Bleu — vue de côté"
   }
  ],
  "highlights": [
   "Idéal pour la rentrée",
   "Quantités adaptées aux élèves et étudiants",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "cahiers",
  "category": "Fournitures scolaires",
  "name": "Lot de Cahiers",
  "price": "5 500 FCFA",
  "description": "Lot de cahiers pour accompagner élèves et étudiants au quotidien.",
  "icon": "scolaire",
  "cotisation": "Non",
  "priceNum": 5500,
  "colors": [
   {
    "name": "Bleu",
    "hex": "#2f5bb5",
    "image": 0
   },
   {
    "name": "Rouge",
    "hex": "#c0392b",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Bleu"
   },
   {
    "file": "2",
    "label": "Rouge"
   },
   {
    "file": "3",
    "label": "Bleu — détail"
   },
   {
    "file": "4",
    "label": "Bleu — vue de côté"
   }
  ],
  "highlights": [
   "Idéal pour la rentrée",
   "Quantités adaptées aux élèves et étudiants",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "moto-125",
  "category": "Motos / véhicules",
  "name": "Moto 125 Urban",
  "price": "1 150 000 FCFA",
  "description": "Modèle polyvalent pour les déplacements urbains et professionnels.",
  "icon": "moto",
  "cotisation": "Oui",
  "priceNum": 1150000,
  "colors": [
   {
    "name": "Rouge",
    "hex": "#c0272d",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#26262e",
    "image": 1
   },
   {
    "name": "Bleu",
    "hex": "#2457b5",
    "image": 2
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Rouge"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Bleu"
   },
   {
    "file": "4",
    "label": "Rouge — détail"
   },
   {
    "file": "5",
    "label": "Rouge — vue de côté"
   }
  ],
  "highlights": [
   "Conçu pour la ville et le travail",
   "Essai et présentation à la boutique",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "casque",
  "category": "Motos / véhicules",
  "name": "Casque City Safe",
  "price": "28 000 FCFA",
  "description": "Équipement de protection au design sobre et confortable.",
  "icon": "moto",
  "cotisation": "Non",
  "priceNum": 28000,
  "colors": [
   {
    "name": "Noir",
    "hex": "#222228",
    "image": 0
   },
   {
    "name": "Blanc",
    "hex": "#eceff4",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Noir"
   },
   {
    "file": "2",
    "label": "Blanc"
   },
   {
    "file": "3",
    "label": "Noir — détail"
   },
   {
    "file": "4",
    "label": "Noir — vue de côté"
   }
  ],
  "highlights": [
   "Conçu pour la ville et le travail",
   "Essai et présentation à la boutique",
   "Plusieurs coloris disponibles"
  ]
 },
 {
  "id": "laptop",
  "category": "Équipements informatiques",
  "name": "Ordinateur Portable Pro",
  "price": "385 000 FCFA",
  "description": "Ordinateur polyvalent pour travail, études et productivité.",
  "icon": "informatique",
  "cotisation": "Oui",
  "priceNum": 385000,
  "colors": [
   {
    "name": "Gris argent",
    "hex": "#aab1bf",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#34343c",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Gris argent"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Gris argent — détail"
   },
   {
    "file": "4",
    "label": "Gris argent — vue de côté"
   }
  ],
  "highlights": [
   "Pour le travail, les études et le bureau",
   "Présentation et démonstration à la boutique",
   "Plusieurs finitions disponibles"
  ]
 },
 {
  "id": "printer",
  "category": "Équipements informatiques",
  "name": "Imprimante Multifonction",
  "price": "95 000 FCFA",
  "description": "Impression, copie et numérisation dans un seul appareil.",
  "icon": "informatique",
  "cotisation": "Oui",
  "priceNum": 95000,
  "colors": [
   {
    "name": "Noir",
    "hex": "#2d2d35",
    "image": 0
   },
   {
    "name": "Blanc",
    "hex": "#e7e9ee",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Noir"
   },
   {
    "file": "2",
    "label": "Blanc"
   },
   {
    "file": "3",
    "label": "Noir — détail"
   },
   {
    "file": "4",
    "label": "Noir — vue de côté"
   }
  ],
  "highlights": [
   "Pour le travail, les études et le bureau",
   "Présentation et démonstration à la boutique",
   "Plusieurs finitions disponibles"
  ]
 },
 {
  "id": "fridge",
  "category": "Électroménager",
  "name": "Réfrigérateur 2 portes",
  "price": "420 000 FCFA",
  "description": "Grand espace de rangement pour la maison et les commerces.",
  "icon": "electro",
  "cotisation": "Oui",
  "priceNum": 420000,
  "colors": [
   {
    "name": "Gris acier",
    "hex": "#b7bfcc",
    "image": 0
   },
   {
    "name": "Blanc",
    "hex": "#eef0f4",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Gris acier"
   },
   {
    "file": "2",
    "label": "Blanc"
   },
   {
    "file": "3",
    "label": "Gris acier — détail"
   },
   {
    "file": "4",
    "label": "Gris acier — vue de côté"
   }
  ],
  "highlights": [
   "Pour la maison comme pour le commerce",
   "Démonstration possible à la boutique",
   "Plusieurs finitions disponibles"
  ]
 },
 {
  "id": "blender",
  "category": "Électroménager",
  "name": "Mixeur Blender",
  "price": "35 000 FCFA",
  "description": "Préparez facilement jus, sauces et smoothies au quotidien.",
  "icon": "electro",
  "cotisation": "Non",
  "priceNum": 35000,
  "colors": [
   {
    "name": "Rouge",
    "hex": "#c0392b",
    "image": 0
   },
   {
    "name": "Noir",
    "hex": "#2b2b31",
    "image": 1
   }
  ],
  "images": [
   {
    "file": "1",
    "label": "Rouge"
   },
   {
    "file": "2",
    "label": "Noir"
   },
   {
    "file": "3",
    "label": "Rouge — détail"
   },
   {
    "file": "4",
    "label": "Rouge — vue de côté"
   }
  ],
  "highlights": [
   "Pour la maison comme pour le commerce",
   "Démonstration possible à la boutique",
   "Plusieurs finitions disponibles"
  ]
 }
];
const CATEGORIES = [
 {
  "name": "Pagnes",
  "universe": "Mode & Accessoires",
  "key": "pagne",
  "description": "Tissus et imprimés pour un style authentique."
 },
 {
  "name": "Sacs d'école",
  "universe": "Scolaire & Bureautique",
  "key": "sac",
  "description": "Des sacs pratiques pour accompagner chaque rentrée."
 },
 {
  "name": "Chaussures",
  "universe": "Mode & Accessoires",
  "key": "chaussure",
  "description": "Confort et style pour tous les jours."
 },
 {
  "name": "Prêt-à-porter",
  "universe": "Mode & Accessoires",
  "key": "mode",
  "description": "Des pièces modernes pour affirmer votre personnalité."
 },
 {
  "name": "Ustensiles de cuisine",
  "universe": "Maison & Électroménager",
  "key": "cuisine",
  "description": "L'essentiel pour une cuisine bien équipée."
 },
 {
  "name": "Fournitures scolaires",
  "universe": "Scolaire & Bureautique",
  "key": "scolaire",
  "description": "Tout pour étudier, écrire et s'organiser."
 },
 {
  "name": "Motos / véhicules",
  "universe": "High-Tech & Véhicules",
  "key": "moto",
  "description": "Des solutions de mobilité adaptées au quotidien."
 },
 {
  "name": "Équipements informatiques",
  "universe": "High-Tech & Véhicules",
  "key": "informatique",
  "description": "Du matériel pour travailler, apprendre et créer."
 },
 {
  "name": "Électroménager",
  "universe": "Maison & Électroménager",
  "key": "electro",
  "description": "Des équipements utiles pour votre maison."
 }
];
