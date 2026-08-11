export interface ProductItem {
  id: string;
  number: string;
  name: string;
  category: 'Living Room' | 'Dining Room' | 'Bedroom' | 'Office & Study' | 'Outdoor & Cane';
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  isFeatured?: boolean;
  dimensions: string;
  woodType: string;
  finish: string;
  description: string;
  features: string[];
  warranty: string;
  idealFor?: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface ShowroomLocation {
  id: string;
  name: string;
  badge: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  timing: string;
  image: string;
  features: string[];
  mapEmbedUrl: string;
}

export const SHOWROOMS: ShowroomLocation[] = [
  {
    id: 'chandanathope',
    name: 'Dimos Flagship Showroom & HQ',
    badge: 'Head Office & Design Studio',
    address: 'Bismi Tower, Kilikollur, Chandanathope',
    city: 'Kollam, Kerala',
    pincode: '691004',
    phone: '+91 70259 36662',
    phoneAlt: '+91 92880 98981',
    email: 'info@dimosfurniture.in',
    timing: 'Mon – Sun: 09:00 AM – 09:00 PM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1200&auto=format&fit=crop',
    features: ['30,000 Sq.Ft Experience Center', 'Full Customization Studio', 'Live Wood Grain Workshop', 'Direct Parking'],
    mapEmbedUrl: 'https://maps.google.com/?q=Chandanathope+Kollam+Kerala',
  },
  {
    id: 'pallimukku',
    name: 'Dimos Premium Living Showroom',
    badge: 'Luxury Sofas & Living',
    address: 'NH-66, Near Vadakkevila, Pallimukku',
    city: 'Kollam, Kerala',
    pincode: '691010',
    phone: '+91 92880 98981',
    email: 'pallimukku@dimosfurniture.in',
    timing: 'Mon – Sun: 09:30 AM – 09:00 PM',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=85&w=1200&auto=format&fit=crop',
    features: ['Luxury Sofa Lounges', 'Fabric Swatch Wall', 'Fast Delivery Hub'],
    mapEmbedUrl: 'https://maps.google.com/?q=Pallimukku+Vadakkevila+Kollam',
  },
  {
    id: 'karunagappalli',
    name: 'Dimos Karunagappalli Showroom',
    badge: 'Complete Home Furniture',
    address: 'Kulasekharapuram, Karunagappalli',
    city: 'Kollam, Kerala',
    pincode: '690518',
    phone: '+91 70259 36662',
    email: 'karunagappalli@dimosfurniture.in',
    timing: 'Mon – Sun: 09:30 AM – 08:30 PM',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1200&auto=format&fit=crop',
    features: ['Master Bedroom Suites', 'Teak Dining Collections', 'Free Consultation'],
    mapEmbedUrl: 'https://maps.google.com/?q=Karunagappalli+Kollam',
  },
  {
    id: 'bharanikavu',
    name: 'Dimos Bharanikavu Showroom',
    badge: 'Teak Heritage Center',
    address: 'Bharanikavu Junction, Sasthamkotta Road',
    city: 'Kollam, Kerala',
    pincode: '690520',
    phone: '+91 92880 98981',
    email: 'bharanikavu@dimosfurniture.in',
    timing: 'Mon – Sun: 09:30 AM – 08:30 PM',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=85&w=1200&auto=format&fit=crop',
    features: ['Traditional Teak Swings', 'Solid Wood Dining Tables', 'Bespoke Blueprints'],
    mapEmbedUrl: 'https://maps.google.com/?q=Bharanikavu+Kollam',
  },
  {
    id: 'thattamala',
    name: 'Dimos Thattamala Experience Center',
    badge: 'Modern Recliners & Storage',
    address: 'NH-66 Bypass Road, Thattamala',
    city: 'Kollam, Kerala',
    pincode: '691020',
    phone: '+91 70259 36662',
    email: 'thattamala@dimosfurniture.in',
    timing: 'Mon – Sun: 09:30 AM – 09:00 PM',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=85&w=1200&auto=format&fit=crop',
    features: ['Ready-Stock Quick Dispatch', 'Modern Recliners', 'Study & Office Sets'],
    mapEmbedUrl: 'https://maps.google.com/?q=Thattamala+Kollam',
  },
];

export const METRICS: MetricItem[] = [
  {
    value: '900+',
    label: 'Bespoke designs crafted and delivered across Kerala',
  },
  {
    value: '50K+',
    label: 'Happy families living with timeless Dimos furniture',
  },
  {
    value: '98%',
    label: 'Client satisfaction & generational repeat patronage',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'watu-chair',
    number: '01',
    name: 'Watu Teak Lounge Chair',
    category: 'Living Room',
    rating: 4.9,
    reviewsCount: 142,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1580481077167-336352347a82?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580481077167-336352347a82?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'W 62cm × D 68cm × H 84cm (Seat Height: 44cm)',
    woodType: '100% Solid Seasoned Nilambur Teakwood',
    finish: 'Natural Matte Wax with Hand-Woven Rattan Backrest',
    description:
      'The Watu Chair celebrates airy woven rattan craftsmanship framed by sculpted solid teakwood. Its ergonomic reclined back offers unmatched spinal comfort for modern Kerala residences.',
    features: [
      'Hand-woven natural organic rattan weave',
      'Mortise and tenon joinery for heirloom longevity',
      'Anti-scratch felt floor glides included',
      'Termite & borer proof organic wax seal',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Living Room Lounges, Verandas & Reading Spaces',
  },
  {
    id: 'sunyi-chair',
    number: '02',
    name: 'Sunyi Sculpted Accent Chair',
    category: 'Living Room',
    rating: 5.0,
    reviewsCount: 289,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'W 48cm × D 46cm × H 64cm (Seat Height: 42cm)',
    woodType: 'Kiln-Dried Kerala Teak Heartwood',
    finish: 'Smoked Amber Oil Finish',
    description:
      'Our iconic design centerpiece. The Sunyi Chair draws inspiration from minimalist low-profile architectural joinery, creating a striking silhouette in urban living rooms and master suites.',
    features: [
      'Contoured saddle seat for natural posture relief',
      'Constructed without visible screws or metal brackets',
      'Ultra-compact footprint for modern residences',
      'Silky smooth hand-sanded grain texture',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Formal Living Rooms, Foyer Entries & Accent Staging',
  },
  {
    id: 'teras-table',
    number: '03',
    name: 'Teras Monolith Teak Side Table',
    category: 'Living Room',
    rating: 4.8,
    reviewsCount: 96,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'Diameter 50cm × Height 52cm',
    woodType: 'Single Trunk Seasoned Teak Log Section',
    finish: 'Natural Matte Hardwax Oil',
    description:
      'A sculptural accent table carved from solid teak trunk timber. The raw organic cross-grain patterns provide an authentic tactile connection to Kerala nature.',
    features: [
      '100% solid core timber with natural annual growth rings',
      'Leveling brass levellers integrated at the base',
      'Water and heat-resistant polyurethane clear coat',
      'Each piece features a completely unique grain pattern',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Sofa Companion, Bedside Nightstand & Coffee Corners',
  },
  {
    id: 'duduk-bench',
    number: '04',
    name: 'Duduk Woven Teak Daybed',
    category: 'Living Room',
    rating: 4.9,
    reviewsCount: 118,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'L 150cm × W 42cm × H 45cm',
    woodType: 'Kiln-Dried Nilambur Teakwood',
    finish: 'Bleached Driftwood Matte',
    description:
      'A multi-functional bench and daybed featuring tight Danish cord geometric weave supported by architectural teak legs. Perfect for entryway galleries and dining tables.',
    features: [
      'Reinforced high-tensile organic paper cord seat',
      'Chamfered tapered legs with mortise tenons',
      'Accommodates up to 3 adults comfortably',
      'Moisture-sealed for coastal Kerala weather',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Dining Seating, Entryways, Foot of Bed & Corridor Benches',
  },
  {
    id: 'malabar-dining-table',
    number: '05',
    name: 'Malabar 8-Seater Solid Teak Dining Table',
    category: 'Dining Room',
    rating: 5.0,
    reviewsCount: 215,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'L 240cm × W 100cm × H 76cm',
    woodType: '100% Solid Single-Slab Seasoned Teak',
    finish: 'Heritage Honey Polish with Satin Lacquer',
    description:
      'The centerpiece of joyous family gatherings. Built with 2-inch thick solid teak planks and architectural trestle joinery, engineered to last for generations of feasts.',
    features: [
      '2-inch thick solid heartwood top surface',
      'Smooth hand-eased organic live edge perimeter',
      'Trestle base provides maximum knee clearance',
      'Stain-resistant nano-ceramic sealer applied',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Luxury Dining Rooms, Villa Patios & Family Feast Spaces',
  },
  {
    id: 'royal-king-bed',
    number: '06',
    name: 'Sovereign Grand Teak Hydraulic King Bed',
    category: 'Bedroom',
    rating: 4.9,
    reviewsCount: 310,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'L 215cm × W 195cm × Headboard H 115cm',
    woodType: 'Kiln-Seasoned Kerala Teak & Marine Plywood Base',
    finish: 'Warm Teakwood Matte with Padded Bouclé Headboard',
    description:
      'An opulent master bedroom sanctuary. Combines the timeless warmth of hand-planed teak headboard framing with German heavy-duty hydraulic under-bed storage.',
    features: [
      'German pneumatic gas-lift hydraulic storage mechanism',
      'Acoustic-dampened slat base for zero mattress creaking',
      'Integrated soft-glow ambient LED strip provision',
      'Fully termite-treated interior storage compartment',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Master Bedroom Suites & Modern Luxury Villas',
  },
  {
    id: 'monarch-study-desk',
    number: '07',
    name: 'Monarch Executive Teakwood Study Desk',
    category: 'Office & Study',
    rating: 4.8,
    reviewsCount: 88,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'L 160cm × W 75cm × H 76cm',
    woodType: 'Grade-A Nilambur Teakwood',
    finish: 'Walnut Brown Satin Lacquer with Brass Inlays',
    description:
      'Crafted for visionary minds. Features concealed cable channels, soft-close velvet-lined drawers, and solid brass detailing embedded in kiln-dried teak.',
    features: [
      '3 soft-close drawers with precision dovetail joinery',
      'Solid brushed brass handles and leg accents',
      'Concealed magnetic cable management organizer',
      'Spacious ergonomic leg room for extended work hours',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Home Offices, Executive Studies & Library Workspaces',
  },
  {
    id: 'veranda-cane-lounger',
    number: '08',
    name: 'Malabar Traditional Easy Cane Lounger',
    category: 'Outdoor & Cane',
    rating: 5.0,
    reviewsCount: 164,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    ],
    dimensions: 'L 110cm × W 72cm × H 90cm',
    woodType: 'Solid Seasoned Kerala Teak & Natural Cane',
    finish: 'Natural Honey Weather-Resistant Teak Sealer',
    description:
      'The quintessential Kerala easy chair reimagined for contemporary verandas. Features pull-out leg rests and breathable rattan cane weaving for blissful tropical afternoons.',
    features: [
      'Retractable swivel leg extension arms for full reclining',
      'Hand-woven double-knotted natural cane weave',
      'UV & moisture-resistant exterior timber polyurethane',
      'Curved neck contour for effortless afternoon naps',
    ],
    warranty: '10-Year Solid Teakwood Warranty',
    idealFor: 'Courtyards, Verandas, Balconies & Garden Patios',
  },
];

export const CUSTOM_WOOD_FINISHES = [
  { id: 'natural', name: 'Natural Warm Teak', hex: '#8c6239', desc: 'Preserves the golden honey heartwood grain with clear protective wax.' },
  { id: 'smoked', name: 'Smoked Charcoal', hex: '#3b3127', desc: 'Deep architectural tone achieved through natural timber fuming.' },
  { id: 'driftwood', name: 'Bleached Driftwood', hex: '#b3a492', desc: 'Subtle light Scandinavian wash highlighting organic pore texture.' },
  { id: 'amber', name: 'Honey Amber Lacquer', hex: '#b37446', desc: 'Rich golden amber with subtle satin sheen for timeless elegance.' },
];

export const CUSTOM_FABRICS = [
  { id: 'linen-sand', name: 'Belgian Linen (Sand)', color: '#d8cebf', desc: 'Breathable, organic natural linen weave.' },
  { id: 'boucle-cream', name: 'Textured Bouclé (Cream)', color: '#f0ebe2', desc: 'Ultra-soft tactile loop weave for cozy warmth.' },
  { id: 'leather-cognac', name: 'Full-Grain Leather (Cognac)', color: '#7a4522', desc: 'Supple full-grain leather that patinas beautifully.' },
  { id: 'velvet-forest', name: 'Emerald Velvet', color: '#2a3d2c', desc: 'Plush stain-resistant architectural velvet.' },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Dining Room' | 'Bedroom' | 'Outdoor & Veranda' | 'Craftsmanship';
  location: string;
  woodType: string;
  image: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sovereign 3+2 Teak Living Suite',
    category: 'Living Room',
    location: 'Waterfront Residence, Kollam',
    woodType: 'Grade-A Nilambur Teakwood',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'wide',
    description: 'Custom sculpted teak living ensemble with Belgian linen upholstery, bathed in warm natural Kerala daylight.',
  },
  {
    id: 'gal-2',
    title: 'Monolith 8-Seater Royal Dining Suite',
    category: 'Dining Room',
    location: 'Modern Villa, Trivandrum',
    woodType: 'Kiln-Dried Kerala Teak (2-Inch Slab)',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    description: 'Solid teakwood trestle dining table with heat-resistant nano-coat polish and sculpted ergonomic dining chairs.',
  },
  {
    id: 'gal-3',
    title: 'Hydraulic Storage Master Bed Suite',
    category: 'Bedroom',
    location: 'Luxury Penthouse, Cochin',
    woodType: 'Solid Teak with Marine Core',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'wide',
    description: 'Minimalist solid teak headboard framing paired with German pneumatic gas-lift under-bed storage.',
  },
  {
    id: 'gal-4',
    title: 'Malabar Traditional Easy Cane Lounger',
    category: 'Outdoor & Veranda',
    location: 'Heritage Nalukettu Courtyard, Alappuzha',
    woodType: 'Solid Teak & Handwoven Cane',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    description: 'Traditional Kerala planters chair with pull-out leg rests and natural rattan weave overlooking lush tropical greenery.',
  },
  {
    id: 'gal-5',
    title: 'Nilambur Teak Kiln-Seasoning & Joinery',
    category: 'Craftsmanship',
    location: 'Dimos Central Workshop, Chandanathope',
    woodType: 'Mature Nilambur Heartwood',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    description: 'Master woodcraftsman hand-planing mortise and tenon joints to guarantee generational structural integrity.',
  },
  {
    id: 'gal-6',
    title: 'Sunyi Curved Minimalist Armchair Staging',
    category: 'Living Room',
    location: 'Contemporary Duplex, Pallimukku',
    woodType: 'Natural Warm Teak & Linen',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'wide',
    description: 'Seamless continuous wood curves crafted without visible screws, adding organic sculptural warmth to modern interiors.',
  },
  {
    id: 'gal-7',
    title: 'Grand 4-Door Teak Wardrobe Installation',
    category: 'Bedroom',
    location: 'Architect Villa, Karunagappalli',
    woodType: 'Grade-A Seasoned Teak',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    description: 'Floor-to-ceiling modular wardrobe featuring velvet jewelry trays and smooth soft-close German hinges.',
  },
  {
    id: 'gal-8',
    title: 'Monarch Executive Study Desk Staging',
    category: 'Craftsmanship',
    location: 'Private Law Chambers, Kollam',
    woodType: 'Walnut Brown Teak & Brass',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=85&w=1200&auto=format&fit=crop',
    aspectRatio: 'wide',
    description: 'Solid brass leg inlays and concealed wire routing integrated into 100% seasoned timber.',
  },
];

export interface ShowroomPackage {
  id: string;
  badge: string;
  title: string;
  idealFor: string;
  piecesIncluded: string[];
  timberGrade: string;
  finish: string;
  image: string;
  description: string;
  showroomPerks: string[];
}

export const SHOWROOM_PACKAGES: ShowroomPackage[] = [
  {
    id: 'complete-villa',
    badge: 'Whole-Home Showroom Privilege',
    title: 'The Sovereign Villa Complete Ensemble',
    idealFor: '3-4 BHK Luxury Kerala Villas & Duplexes',
    piecesIncluded: [
      'Sovereign 3+2 Teak Living Suite + Teras Coffee Table',
      'Malabar 8-Seater Royal Dining Table + 8 Ergonomic Chairs',
      'Sovereign King Hydraulic Bed + 2 Bedside Consoles',
      'Secondary Queen Bedroom Suite + 3-Door Teak Wardrobe',
      '2 Malabar Traditional Veranda Cane Loungers',
    ],
    timberGrade: '100% Solid Kiln-Seasoned Nilambur Teakwood (Grade-A)',
    finish: 'Choice of Natural Honey, Smoked Charcoal, or Satin Amber',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200&auto=format&fit=crop',
    description:
      'A holistic whole-home furnishing solution curated by Dimos master interior designers. Coordinates wood tones, upholstery, and ergonomics seamlessly across living, dining, and bedroom spaces.',
    showroomPerks: [
      'Free 3D Architectural Space Planning Consultation',
      'All-Kerala White-Glove In-Home Delivery & Installation',
      '10-Year Comprehensive Structural Teakwood Warranty',
      'Complimentary Annual Teak Wax & Polish Care Kit for 3 Years',
    ],
  },
  {
    id: 'living-dining-combo',
    badge: 'Signature Living & Dining',
    title: 'The Malabar Grand Living & Dining Suite',
    idealFor: 'Contemporary Living Rooms & Formal Dining Halls',
    piecesIncluded: [
      'Sovereign 3+2 Teak Sofa Suite + Belgian Linen Cushions',
      'Teras Solid Teak Monolith Coffee Table',
      'Malabar 6-Seater Teak Dining Table + 6 Sculpted Chairs',
      'Matching Teakwood Side Credenza Provision',
    ],
    timberGrade: 'Grade-A Nilambur Teak with Mortise & Tenon Joinery',
    finish: 'Honey Amber Satin Lacquer (Heat & Water Resistant)',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1200&auto=format&fit=crop',
    description:
      'Elevate the social heart of your home. Combines deep lounge seating with generous dining proportions, designed for festive family gatherings and effortless hospitality.',
    showroomPerks: [
      'Complimentary Custom Belgian Linen Accent Pillows',
      'Free Direct Showroom Delivery across Kollam & Trivandrum',
      '10-Year Termite and Structural Warranty',
    ],
  },
  {
    id: 'master-sanctuary',
    badge: 'Master Suite Privilege',
    title: 'Heritage Sanctuary Master Bedroom Suite',
    idealFor: 'Master Bedroom Sanctuaries',
    piecesIncluded: [
      'Sovereign King Hydraulic Storage Bed (German Mechanism)',
      '2 Matching Floating Teak Bedside Consoles',
      'Grand 4-Door Teak Modular Wardrobe with Velvet Drawers',
      'Ergonomic Teak Dressing Mirror Console',
    ],
    timberGrade: 'Solid Seasoned Teak & Marine Plywood Interior Core',
    finish: 'Warm Teak Matte with Cream Bouclé Headboard Framing',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1200&auto=format&fit=crop',
    description:
      'An oasis of tranquility with zero clutter. Heavy-duty German gas-lift hydraulics provide cavernous under-bed storage while hand-planed teak headboards add organic architectural warmth.',
    showroomPerks: [
      'Zero-Creak Slat Acoustic Damping Guarantee',
      '5-Year Free Service on German Hydraulic Cylinders',
      'Free White-Glove In-Bedroom Installation',
    ],
  },
  {
    id: 'veranda-relaxation',
    badge: 'Veranda & Courtyard Set',
    title: 'Traditional Malabar Courtyard & Easy Chair Set',
    idealFor: 'Open Verandas, Balconies, Nadumuttam & Garden Patios',
    piecesIncluded: [
      '2 Malabar Traditional Easy Cane Loungers with Swivel Rests',
      '1 Sculpted Teak Low Round Coffee Table',
      '2 Matching Teak Accent Footstools',
    ],
    timberGrade: 'Seasoned Solid Kerala Teak & Double-Knotted Rattan Cane',
    finish: 'Weather-Shield Exterior Marine Teak Sealer',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=85&w=1200&auto=format&fit=crop',
    description:
      'Bask in gentle afternoon tropical breezes. Authentic handwoven natural cane breathes effortlessly, paired with extending leg arms for peaceful moments of relaxation.',
    showroomPerks: [
      'UV and Weather-Resistant Exterior Protection',
      'Free Cane Retightening Service within 3 Years',
      'Free Home Delivery Across Kerala',
    ],
  },
];

