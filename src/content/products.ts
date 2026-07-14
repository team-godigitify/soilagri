import { Globe2, Clock, Workflow, ShieldCheck } from "lucide-react";
import { stockImages } from "@/content/images";
import type { ProductDetail } from "@/types/content";

/**
 * One entry per nav-listed product (Law 4: one template, data-driven depth).
 * Confirmed specs (Urea 46%, NPK, Wood Pulp, Yellow Corn, Wheat, Soybeans)
 * trace to the content document (content-source/agrisoil content.txt,
 * Ch.2/4/7). Every other product is a genuine, designed page (positioning +
 * overview + RFQ) with spec sections simply absent rather than fabricated
 * (Law 2/3 v5) — "Others" is the designed catch-all, never a 404.
 *
 * DAP and MAP are named once in the document (Ch.2, as phosphorus-nutrition
 * examples) but carry no confirmed spec sheet or origin of their own — their
 * overview copy says exactly that and no more. MOP, SSP, Barley, Rice, and
 * Sulphur are not named in the document at all; their pages stay in
 * general trading-capability register (Ch.3/5/6) with zero product-specific
 * claims.
 */
export const products: ProductDetail[] = [
  {
    slug: "urea-46-n",
    category: "fertilizers",
    name: "Urea 46% N",
    positioning: "Premium nitrogen fertilizer for maximum crop performance — Agrisoil's flagship product.",
    forms: ["Granular", "Prilled"],
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Urea is recognized globally as one of the most effective and economical nitrogen fertilizers available today. Containing a minimum of 46% nitrogen, it provides an efficient nutrient source that supports vigorous plant growth, healthy foliage, and increased crop productivity across a broad range of agricultural applications. Agrisoil supplies both Granular and Prilled Urea, sourced from internationally recognized manufacturers across the Middle East, Central Asia, and North Africa — every order managed with the same commitment to quality, reliability, and professional execution, whether supplied in bulk vessel quantities or packaged shipments.",
    image: stockImages.grainSilos,
    specs: [
      { property: "Product Type", value: "Granular & Prilled" },
      { property: "Nitrogen (N)", value: "Minimum 46%" },
      { property: "Moisture", value: "Maximum 0.5%" },
      { property: "Biuret", value: "Maximum 1.0%" },
      { property: "Granule Size", value: "2–4 mm (90% Minimum)" },
    ],
    packaging: ["50 kg Bags", "500 kg Jumbo Bags", "1,000 kg Jumbo Bags", "Bulk"],
    origins: ["Middle East", "Central Asia", "North Africa"],
    applications: [
      {
        title: "Cereal Crops",
        body: "Wheat, corn, barley, rice, and oats — supporting vigorous vegetative growth and stronger crop establishment.",
      },
      {
        title: "Oilseed & Commercial Crops",
        body: "Soybeans, canola, sunflower, rapeseed, cotton, sugarcane, and tobacco.",
      },
      {
        title: "Fruits, Vegetables & Plantation Agriculture",
        body: "Citrus, potatoes, tomatoes, onions, leafy vegetables, orchard crops, and perennial plantation crops requiring balanced nitrogen management.",
      },
    ],
    advantages: [
      "High nitrogen concentration",
      "Excellent storage stability",
      "Uniform granule size",
      "Easy application",
      "Reliable crop performance",
      "Cost-effective nutrient source",
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection — through agencies such as SGS, Bureau Veritas, or equivalent organizations — can be arranged prior to shipment on request.",
    logisticsNote:
      "Supplied FOB, CFR, or CIF, with bulk vessel coordination for large-volume orders and containerized or bagged shipments for smaller consignments — every stage from production scheduling to customs documentation coordinated as one transaction.",
    relatedSlugs: ["npk", "dap", "map"],
  },
  {
    slug: "npk",
    category: "fertilizers",
    name: "NPK 14-23-14 + 6S + 1B",
    positioning: "Balanced compound fertilizer for strong root development and early crop establishment.",
    forms: ["Granular"],
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Agrisoil supplies premium compound fertilizers formulated to provide balanced nutrition during the early stages of crop development. The NPK 14-23-14 + 6S + 1B formulation combines nitrogen, phosphorus, potassium, sulphur, and boron to promote healthy root systems, improved flowering, and stronger crop establishment — sourced from the same internationally recognized manufacturers across the Middle East, Central Asia, and North Africa that supply Agrisoil's fertilizer portfolio.",
    image: stockImages.handsInSoil,
    specs: [
      { property: "Nitrogen (N)", value: "14%" },
      { property: "Phosphorus (P₂O₅)", value: "23%" },
      { property: "Potassium (K₂O)", value: "14%" },
      { property: "Sulphur", value: "6%" },
      { property: "Boron", value: "1%" },
      { property: "Form", value: "Granular" },
    ],
    origins: ["Middle East", "Central Asia", "North Africa"],
    applications: [
      { title: "Cereals & Oilseeds", body: "Balanced early-stage nutrition for cereal and oilseed programs." },
      { title: "Pulses & Vegetables", body: "Supporting root development and flowering in pulse and vegetable crops." },
      { title: "Fruits & Commercial Crops", body: "Suited to fruit orchards and other commercial crop programs." },
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection can be arranged prior to shipment on request.",
    logisticsNote:
      "Supplied FOB, CFR, or CIF, coordinated alongside the rest of a customer's fertilizer program where useful.",
    relatedSlugs: ["urea-46-n", "dap", "map"],
  },
  {
    slug: "dap",
    category: "fertilizers",
    name: "DAP",
    positioning: "Phosphorus-based crop nutrition, sourced against your specification.",
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Di-Ammonium Phosphate supports strong root development, flowering, and early crop establishment as a phosphorus source in Agrisoil's crop nutrition program. A confirmed spec sheet for DAP is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.grainSilos,
    relatedSlugs: ["urea-46-n", "map", "mop"],
  },
  {
    slug: "map",
    category: "fertilizers",
    name: "MAP",
    positioning: "Phosphorus-based crop nutrition, sourced against your specification.",
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Mono-Ammonium Phosphate supports strong root development and early crop establishment as a phosphorus source in Agrisoil's crop nutrition program. A confirmed spec sheet for MAP is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.handsInSoil,
    relatedSlugs: ["dap", "mop", "npk"],
  },
  {
    slug: "mop",
    category: "fertilizers",
    name: "MOP",
    positioning: "Potassium-based crop nutrition, sourced against your specification.",
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Muriate of Potash (potassium chloride) supports crop quality, water regulation, and stress tolerance as a potassium source. A confirmed spec sheet for MOP is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.grainSilos,
    relatedSlugs: ["dap", "map", "ssp"],
  },
  {
    slug: "ssp",
    category: "fertilizers",
    name: "SSP",
    positioning: "Phosphorus and sulphur crop nutrition, sourced against your specification.",
    overviewEyebrow: "Fertilizers",
    overviewBody:
      "Single Super Phosphate supports crop nutrition programs needing a combined phosphorus-and-sulphur input. A confirmed spec sheet for SSP is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.handsInSoil,
    relatedSlugs: ["mop", "dap"],
  },
  {
    slug: "wheat",
    category: "agricultural-commodities",
    name: "Wheat",
    positioning: "One of the world's most trusted wheat origins — Canadian milling and feed wheat, supplied globally.",
    overviewEyebrow: "Agricultural Commodities",
    overviewBody:
      "Canada has earned a global reputation for producing premium-quality wheat recognized for its consistency, purity, high protein content, and exceptional milling performance. Agrisoil supplies multiple Canadian wheat classes to meet diverse customer requirements, alongside milling and feed wheat sourced from Europe and other export regions.",
    image: stockImages.wheatFieldSunset,
    specs: [
      { property: "Grade", value: "Milling & Feed Wheat" },
      { property: "Moisture", value: "Maximum 14%" },
      { property: "Protein", value: "11.5–13.5%" },
      { property: "Foreign Matter", value: "Maximum 2%" },
    ],
    packaging: ["Bulk", "50 kg Bags"],
    origins: ["Canada", "Europe", "Other Export Regions"],
    applications: [
      { title: "Bread & Bakery Production", body: "High-protein milling wheat for bread, bakery products, and premium flour." },
      { title: "Pasta & Specialty Flour", body: "Durum wheat for pasta, couscous, semolina, and specialty food manufacturing." },
      { title: "Noodles & Flatbreads", body: "White wheat for noodles, flatbreads, and Asian food processing." },
      { title: "Cakes, Pastries & Confectionery", body: "Soft wheat for cakes, pastries, cookies, crackers, and confectionery." },
      { title: "Feed & Industrial Processing", body: "General-purpose wheat for feed and industrial applications." },
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection can be arranged prior to shipment on request.",
    logisticsNote:
      "Supplied FOB, CFR, or CIF as bulk vessel or containerized shipments, matched to destination and volume.",
    relatedSlugs: ["yellow-corn", "soybeans", "barley"],
  },
  {
    slug: "yellow-corn",
    category: "agricultural-commodities",
    name: "Yellow Corn",
    positioning: "High-quality feed-grade corn for livestock and processing markets.",
    overviewEyebrow: "Agricultural Commodities",
    overviewBody:
      "Agrisoil supplies premium feed-grade yellow corn sourced from major agricultural exporting regions across North and South America, supporting livestock feed manufacturers, grain traders, processors, and agricultural distributors worldwide.",
    image: stockImages.heroWheatField,
    specs: [
      { property: "Grade", value: "Feed Grade" },
      { property: "Moisture", value: "Maximum 14%" },
      { property: "Foreign Matter", value: "Maximum 2%" },
      { property: "Broken Kernels", value: "Maximum 5%" },
    ],
    packaging: ["Bulk", "50 kg Bags"],
    origins: ["North America", "South America"],
    applications: [
      { title: "Poultry & Dairy Feed", body: "Feed-grade corn for poultry and dairy nutrition programs." },
      { title: "Livestock Nutrition", body: "General livestock feed and feed manufacturing." },
      { title: "Food & Industrial Processing", body: "Processing-grade supply for food and industrial applications." },
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection can be arranged prior to shipment on request.",
    logisticsNote: "Supplied FOB, CFR, or CIF as bulk vessel or containerized shipments.",
    relatedSlugs: ["wheat", "soybeans"],
  },
  {
    slug: "soybeans",
    category: "agricultural-commodities",
    name: "Soybeans",
    positioning: "Premium quality protein source — GMO and Non-GMO, sourced from the Americas.",
    overviewEyebrow: "Agricultural Commodities",
    overviewBody:
      "Soybeans remain one of the world's most important agricultural commodities due to their high protein and oil content. Agrisoil supplies both GMO and Non-GMO soybeans sourced from leading agricultural producers across North and South America.",
    image: stockImages.seedlingsPropagation,
    specs: [
      { property: "Type", value: "GMO & Non-GMO" },
      { property: "Moisture", value: "Maximum 13%" },
      { property: "Protein", value: "Minimum 35–38%" },
      { property: "Oil Content", value: "18–20%" },
      { property: "Foreign Matter", value: "Maximum 2%" },
    ],
    packaging: ["Bulk", "50 kg Bags"],
    origins: ["North America", "South America"],
    applications: [
      { title: "Animal Feed & Soy Meal", body: "Soy meal production for animal feed programs." },
      { title: "Oil Extraction", body: "Oil-content supply for extraction and refining." },
      { title: "Food & Industrial Manufacturing", body: "Food-grade and industrial processing supply." },
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection can be arranged prior to shipment on request.",
    logisticsNote: "Supplied FOB, CFR, or CIF as bulk vessel or containerized shipments.",
    relatedSlugs: ["wheat", "yellow-corn"],
  },
  {
    slug: "barley",
    category: "agricultural-commodities",
    name: "Barley",
    positioning: "Feed and processing grain, sourced against your specification.",
    overviewEyebrow: "Agricultural Commodities",
    overviewBody:
      "Barley rounds out Agrisoil's cereal-grain sourcing capability alongside wheat and corn. A confirmed spec sheet for barley is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.wheatFieldSunset,
    relatedSlugs: ["wheat", "rice"],
  },
  {
    slug: "rice",
    category: "agricultural-commodities",
    name: "Rice",
    positioning: "Milling-grade rice, sourced against your specification.",
    overviewEyebrow: "Agricultural Commodities",
    overviewBody:
      "Rice rounds out Agrisoil's grain sourcing capability for food and feed markets. A confirmed spec sheet for rice is still in progress — share your required grade and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.heroWheatField,
    relatedSlugs: ["wheat", "barley"],
  },
  {
    slug: "wood-pulp",
    category: "industrial-raw-materials",
    name: "Wood Pulp",
    positioning: "Sustainable raw material for paper, tissue, packaging, and specialty paper manufacturing.",
    overviewEyebrow: "Industrial Raw Materials",
    overviewBody:
      "Agrisoil supplies premium wood pulp suitable for paper, tissue, packaging, and specialty paper manufacturing, sourced from internationally recognized producers known for sustainable forestry practices and consistent product quality. Two grades are available: Bleached Hardwood Kraft Pulp (BHKP), valued for smoothness and printability, and Bleached Softwood Kraft Pulp (BSKP), valued for strength in packaging and industrial paper.",
    image: stockImages.cranesLoading,
    specs: [
      { property: "Grades", value: "BHKP & BSKP" },
      { property: "Brightness", value: "88–90% ISO" },
      { property: "Moisture", value: "Maximum 10%" },
      { property: "Bale Weight", value: "200–250 kg" },
    ],
    packaging: ["200–250 kg Bales"],
    origins: ["South America", "Europe", "Asia"],
    applications: [
      { title: "Tissue & Writing Paper", body: "BHKP's smoothness and printability suit tissue and writing paper." },
      { title: "Packaging & Industrial Paper", body: "BSKP's strength characteristics suit packaging and industrial paper." },
      { title: "Printing & Specialty Paper", body: "Both grades support printing, corrugated products, and specialty paper manufacturing." },
    ],
    qualityNote:
      "Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection can be arranged prior to shipment on request.",
    logisticsNote: "Supplied FOB, CFR, or CIF as bulk vessel or containerized shipments.",
    relatedSlugs: ["sulphur"],
  },
  {
    slug: "sulphur",
    category: "industrial-raw-materials",
    name: "Sulphur",
    positioning: "Industrial raw material, sourced against your specification.",
    overviewEyebrow: "Industrial Raw Materials",
    overviewBody:
      "Sulphur sits alongside Agrisoil's fertilizer and industrial raw material capability. A confirmed spec sheet for sulphur is still in progress — share your required form and volume through Contact and our commercial team will confirm sourcing and provide a quotation, typically within 24–48 hours.",
    image: stockImages.cargoShipPort,
    relatedSlugs: ["wood-pulp"],
  },
  {
    slug: "others",
    category: "industrial-raw-materials",
    name: "Other Industrial Raw Materials",
    positioning: "Sourcing beyond the standard catalog, scoped to your requirement.",
    overviewEyebrow: "Industrial Raw Materials",
    overviewBody:
      "Agrisoil's sourcing network extends beyond the products listed here. If you're looking for an industrial raw material that isn't shown, tell us the specification and volume and we'll confirm whether we can source it.",
    image: stockImages.cranesLoading,
  },
];

export function findProduct(slug: string): ProductDetail | undefined {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(category: string): ProductDetail[] {
  return products.filter((product) => product.category === category);
}

export function relatedProducts(product: ProductDetail): ProductDetail[] {
  return (product.relatedSlugs ?? [])
    .map((slug) => findProduct(slug))
    .filter((p): p is ProductDetail => Boolean(p));
}

/** Canadian wheat classes (Ch.4 "Canadian Wheat" / Ch.9 "Flour Milling Industry") — flagship extra rendered only on the wheat product page. */
export const canadianWheatClasses: { code: string; name: string; description: string }[] = [
  {
    code: "CWRS",
    name: "Canada Western Red Spring",
    description: "Premium high-protein milling wheat widely used for bread, bakery products, and premium flour production.",
  },
  {
    code: "CPSR",
    name: "Canada Prairie Spring Red",
    description: "Medium-protein wheat suitable for milling, food processing, and blended flour applications.",
  },
  {
    code: "CPSW",
    name: "Canada Prairie Spring White",
    description: "High-quality white wheat commonly used in noodles, flatbreads, specialty bakery products, and Asian food processing.",
  },
  {
    code: "CWAD",
    name: "Canada Western Amber Durum",
    description: "Premium durum wheat recognized worldwide for pasta, couscous, semolina, and specialty food manufacturing.",
  },
  {
    code: "CWSWS",
    name: "Canada Western Soft White Spring",
    description: "Soft wheat used for cakes, pastries, cookies, crackers, and confectionery products.",
  },
  {
    code: "CWGP",
    name: "Canada Western General Purpose",
    description: "Versatile wheat suitable for feed, industrial processing, and general commercial applications.",
  },
  {
    code: "CEWW",
    name: "Canada Eastern White Winter",
    description: "Soft winter wheat primarily produced in Eastern Canada and used in milling and baking industries.",
  },
  {
    code: "CERS",
    name: "Canada Eastern Red Spring",
    description: "Premium milling wheat cultivated in Eastern Canada with consistent baking performance.",
  },
];

/** "Why source it through Agrisoil" — product-agnostic trading-capability cards (Ch.1/3/5) reused across every product page. */
export const whySourceCards = [
  {
    icon: Globe2,
    title: "Global Supplier Network",
    body: "Carefully selected producers across the Middle East, Central Asia, North Africa, Canada, the United States, South America, and Europe.",
    href: "/global-network",
  },
  {
    icon: Clock,
    title: "Fast Commercial Response",
    body: "Quotations are typically provided within 24–48 hours, so you can respond quickly to changing market conditions.",
    href: "/contact",
  },
  {
    icon: Workflow,
    title: "End-to-End Coordination",
    body: "Supplier selection, contract execution, documentation, freight, and customs — managed as one transaction, not four.",
    href: "/services/supply-chain-management",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    body: "Certificate of Analysis on every shipment, with independent third-party inspection available on request.",
    href: "/services/quality-inspection-coordination",
  },
];
