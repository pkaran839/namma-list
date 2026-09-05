const PLACES = [
  {
    "id": 1,
    "category": "OG Spots",
    "name": "Umesh Refreshments",
    "type": "Vegetarian restaurant",
    "area": "Indiranagar",
    "rating": 4.4,
    "price": 1,
    "description": "standing-only darshini done right since forever.",
    "lat": 12.9832,
    "lng": 77.6408,
    "maps": "https://www.google.com/maps/search/?api=1&query=Umesh+Refreshments,Bengaluru"
  },
  {
    "id": 2,
    "category": "OG Spots",
    "name": "Chichabas Taj",
    "type": "Biryani restaurant",
    "area": "Cooke Town",
    "rating": 3.9,
    "price": 1,
    "description": "Frazer Town biryani institution. Go hungry.",
    "lat": 13.0086,
    "lng": 77.6294,
    "maps": "https://www.google.com/maps/search/?api=1&query=Chichabas+Taj,Bengaluru"
  },
  {
    "id": 3,
    "category": "OG Spots",
    "name": "Bengaluru Oota Company",
    "type": "Karnataka restaurant",
    "area": "Ulsoor",
    "rating": 4.2,
    "price": 1,
    "description": "Gowda and Mangalorean thalis by reservation only. Plan ahead.",
    "lat": 12.9841,
    "lng": 77.6179,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bengaluru+Oota+Company,Bengaluru"
  },
  {
    "id": 4,
    "category": "OG Spots",
    "name": "Oota Bangalore",
    "type": "Karnataka restaurant",
    "area": "Central Bengaluru",
    "rating": 4.3,
    "price": 1,
    "description": "Heritage Karnataka food with white-tablecloth energy.",
    "lat": 12.9728,
    "lng": 77.5979,
    "maps": "https://www.google.com/maps/search/?api=1&query=Oota+Bangalore,Bengaluru"
  },
  {
    "id": 5,
    "category": "OG Spots",
    "name": "MTR 1924",
    "type": "Tiffin room",
    "area": "Shantinagar",
    "rating": 4.3,
    "price": 1,
    "description": "A Bengaluru institution known for classic South Indian breakfast.",
    "lat": 12.9568,
    "lng": 77.5948,
    "maps": "https://www.google.com/maps/search/?api=1&query=MTR+1924,Bengaluru"
  },
  {
    "id": 6,
    "category": "OG Spots",
    "name": "Koshy's",
    "type": "Old-school restaurant",
    "area": "Central Bengaluru",
    "rating": 4.2,
    "price": 1,
    "description": "St. Mark's Road forever. Mutton cutlets and history.",
    "lat": 12.9704,
    "lng": 77.5968,
    "maps": "https://www.google.com/maps/search/?api=1&query=Koshy's,Bengaluru"
  },
  {
    "id": 7,
    "category": "OG Spots",
    "name": "Airlines Hotel",
    "type": "Drive-in darshini",
    "area": "Central Bengaluru",
    "rating": 4.1,
    "price": 1,
    "description": "Eat a dosa under the trees in one of Bengaluru's classic spots.",
    "lat": 12.9692,
    "lng": 77.5913,
    "maps": "https://www.google.com/maps/search/?api=1&query=Airlines+Hotel,Bengaluru"
  },
  {
    "id": 8,
    "category": "OG Spots",
    "name": "Shivaji Military Hotel",
    "type": "Donne biryani institution",
    "area": "JP Nagar",
    "rating": 3.8,
    "price": 1,
    "description": "Donne biryani ground zero. Go early.",
    "lat": 12.9041,
    "lng": 77.5866,
    "maps": "https://www.google.com/maps/search/?api=1&query=Shivaji+Military+Hotel,Bengaluru"
  },
  {
    "id": 9,
    "category": "OG Spots",
    "name": "Veena Stores",
    "type": "Breakfast restaurant",
    "area": "Malleshwaram",
    "rating": 4.3,
    "price": 1,
    "description": "Soft idlis, classic breakfast and standing-room energy.",
    "lat": 12.9987,
    "lng": 77.5662,
    "maps": "https://www.google.com/maps/search/?api=1&query=Veena+Stores,Bengaluru"
  },
  {
    "id": 10,
    "category": "OG Spots",
    "name": "Nagarjuna",
    "type": "Andhra restaurant",
    "area": "Central Bengaluru",
    "rating": 4.2,
    "price": 1,
    "description": "Andhra meals on banana leaf and plenty of spice.",
    "lat": 12.9764,
    "lng": 77.5946,
    "maps": "https://www.google.com/maps/search/?api=1&query=Nagarjuna,Bengaluru"
  },
  {
    "id": 11,
    "category": "OG Spots",
    "name": "Hotel Empire",
    "type": "Late-night kebabs",
    "area": "Central Bengaluru",
    "rating": 4.2,
    "price": 1,
    "description": "A classic late-night kebab-and-rice stop.",
    "lat": 12.9752,
    "lng": 77.599,
    "maps": "https://www.google.com/maps/search/?api=1&query=Hotel+Empire,Bengaluru"
  },
  {
    "id": 12,
    "category": "OG Spots",
    "name": "Hotel Fishland",
    "type": "Seafood restaurant",
    "area": "Vasanth Nagar",
    "rating": 4.0,
    "price": 1,
    "description": "Mangalorean seafood institution.",
    "lat": 12.9961,
    "lng": 77.5887,
    "maps": "https://www.google.com/maps/search/?api=1&query=Hotel+Fishland,Bengaluru"
  },
  {
    "id": 13,
    "category": "OG Spots",
    "name": "Appaji Mane",
    "type": "Mangalorean restaurant",
    "area": "Central Bengaluru",
    "rating": 4.1,
    "price": 1,
    "description": "Homestyle Mangalorean thali. Unfussy and real.",
    "lat": 12.9728,
    "lng": 77.5979,
    "maps": "https://www.google.com/maps/search/?api=1&query=Appaji+Mane,Bengaluru"
  },
  {
    "id": 14,
    "category": "Dosas and Darshinis",
    "name": "Stuffs of Idli",
    "type": "Idli & dosa",
    "area": "Indiranagar",
    "rating": 4.7,
    "price": 1,
    "description": "Idli maximalism. Check current opening status before visiting.",
    "lat": 12.9784,
    "lng": 77.6386,
    "maps": "https://www.google.com/maps/search/?api=1&query=Stuffs+of+Idli,Bengaluru"
  },
  {
    "id": 15,
    "category": "Dosas and Darshinis",
    "name": "Vidyarthi Bhavan",
    "type": "Benne dosa institution",
    "area": "Basavanagudi",
    "rating": 4.5,
    "price": 1,
    "description": "A legendary benne masala dosa destination.",
    "lat": 12.9409,
    "lng": 77.5762,
    "maps": "https://www.google.com/maps/search/?api=1&query=Vidyarthi+Bhavan,Bengaluru"
  },
  {
    "id": 16,
    "category": "Dosas and Darshinis",
    "name": "CTR (Shri Sagar)",
    "type": "Benne dosa institution",
    "area": "Malleshwaram",
    "rating": 4.4,
    "price": 1,
    "description": "Crispy benne dosa and classic Bengaluru breakfast.",
    "lat": 13.0011,
    "lng": 77.5673,
    "maps": "https://www.google.com/maps/search/?api=1&query=CTR+(Shri+Sagar),Bengaluru"
  },
  {
    "id": 17,
    "category": "Dosas and Darshinis",
    "name": "Brahmin's Coffee Bar",
    "type": "Idli-vada counter",
    "area": "Basavanagudi",
    "rating": 4.4,
    "price": 1,
    "description": "Idli, vada, chutney and filter coffee.",
    "lat": 12.9385,
    "lng": 77.5751,
    "maps": "https://www.google.com/maps/search/?api=1&query=Brahmin's+Coffee+Bar,Bengaluru"
  },
  {
    "id": 18,
    "category": "Dosas and Darshinis",
    "name": "The Rameshwaram Cafe",
    "type": "South Indian restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 1,
    "description": "Ghee podi idli and fast-moving queues.",
    "lat": 12.9736,
    "lng": 77.6364,
    "maps": "https://www.google.com/maps/search/?api=1&query=The+Rameshwaram+Cafe,Bengaluru"
  },
  {
    "id": 19,
    "category": "Dosas and Darshinis",
    "name": "Taaza Thindi",
    "type": "South Indian restaurant",
    "area": "Jayanagar",
    "rating": 4.6,
    "price": 1,
    "description": "Pocket-friendly dosa and zero-frills Bengaluru charm.",
    "lat": 12.9298,
    "lng": 77.5938,
    "maps": "https://www.google.com/maps/search/?api=1&query=Taaza+Thindi,Bengaluru"
  },
  {
    "id": 20,
    "category": "Gourmet",
    "name": "LUPA",
    "type": "Italian restaurant",
    "area": "Central Bengaluru",
    "rating": 4.4,
    "price": 3,
    "description": "Modern Italian dining with a polished city setting.",
    "lat": 12.9752,
    "lng": 77.599,
    "maps": "https://www.google.com/maps/search/?api=1&query=LUPA,Bengaluru"
  },
  {
    "id": 21,
    "category": "Gourmet",
    "name": "Sarposh",
    "type": "Kashmiri restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 3,
    "description": "Wazwan-style Kashmiri food.",
    "lat": 12.9808,
    "lng": 77.6397,
    "maps": "https://www.google.com/maps/search/?api=1&query=Sarposh,Bengaluru"
  },
  {
    "id": 22,
    "category": "Gourmet",
    "name": "Rumi",
    "type": "Restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 3,
    "description": "Moody lighting, shared plates and a date-night feel.",
    "lat": 12.9796,
    "lng": 77.6441,
    "maps": "https://www.google.com/maps/search/?api=1&query=Rumi,Bengaluru"
  },
  {
    "id": 23,
    "category": "Gourmet",
    "name": "Fireside",
    "type": "Live-fire restaurant",
    "area": "Hennur",
    "rating": 4.2,
    "price": 3,
    "description": "Everything cooked over open flame.",
    "lat": 13.029,
    "lng": 77.6378,
    "maps": "https://www.google.com/maps/search/?api=1&query=Fireside,Bengaluru"
  },
  {
    "id": 24,
    "category": "Gourmet",
    "name": "Klaa",
    "type": "Goan restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 3,
    "description": "Goan home-style flavours.",
    "lat": 12.9772,
    "lng": 77.643,
    "maps": "https://www.google.com/maps/search/?api=1&query=Klaa,Bengaluru"
  },
  {
    "id": 25,
    "category": "Gourmet",
    "name": "Pizza 4P's Indiranagar",
    "type": "Italian restaurant",
    "area": "Indiranagar",
    "rating": 4.8,
    "price": 3,
    "description": "Known for burrata-topped pizza and a polished dining experience.",
    "lat": 12.976,
    "lng": 77.6375,
    "maps": "https://www.google.com/maps/search/?api=1&query=Pizza+4P's+Indiranagar,Bengaluru"
  },
  {
    "id": 26,
    "category": "Gourmet",
    "name": "Fervor Restaurant",
    "type": "Restaurant",
    "area": "Hennur",
    "rating": 4.6,
    "price": 3,
    "description": "Worth the drive north for an inventive menu.",
    "lat": 13.0254,
    "lng": 77.6411,
    "maps": "https://www.google.com/maps/search/?api=1&query=Fervor+Restaurant,Bengaluru"
  },
  {
    "id": 27,
    "category": "Gourmet",
    "name": "Nāvu",
    "type": "Restaurant",
    "area": "Ulsoor",
    "rating": 4.3,
    "price": 3,
    "description": "Modern South Indian tasting plates.",
    "lat": 12.9769,
    "lng": 77.6146,
    "maps": "https://www.google.com/maps/search/?api=1&query=Nāvu,Bengaluru"
  },
  {
    "id": 28,
    "category": "Gourmet",
    "name": "Kopitiam Lah",
    "type": "Malaysian restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 3,
    "description": "Kaya toast, laksa and Malaysian comfort food.",
    "lat": 12.9832,
    "lng": 77.6408,
    "maps": "https://www.google.com/maps/search/?api=1&query=Kopitiam+Lah,Bengaluru"
  },
  {
    "id": 29,
    "category": "Gourmet",
    "name": "Lucky Chan",
    "type": "Japanese restaurant",
    "area": "Indiranagar",
    "rating": 4.4,
    "price": 3,
    "description": "Dimsum and ramen in a lively setting.",
    "lat": 12.982,
    "lng": 77.6452,
    "maps": "https://www.google.com/maps/search/?api=1&query=Lucky+Chan,Bengaluru"
  },
  {
    "id": 30,
    "category": "Gourmet",
    "name": "Tokyo Ramen Suzuki",
    "type": "Ramen restaurant",
    "area": "HSR Layout",
    "rating": 4.4,
    "price": 3,
    "description": "Tonkotsu ramen and Japanese-inspired bowls.",
    "lat": 12.914,
    "lng": 77.6378,
    "maps": "https://www.google.com/maps/search/?api=1&query=Tokyo+Ramen+Suzuki,Bengaluru"
  },
  {
    "id": 31,
    "category": "Gourmet",
    "name": "Soo Ra Sang",
    "type": "Korean restaurant",
    "area": "Indiranagar",
    "rating": 4.1,
    "price": 3,
    "description": "An established Korean spot with generous banchan.",
    "lat": 12.9796,
    "lng": 77.6441,
    "maps": "https://www.google.com/maps/search/?api=1&query=Soo+Ra+Sang,Bengaluru"
  },
  {
    "id": 32,
    "category": "Gourmet",
    "name": "Dam's Kitchen",
    "type": "Korean restaurant",
    "area": "Hennur",
    "rating": 4.2,
    "price": 3,
    "description": "Korean comfort food with a family-run feel.",
    "lat": 13.029,
    "lng": 77.6378,
    "maps": "https://www.google.com/maps/search/?api=1&query=Dam's+Kitchen,Bengaluru"
  },
  {
    "id": 33,
    "category": "Gourmet",
    "name": "Phobidden Fruit Vietnamese Kitchen",
    "type": "Vietnamese restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 3,
    "description": "Pho and banh mi with home-kitchen character.",
    "lat": 12.9772,
    "lng": 77.643,
    "maps": "https://www.google.com/maps/search/?api=1&query=Phobidden+Fruit+Vietnamese+Kitchen,Bengaluru"
  },
  {
    "id": 34,
    "category": "Gourmet",
    "name": "Moplah's",
    "type": "Malabar restaurant",
    "area": "Koramangala",
    "rating": 4.2,
    "price": 3,
    "description": "Malabar biryani and pathiri.",
    "lat": 12.9328,
    "lng": 77.6212,
    "maps": "https://www.google.com/maps/search/?api=1&query=Moplah's,Bengaluru"
  },
  {
    "id": 35,
    "category": "Gourmet",
    "name": "Si Nonna's",
    "type": "Sourdough pizza",
    "area": "Koramangala",
    "rating": 4.2,
    "price": 3,
    "description": "Sourdough pizza with a loyal following.",
    "lat": 12.9316,
    "lng": 77.6256,
    "maps": "https://www.google.com/maps/search/?api=1&query=Si+Nonna's,Bengaluru"
  },
  {
    "id": 36,
    "category": "Gourmet",
    "name": "23rd Street Pizza",
    "type": "Pizza restaurant",
    "area": "Richmond Town",
    "rating": 4.2,
    "price": 3,
    "description": "NY-style slices and late-night energy.",
    "lat": 12.9602,
    "lng": 77.5956,
    "maps": "https://www.google.com/maps/search/?api=1&query=23rd+Street+Pizza,Bengaluru"
  },
  {
    "id": 37,
    "category": "Gourmet",
    "name": "Maffei Kitchen",
    "type": "Italian restaurant",
    "area": "Vasanth Nagar",
    "rating": 4.2,
    "price": 3,
    "description": "Handmade pasta with a neighbourhood feel.",
    "lat": 12.9985,
    "lng": 77.5898,
    "maps": "https://www.google.com/maps/search/?api=1&query=Maffei+Kitchen,Bengaluru"
  },
  {
    "id": 38,
    "category": "Gourmet",
    "name": "Sando Club",
    "type": "Japanese sandwich restaurant",
    "area": "Central Bengaluru",
    "rating": 4.6,
    "price": 3,
    "description": "Japanese sandos with limited availability.",
    "lat": 12.9752,
    "lng": 77.599,
    "maps": "https://www.google.com/maps/search/?api=1&query=Sando+Club,Bengaluru"
  },
  {
    "id": 39,
    "category": "Gourmet",
    "name": "Naru Noodle Bar",
    "type": "Ramen restaurant",
    "area": "Shantinagar",
    "rating": 4.1,
    "price": 3,
    "description": "A popular noodle bar where reservations can be useful.",
    "lat": 12.9592,
    "lng": 77.5959,
    "maps": "https://www.google.com/maps/search/?api=1&query=Naru+Noodle+Bar,Bengaluru"
  },
  {
    "id": 40,
    "category": "Gourmet",
    "name": "Farmlore",
    "type": "Fine dining restaurant",
    "area": "Bengaluru outskirts",
    "rating": 4.7,
    "price": 3,
    "description": "Tasting-menu experience on a working farm.",
    "lat": 12.9012,
    "lng": 77.5533,
    "maps": "https://www.google.com/maps/search/?api=1&query=Farmlore,Bengaluru"
  },
  {
    "id": 41,
    "category": "Gourmet",
    "name": "Karavalli",
    "type": "South Indian restaurant",
    "area": "Central Bengaluru",
    "rating": 4.5,
    "price": 3,
    "description": "Long-running fine dining focused on coastal and South Indian cuisine.",
    "lat": 12.9716,
    "lng": 77.5924,
    "maps": "https://www.google.com/maps/search/?api=1&query=Karavalli,Bengaluru"
  },
  {
    "id": 42,
    "category": "Gourmet",
    "name": "Salvadore's Fine Dining",
    "type": "Fine dining restaurant",
    "area": "Central Bengaluru",
    "rating": 4.3,
    "price": 3,
    "description": "Rooftop fine dining in a polished setting.",
    "lat": 12.9704,
    "lng": 77.5968,
    "maps": "https://www.google.com/maps/search/?api=1&query=Salvadore's+Fine+Dining,Bengaluru"
  },
  {
    "id": 43,
    "category": "Gourmet",
    "name": "Pinocchio",
    "type": "Italian restaurant",
    "area": "Central Bengaluru",
    "rating": 4.8,
    "price": 3,
    "description": "Cosy candle-lit Italian dining.",
    "lat": 12.9692,
    "lng": 77.5913,
    "maps": "https://www.google.com/maps/search/?api=1&query=Pinocchio,Bengaluru"
  },
  {
    "id": 44,
    "category": "Gourmet",
    "name": "Pizza No Cap",
    "type": "Restaurant",
    "area": "Ulsoor",
    "rating": 4.3,
    "price": 3,
    "description": "No-frills pizza.",
    "lat": 12.9781,
    "lng": 77.6201,
    "maps": "https://www.google.com/maps/search/?api=1&query=Pizza+No+Cap,Bengaluru"
  },
  {
    "id": 45,
    "category": "Gourmet",
    "name": "Mai Prathum",
    "type": "Thai cafe",
    "area": "JP Nagar",
    "rating": 4.7,
    "price": 3,
    "description": "Thai cafe with bold flavours.",
    "lat": 12.9029,
    "lng": 77.5811,
    "maps": "https://www.google.com/maps/search/?api=1&query=Mai+Prathum,Bengaluru"
  },
  {
    "id": 46,
    "category": "Gourmet",
    "name": "Gam's Kitchen",
    "type": "Assamese restaurant",
    "area": "Koramangala",
    "rating": 4.3,
    "price": 3,
    "description": "Assamese and Northeastern home cooking.",
    "lat": 12.94,
    "lng": 77.6245,
    "maps": "https://www.google.com/maps/search/?api=1&query=Gam's+Kitchen,Bengaluru"
  },
  {
    "id": 47,
    "category": "Coffee",
    "name": "Still Coffee",
    "type": "Coffee shop",
    "area": "Old Airport Road",
    "rating": 4.6,
    "price": 2,
    "description": "Quiet, minimal, serious coffee.",
    "lat": 12.9636,
    "lng": 77.6444,
    "maps": "https://www.google.com/maps/search/?api=1&query=Still+Coffee,Bengaluru"
  },
  {
    "id": 48,
    "category": "Coffee",
    "name": "anāma coffee",
    "type": "Cafe",
    "area": "Indiranagar",
    "rating": 4.7,
    "price": 2,
    "description": "Small menu with carefully made specialty coffee.",
    "lat": 12.9808,
    "lng": 77.6397,
    "maps": "https://www.google.com/maps/search/?api=1&query=anāma+coffee,Bengaluru"
  },
  {
    "id": 49,
    "category": "Coffee",
    "name": "ARAKU Coffee",
    "type": "Coffee shop",
    "area": "Indiranagar",
    "rating": 4.1,
    "price": 2,
    "description": "Single-origin coffee in a beautiful space.",
    "lat": 12.9796,
    "lng": 77.6441,
    "maps": "https://www.google.com/maps/search/?api=1&query=ARAKU+Coffee,Bengaluru"
  },
  {
    "id": 50,
    "category": "Coffee",
    "name": "Tribal Brew Daily",
    "type": "Coffee shop",
    "area": "Indiranagar",
    "rating": 4.8,
    "price": 2,
    "description": "Specialty brews from tribal-grown beans.",
    "lat": 12.9784,
    "lng": 77.6386,
    "maps": "https://www.google.com/maps/search/?api=1&query=Tribal+Brew+Daily,Bengaluru"
  },
  {
    "id": 51,
    "category": "Coffee",
    "name": "The Craftery by Subko",
    "type": "Coffee shop",
    "area": "Koramangala",
    "rating": 4.2,
    "price": 2,
    "description": "Subko's Bengaluru outpost with coffee and bakes.",
    "lat": 12.934,
    "lng": 77.6267,
    "maps": "https://www.google.com/maps/search/?api=1&query=The+Craftery+by+Subko,Bengaluru"
  },
  {
    "id": 52,
    "category": "Coffee",
    "name": "Muru Muru",
    "type": "Coffee shop",
    "area": "Indiranagar",
    "rating": 4.4,
    "price": 2,
    "description": "Coffee, calm and good pastries.",
    "lat": 12.976,
    "lng": 77.6375,
    "maps": "https://www.google.com/maps/search/?api=1&query=Muru+Muru,Bengaluru"
  },
  {
    "id": 53,
    "category": "Coffee",
    "name": "Paper & Pie",
    "type": "Coffee shop",
    "area": "Indiranagar",
    "rating": 4.2,
    "price": 2,
    "description": "Coffee, books and pie.",
    "lat": 12.9748,
    "lng": 77.6419,
    "maps": "https://www.google.com/maps/search/?api=1&query=Paper+&+Pie,Bengaluru"
  },
  {
    "id": 54,
    "category": "Coffee",
    "name": "Chai Days",
    "type": "Tea house",
    "area": "Indiranagar",
    "rating": 4.4,
    "price": 2,
    "description": "Modern take on chai.",
    "lat": 12.9736,
    "lng": 77.6364,
    "maps": "https://www.google.com/maps/search/?api=1&query=Chai+Days,Bengaluru"
  },
  {
    "id": 55,
    "category": "Coffee",
    "name": "WIP",
    "type": "Cafe",
    "area": "Shantinagar",
    "rating": 4.1,
    "price": 2,
    "description": "Cafe energy with a solid brunch offering.",
    "lat": 12.9616,
    "lng": 77.597,
    "maps": "https://www.google.com/maps/search/?api=1&query=WIP,Bengaluru"
  },
  {
    "id": 56,
    "category": "Coffee",
    "name": "The Hole In The Wall Cafe",
    "type": "Cafe",
    "area": "Koramangala",
    "rating": 4.3,
    "price": 2,
    "description": "All-day breakfast favourite.",
    "lat": 12.9388,
    "lng": 77.6289,
    "maps": "https://www.google.com/maps/search/?api=1&query=The+Hole+In+The+Wall+Cafe,Bengaluru"
  },
  {
    "id": 57,
    "category": "Coffee",
    "name": "Sakura Matcha Bar",
    "type": "Matcha bar",
    "area": "Richmond Town",
    "rating": 4.2,
    "price": 2,
    "description": "Ceremonial-grade matcha.",
    "lat": 12.9674,
    "lng": 77.5989,
    "maps": "https://www.google.com/maps/search/?api=1&query=Sakura+Matcha+Bar,Bengaluru"
  },
  {
    "id": 58,
    "category": "Coffee",
    "name": "Maverick & Farmer Coffee",
    "type": "Coffee shop",
    "area": "Ulsoor",
    "rating": 4.3,
    "price": 2,
    "description": "Estate-grown coffee and experimental brews.",
    "lat": 12.9829,
    "lng": 77.6223,
    "maps": "https://www.google.com/maps/search/?api=1&query=Maverick+&+Farmer+Coffee,Bengaluru"
  },
  {
    "id": 59,
    "category": "Coffee",
    "name": "Champaca Bookstore Cafe",
    "type": "Book store cafe",
    "area": "Vasanth Nagar",
    "rating": 4.5,
    "price": 2,
    "description": "Books, courtyard seating and filter coffee.",
    "lat": 12.9937,
    "lng": 77.5876,
    "maps": "https://www.google.com/maps/search/?api=1&query=Champaca+Bookstore+Cafe,Bengaluru"
  },
  {
    "id": 60,
    "category": "Coffee",
    "name": "Nerlu",
    "type": "Cafe",
    "area": "BTM Layout",
    "rating": 4.1,
    "price": 2,
    "description": "Slow coffee in a relaxed setting.",
    "lat": 12.9154,
    "lng": 77.6123,
    "maps": "https://www.google.com/maps/search/?api=1&query=Nerlu,Bengaluru"
  },
  {
    "id": 61,
    "category": "Coffee",
    "name": "Fresh Factory",
    "type": "Restaurant",
    "area": "Indiranagar",
    "rating": 4.3,
    "price": 2,
    "description": "Neighbourhood spot with rotating specialty brews.",
    "lat": 12.976,
    "lng": 77.6375,
    "maps": "https://www.google.com/maps/search/?api=1&query=Fresh+Factory,Bengaluru"
  },
  {
    "id": 62,
    "category": "Coffee",
    "name": "Kinya",
    "type": "Coffee shop",
    "area": "JP Nagar",
    "rating": 4.5,
    "price": 2,
    "description": "Quiet specialty coffee.",
    "lat": 12.9041,
    "lng": 77.5866,
    "maps": "https://www.google.com/maps/search/?api=1&query=Kinya,Bengaluru"
  },
  {
    "id": 63,
    "category": "Sweet Tooth",
    "name": "Lavonne Café",
    "type": "Cafe",
    "area": "Domlur",
    "rating": 4.3,
    "price": 2,
    "description": "Patisserie and cafe known for serious baking.",
    "lat": 12.9561,
    "lng": 77.6343,
    "maps": "https://www.google.com/maps/search/?api=1&query=Lavonne+Café,Bengaluru"
  },
  {
    "id": 64,
    "category": "Sweet Tooth",
    "name": "LICK by Lavonne",
    "type": "Ice cream shop",
    "area": "Indiranagar",
    "rating": 4.0,
    "price": 2,
    "description": "Small-batch ice cream.",
    "lat": 12.9832,
    "lng": 77.6408,
    "maps": "https://www.google.com/maps/search/?api=1&query=LICK+by+Lavonne,Bengaluru"
  },
  {
    "id": 65,
    "category": "Sweet Tooth",
    "name": "Acai Theory",
    "type": "Dessert shop",
    "area": "Indiranagar",
    "rating": 4.8,
    "price": 2,
    "description": "Acai bowls and fresh toppings.",
    "lat": 12.982,
    "lng": 77.6452,
    "maps": "https://www.google.com/maps/search/?api=1&query=Acai+Theory,Bengaluru"
  },
  {
    "id": 66,
    "category": "Sweet Tooth",
    "name": "Juny's Bakehouse",
    "type": "Patisserie",
    "area": "Jayanagar",
    "rating": 3.6,
    "price": 2,
    "description": "Cult-style bakes and limited drops.",
    "lat": 12.9274,
    "lng": 77.5927,
    "maps": "https://www.google.com/maps/search/?api=1&query=Juny's+Bakehouse,Bengaluru"
  },
  {
    "id": 67,
    "category": "Sweet Tooth",
    "name": "K A W A I I",
    "type": "Dessert cafe",
    "area": "Indiranagar",
    "rating": 4.1,
    "price": 2,
    "description": "Japanese-inspired desserts and soft serve.",
    "lat": 12.9796,
    "lng": 77.6441,
    "maps": "https://www.google.com/maps/search/?api=1&query=K+A+W+A+I+I,Bengaluru"
  },
  {
    "id": 68,
    "category": "Sweet Tooth",
    "name": "Corner House Ice Cream",
    "type": "Ice cream parlour",
    "area": "Whitefield",
    "rating": 4.5,
    "price": 2,
    "description": "A Bengaluru classic, especially for Death by Chocolate.",
    "lat": 12.9698,
    "lng": 77.7478,
    "maps": "https://www.google.com/maps/search/?api=1&query=Corner+House+Ice+Cream,Bengaluru"
  },
  {
    "id": 69,
    "category": "Sweet Tooth",
    "name": "Lakeview Milk Bar",
    "type": "Ice cream shop",
    "area": "Central Bengaluru",
    "rating": 4.1,
    "price": 2,
    "description": "Old-school sundaes and fruit desserts.",
    "lat": 12.9704,
    "lng": 77.5968,
    "maps": "https://www.google.com/maps/search/?api=1&query=Lakeview+Milk+Bar,Bengaluru"
  },
  {
    "id": 70,
    "category": "Sweet Tooth",
    "name": "Milano Ice Cream",
    "type": "Ice cream parlour",
    "area": "Indiranagar",
    "rating": 4.2,
    "price": 2,
    "description": "Popular scoops and a lively queue.",
    "lat": 12.976,
    "lng": 77.6375,
    "maps": "https://www.google.com/maps/search/?api=1&query=Milano+Ice+Cream,Bengaluru"
  },
  {
    "id": 71,
    "category": "Sweet Tooth",
    "name": "O.G. Variar & Sons",
    "type": "Sweet shop",
    "area": "Rajajinagar",
    "rating": 4.4,
    "price": 2,
    "description": "Traditional sweets, especially Mysore pak.",
    "lat": 12.9876,
    "lng": 77.5551,
    "maps": "https://www.google.com/maps/search/?api=1&query=O.G.+Variar+&+Sons,Bengaluru"
  },
  {
    "id": 72,
    "category": "Sweet Tooth",
    "name": "Nenapu",
    "type": "Dessert shop",
    "area": "JP Nagar",
    "rating": 4.2,
    "price": 2,
    "description": "Desserts with a nostalgic Bengaluru feel.",
    "lat": 12.9029,
    "lng": 77.5811,
    "maps": "https://www.google.com/maps/search/?api=1&query=Nenapu,Bengaluru"
  },
  {
    "id": 73,
    "category": "Sweet Tooth",
    "name": "Harley's",
    "type": "Patisserie",
    "area": "JP Nagar",
    "rating": 4.1,
    "price": 2,
    "description": "Patisserie bakes for a proper sugar rush.",
    "lat": 12.9125,
    "lng": 77.5855,
    "maps": "https://www.google.com/maps/search/?api=1&query=Harley's,Bengaluru"
  },
  {
    "id": 74,
    "category": "Sweet Tooth",
    "name": "Fathima Bakery",
    "type": "Bakery",
    "area": "Richmond Town",
    "rating": 4.2,
    "price": 2,
    "description": "Old-school bakery with fresh bakes.",
    "lat": 12.9686,
    "lng": 77.6044,
    "maps": "https://www.google.com/maps/search/?api=1&query=Fathima+Bakery,Bengaluru"
  },
  {
    "id": 75,
    "category": "Pints",
    "name": "Toit Brewpub",
    "type": "Brewpub",
    "area": "Indiranagar",
    "rating": 4.5,
    "price": 3,
    "description": "One of Bengaluru's best-known craft beer institutions.",
    "lat": 12.9808,
    "lng": 77.6397,
    "maps": "https://www.google.com/maps/search/?api=1&query=Toit+Brewpub,Bengaluru"
  },
  {
    "id": 76,
    "category": "Pints",
    "name": "Arbor Brewing Company",
    "type": "Brewery",
    "area": "Central Bengaluru",
    "rating": 4.4,
    "price": 3,
    "description": "American-style ales and craft beer.",
    "lat": 12.9728,
    "lng": 77.5979,
    "maps": "https://www.google.com/maps/search/?api=1&query=Arbor+Brewing+Company,Bengaluru"
  },
  {
    "id": 77,
    "category": "Pints",
    "name": "Bob's Bar",
    "type": "Dive bar",
    "area": "Indiranagar",
    "rating": 4.1,
    "price": 3,
    "description": "Affordable pints, peanuts and zero pretence.",
    "lat": 12.9784,
    "lng": 77.6386,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bob's+Bar,Bengaluru"
  },
  {
    "id": 78,
    "category": "Pints",
    "name": "Geist Brewing Factory",
    "type": "Taproom",
    "area": "East Bengaluru",
    "rating": 4.3,
    "price": 3,
    "description": "Bengaluru craft beer and taproom atmosphere.",
    "lat": 12.9988,
    "lng": 77.6822,
    "maps": "https://www.google.com/maps/search/?api=1&query=Geist+Brewing+Factory,Bengaluru"
  },
  {
    "id": 79,
    "category": "Date Plans",
    "name": "ZLB23 Speakeasy",
    "type": "Speakeasy bar",
    "area": "Old Airport Road",
    "rating": 4.3,
    "price": 2,
    "description": "Hidden-bar atmosphere and creative cocktails.",
    "lat": 12.9576,
    "lng": 77.6367,
    "maps": "https://www.google.com/maps/search/?api=1&query=ZLB23+Speakeasy,Bengaluru"
  },
  {
    "id": 80,
    "category": "Date Plans",
    "name": "Dali and Gala",
    "type": "Cocktail bar",
    "area": "Central Bengaluru",
    "rating": 4.2,
    "price": 2,
    "description": "Surrealist-inspired cocktail setting.",
    "lat": 12.968,
    "lng": 77.5957,
    "maps": "https://www.google.com/maps/search/?api=1&query=Dali+and+Gala,Bengaluru"
  },
  {
    "id": 81,
    "category": "Date Plans",
    "name": "Cubbon Park morning run",
    "type": "Park run",
    "area": "Central Bengaluru",
    "rating": 4.6,
    "price": 2,
    "description": "Morning run followed by breakfast.",
    "lat": 12.9668,
    "lng": 77.5902,
    "maps": "https://www.google.com/maps/search/?api=1&query=Cubbon+Park+morning+run,Bengaluru"
  },
  {
    "id": 82,
    "category": "Date Plans",
    "name": "Blossom Book House",
    "type": "Bookshop crawl",
    "area": "Central Bengaluru",
    "rating": 4.6,
    "price": 2,
    "description": "Secondhand books and an easy slow-date plan.",
    "lat": 12.9764,
    "lng": 77.5946,
    "maps": "https://www.google.com/maps/search/?api=1&query=Blossom+Book+House,Bengaluru"
  },
  {
    "id": 83,
    "category": "Date Plans",
    "name": "Nandi Hills sunrise",
    "type": "Sunrise drive",
    "area": "Nandi Hills",
    "rating": 4.7,
    "price": 2,
    "description": "Early drive for sunrise and open views.",
    "lat": 13.3738,
    "lng": 77.6879,
    "maps": "https://www.google.com/maps/search/?api=1&query=Nandi+Hills+sunrise,Bengaluru"
  },
  {
    "id": 84,
    "category": "Date Plans",
    "name": "Museum of Art & Photography",
    "type": "Art museum",
    "area": "Central Bengaluru",
    "rating": 4.5,
    "price": 2,
    "description": "Art museum date followed by coffee.",
    "lat": 12.974,
    "lng": 77.5935,
    "maps": "https://www.google.com/maps/search/?api=1&query=Museum+of+Art+&+Photography,Bengaluru"
  },
  {
    "id": 85,
    "category": "Date Plans",
    "name": "Skandagiri sunrise trek",
    "type": "Tourist attraction",
    "area": "Skandagiri",
    "rating": 4.5,
    "price": 2,
    "description": "Night trek and sunrise above the clouds.",
    "lat": 13.3952,
    "lng": 77.7273,
    "maps": "https://www.google.com/maps/search/?api=1&query=Skandagiri+sunrise+trek,Bengaluru"
  },
  {
    "id": 86,
    "category": "Things to Do",
    "name": "Lalbagh Botanical Garden",
    "type": "Botanical garden",
    "area": "Shantinagar",
    "rating": 4.6,
    "price": 1,
    "description": "Large historic garden with the famous glasshouse.",
    "lat": 12.9568,
    "lng": 77.5948,
    "maps": "https://www.google.com/maps/search/?api=1&query=Lalbagh+Botanical+Garden,Bengaluru"
  },
  {
    "id": 87,
    "category": "Things to Do",
    "name": "KR Market flower market",
    "type": "Flower market",
    "area": "Basavanagudi",
    "rating": 4.4,
    "price": 1,
    "description": "Go early for the colourful flower market.",
    "lat": 12.9409,
    "lng": 77.5762,
    "maps": "https://www.google.com/maps/search/?api=1&query=KR+Market+flower+market,Bengaluru"
  },
  {
    "id": 88,
    "category": "Things to Do",
    "name": "Ranga Shankara",
    "type": "Theatre",
    "area": "JP Nagar",
    "rating": 4.6,
    "price": 1,
    "description": "A Bengaluru theatre staple with frequent performances.",
    "lat": 12.9053,
    "lng": 77.5822,
    "maps": "https://www.google.com/maps/search/?api=1&query=Ranga+Shankara,Bengaluru"
  },
  {
    "id": 89,
    "category": "Things to Do",
    "name": "Bangalore Palace",
    "type": "Palace",
    "area": "Vasanth Nagar",
    "rating": 4.4,
    "price": 1,
    "description": "Historic Tudor-style palace in the middle of the city.",
    "lat": 12.9901,
    "lng": 77.5909,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bangalore+Palace,Bengaluru"
  },
  {
    "id": 90,
    "category": "Things to Do",
    "name": "Church Street stroll",
    "type": "Street wander",
    "area": "Central Bengaluru",
    "rating": 4.5,
    "price": 1,
    "description": "Bookshops, cafes and an easy city walk.",
    "lat": 12.9668,
    "lng": 77.5902,
    "maps": "https://www.google.com/maps/search/?api=1&query=Church+Street+stroll,Bengaluru"
  },
  {
    "id": 91,
    "category": "Things to Do",
    "name": "VV Puram food street",
    "type": "Food street",
    "area": "VV Puram",
    "rating": 4.5,
    "price": 1,
    "description": "A concentrated street-food crawl.",
    "lat": 12.9564,
    "lng": 77.575,
    "maps": "https://www.google.com/maps/search/?api=1&query=VV+Puram+food+street,Bengaluru"
  },
  {
    "id": 92,
    "category": "Things to Do",
    "name": "Avenue Road book stalls",
    "type": "Book market",
    "area": "Shantinagar",
    "rating": 4.2,
    "price": 1,
    "description": "Secondhand books and bargain hunting.",
    "lat": 12.9604,
    "lng": 77.6014,
    "maps": "https://www.google.com/maps/search/?api=1&query=Avenue+Road+book+stalls,Bengaluru"
  },
  {
    "id": 93,
    "category": "Things to Do",
    "name": "NGMA Bengaluru",
    "type": "Modern art museum",
    "area": "Vasanth Nagar",
    "rating": 4.3,
    "price": 1,
    "description": "Modern art in a heritage setting.",
    "lat": 12.9961,
    "lng": 77.5887,
    "maps": "https://www.google.com/maps/search/?api=1&query=NGMA+Bengaluru,Bengaluru"
  },
  {
    "id": 94,
    "category": "Things to Do",
    "name": "Turahalli forest",
    "type": "Forest",
    "area": "Turahalli",
    "rating": 4.2,
    "price": 1,
    "description": "Popular for morning walks and cycling.",
    "lat": 12.8862,
    "lng": 77.5393,
    "maps": "https://www.google.com/maps/search/?api=1&query=Turahalli+forest,Bengaluru"
  },
  {
    "id": 95,
    "category": "Things to Do",
    "name": "Indian Music Experience Museum",
    "type": "Museum",
    "area": "JP Nagar",
    "rating": 4.6,
    "price": 1,
    "description": "Interactive museum dedicated to Indian music.",
    "lat": 12.9077,
    "lng": 77.5833,
    "maps": "https://www.google.com/maps/search/?api=1&query=Indian+Music+Experience+Museum,Bengaluru"
  },
  {
    "id": 96,
    "category": "Things to Do",
    "name": "HMT Heritage Centre & Museum",
    "type": "Heritage museum",
    "area": "Jalahalli",
    "rating": 4.5,
    "price": 1,
    "description": "Watches and machine-tool history.",
    "lat": 13.0458,
    "lng": 77.5482,
    "maps": "https://www.google.com/maps/search/?api=1&query=HMT+Heritage+Centre+&+Museum,Bengaluru"
  },
  {
    "id": 97,
    "category": "Things to Do",
    "name": "Rezwan Razack's Museum of Indian Paper Money",
    "type": "Museum",
    "area": "Central Bengaluru",
    "rating": 4.6,
    "price": 1,
    "description": "Specialist museum focused on Indian paper money.",
    "lat": 12.9692,
    "lng": 77.5913,
    "maps": "https://www.google.com/maps/search/?api=1&query=Rezwan+Razack's+Museum+of+Indian+Paper+Money,Bengaluru"
  },
  {
    "id": 98,
    "category": "Parks & Attractions",
    "name": "Cubbon Park",
    "type": "Urban park",
    "area": "Central Bengaluru",
    "rating": 4.7,
    "price": 1,
    "description": "Bengaluru's iconic green lung, ideal for walks, cycling and relaxed mornings.",
    "lat": 12.9763,
    "lng": 77.5929,
    "maps": "https://www.google.com/maps/search/?api=1&query=Cubbon+Park,Bengaluru"
  },
  {
    "id": 101,
    "category": "Parks & Attractions",
    "name": "Tipu Sultan's Summer Palace",
    "type": "Historic palace",
    "area": "Chamarajpet",
    "rating": 4.3,
    "price": 1,
    "description": "Historic wooden palace and museum connected with Tipu Sultan's era.",
    "lat": 12.9592,
    "lng": 77.5741,
    "maps": "https://www.google.com/maps/search/?api=1&query=Tipu+Sultan%27s+Summer+Palace,Bengaluru"
  },
  {
    "id": 102,
    "category": "Parks & Attractions",
    "name": "Ulsoor Lake",
    "type": "Urban lake",
    "area": "Ulsoor",
    "rating": 4.1,
    "price": 1,
    "description": "Central Bengaluru lake with greenery, walking areas and boating nearby.",
    "lat": 12.9819,
    "lng": 77.619,
    "maps": "https://www.google.com/maps/search/?api=1&query=Ulsoor+Lake,Bengaluru"
  },
  {
    "id": 103,
    "category": "Parks & Attractions",
    "name": "Sankey Tank",
    "type": "Lake & recreation spot",
    "area": "Sadashivanagar",
    "rating": 4.2,
    "price": 1,
    "description": "Peaceful urban lake popular for evening walks and a quick city escape.",
    "lat": 13.012,
    "lng": 77.5747,
    "maps": "https://www.google.com/maps/search/?api=1&query=Sankey+Tank,Bengaluru"
  },
  {
    "id": 104,
    "category": "Parks & Attractions",
    "name": "Bannerghatta Biological Park",
    "type": "Zoo & wildlife park",
    "area": "Bannerghatta",
    "rating": 4.3,
    "price": 2,
    "description": "Large wildlife destination with zoo, safari and butterfly park experiences.",
    "lat": 12.8,
    "lng": 77.577,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bannerghatta+Biological+Park,Bengaluru"
  },
  {
    "id": 105,
    "category": "Parks & Attractions",
    "name": "ISKCON Temple Bengaluru",
    "type": "Temple & cultural attraction",
    "area": "Rajajinagar",
    "rating": 4.6,
    "price": 1,
    "description": "Hilltop temple complex with distinctive architecture and a lively cultural atmosphere.",
    "lat": 13.0106,
    "lng": 77.5511,
    "maps": "https://www.google.com/maps/search/?api=1&query=ISKCON+Temple+Bengaluru"
  },
  {
    "id": 106,
    "category": "Parks & Attractions",
    "name": "Bull Temple",
    "type": "Historic temple",
    "area": "Basavanagudi",
    "rating": 4.5,
    "price": 1,
    "description": "One of Bengaluru's best-known heritage temples, famous for its monumental Nandi.",
    "lat": 12.9416,
    "lng": 77.5681,
    "maps": "https://www.google.com/maps/search/?api=1&query=Bull+Temple,Bengaluru"
  },
  {
    "id": 107,
    "category": "Parks & Attractions",
    "name": "Visvesvaraya Industrial & Technological Museum",
    "type": "Science museum",
    "area": "Cubbon Park",
    "rating": 4.5,
    "price": 2,
    "description": "Interactive science and technology museum that works well for families and curious minds.",
    "lat": 12.9753,
    "lng": 77.5963,
    "maps": "https://www.google.com/maps/search/?api=1&query=Visvesvaraya+Industrial+%26+Technological+Museum,Bengaluru"
  }
];

const cats = ["All","OG Spots","Dosas and Darshinis","Gourmet","Coffee","Sweet Tooth","Pints","Date Plans","Things to Do","Parks & Attractions"];
let selectedCategory = "All";
let map, markers = [], filtered = [...PLACES];

const $ = s => document.querySelector(s);
const money = p => "₹".repeat(p);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function setup(){
  $("#categoryChips").innerHTML = cats.map(c=>`<button class="chip ${c==="All"?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  cats.forEach(c => {});
  [...new Set(PLACES.map(p=>p.area))].sort().forEach(a => $("#areaFilter").insertAdjacentHTML("beforeend", `<option>${esc(a)}</option>`));
  document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{selectedCategory=b.dataset.cat;document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x===b));render()});
  ["search","areaFilter","priceFilter","ratingFilter","sortFilter"].forEach(id=>$( "#"+id).addEventListener(id==="search"?"input":"change",render));
  $("#themeBtn").onclick=toggleTheme;
  $("#fitMapBtn").onclick=fitMap;
  document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus()}});
  initMap(); render();
  $("#modalClose").onclick=closePlaceModal;
  document.querySelector("[data-close-modal]").onclick=closePlaceModal;
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closePlaceModal()});
}

function render(){
  const q=$("#search").value.trim().toLowerCase(), area=$("#areaFilter").value, price=$("#priceFilter").value, rating=$("#ratingFilter").value, sort=$("#sortFilter").value;
  filtered=PLACES.filter(p=>{
    const matchesCat=selectedCategory==="All"||p.category===selectedCategory;
    const hay=[p.name,p.type,p.area,p.category,p.description].join(" ").toLowerCase();
    return matchesCat && (!q||hay.includes(q)) && (!area||p.area===area) && (!price||p.price===+price) && (!rating||p.rating>=+rating);
  });
  if(sort==="rating") filtered.sort((a,b)=>b.rating-a.rating);
  if(sort==="name") filtered.sort((a,b)=>a.name.localeCompare(b.name));
  $("#resultCount").textContent=`${filtered.length} place${filtered.length===1?"":"s"}`;
  $("#resultTitle").textContent=selectedCategory==="All" ? "Explore Bengaluru" : selectedCategory;
  $("#cards").innerHTML=filtered.map(card).join("");
  document.querySelectorAll("[data-place]").forEach(c=>{
    c.onclick=()=>openPlaceModal(+c.dataset.place);
    c.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPlaceModal(+c.dataset.place)}};
  });
  updateMarkers();
}
function card(p){
  return `<article class="card" tabindex="0" data-place="${p.id}">
    <div class="card-top"><span class="badge">${esc(p.category)}</span><span class="rating">★ ${p.rating.toFixed(1)}</span></div>
    <h3>${esc(p.name)}</h3><div class="meta">${esc(p.type)} · ${esc(p.area)}</div>
    <p class="desc">${esc(p.description)}</p>
    <div class="card-bottom"><span class="price">${money(p.price)}</span><span class="view-link">View details →</span></div>
  </article>`;
}
function openPlaceModal(id){
  const p=PLACES.find(x=>x.id===id); if(!p)return;
  $("#modalCategory").textContent=p.category;
  $("#modalRating").textContent=`★ ${p.rating.toFixed(1)}`;
  $("#modalTitle").textContent=p.name;
  $("#modalMeta").textContent=`${p.type} · ${p.area} · ${money(p.price)}`;
  $("#modalDescription").textContent=p.description;
  $("#modalMaps").href=p.maps;
  $("#placeModal").classList.add("open");
  $("#placeModal").setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}
function closePlaceModal(){
  $("#placeModal").classList.remove("open");
  $("#placeModal").setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

function initMap(){
  map=L.map("map",{scrollWheelZoom:false}).setView([12.9716,77.5946],11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
}
function updateMarkers(){
  markers.forEach(m=>m.remove());markers=[];
  filtered.forEach(p=>{
    const m=L.marker([p.lat,p.lng]).addTo(map);
    m.bindPopup(`<strong>${esc(p.name)}</strong><br><span>${esc(p.type)} · ${esc(p.area)}</span><br><b>★ ${p.rating.toFixed(1)} · ${money(p.price)}</b><br><br><a href="${p.maps}" target="_blank" rel="noopener">Open in Google Maps ↗</a>`);
    markers.push(m);
  });
  fitMap(false);
}
function fitMap(showToast=true){
  if(!markers.length)return;
  const group=L.featureGroup(markers);map.fitBounds(group.getBounds().pad(.15));
  if(showToast)toast("Map fitted to your filtered results");
}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1800)}
function toggleTheme(){document.body.classList.toggle("dark");$("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";localStorage.setItem("namma-theme",document.body.classList.contains("dark")?"dark":"light")}
if(localStorage.getItem("namma-theme")==="dark"){document.body.classList.add("dark");setTimeout(()=>$("#themeBtn").textContent="☀",0)}
setup();
