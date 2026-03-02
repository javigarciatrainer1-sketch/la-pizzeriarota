export const ALLERGENS = [
  { id: 'gluten', name: 'Gluten', icon: '🌾' },
  { id: 'crustaceos', name: 'Crustáceos', icon: '🦐' },
  { id: 'huevos', name: 'Huevos', icon: '🥚' },
  { id: 'pescado', name: 'Pescado', icon: '🐟' },
  { id: 'cacahuetes', name: 'Cacahuetes', icon: '🥜' },
  { id: 'soja', name: 'Soja', icon: '🫘' },
  { id: 'lacteos', name: 'Lácteos', icon: '🥛' },
  { id: 'frutos_cascara', name: 'Frutos de cáscara', icon: '🌰' },
  { id: 'apio', name: 'Apio', icon: '🌿' },
  { id: 'mostaza', name: 'Mostaza', icon: '🍯' },
  { id: 'sesamo', name: 'Granos de sésamo', icon: '🥯' },
  { id: 'sulfitos', name: 'Dióxido de azufre / Sulfitos', icon: '🧪' },
  { id: 'moluscos', name: 'Moluscos', icon: '🐚' },
  { id: 'altramuces', name: 'Altramuces', icon: '🌱' },
];

export const MENU_DATA = {
  pizzas: {
    title: "Nuestras Pizzas",
    bases: [
      { name: "Base Pequeña", price: 4.50, allergens: ['gluten'] },
      { name: "Base Mediana", price: 5.50, allergens: ['gluten'] },
      { name: "Base Grande", price: 6.50, allergens: ['gluten'] },
      { name: "Base Familiar", price: 7.50, allergens: ['gluten'] },
    ],
    ingredientPrices: {
      large: 1.50, // Familiar y Grande
      small: 1.30, // Mediana y Pequeña
    },
    specialties: [
      { name: "MEXICANA", ingredients: "Ternera, Cheddar y Bacon", allergens: ['gluten', 'lacteos', 'huevos'] },
      { name: "DIABLO", ingredients: "Jalapeños, Pepperoni y Pimiento Rojo", allergens: ['gluten', 'soja', 'huevos'] },
      { name: "CARBONARA", ingredients: "Champiñón, Bacon y Nata", allergens: ['gluten', 'lacteos'] },
      { name: "BBQ", ingredients: "Pollo, Bacon y Salsa BBQ", allergens: ['gluten'] },
    ],
    ingredients: [
      { name: "Jamón", allergens: ['lacteos', 'soja'] },
      { name: "Chorizo", allergens: ['lacteos', 'soja'] },
      { name: "Bacon", allergens: [] },
      { name: "Ternera", allergens: [] },
      { name: "Pollo", allergens: [] },
      { name: "Pepperoni", allergens: ['huevos', 'soja'] },
      { name: "Salchicha", allergens: ['soja'] },
      { name: "Salsa BBQ", allergens: [] },
      { name: "Atún", allergens: ['pescado'] },
      { name: "Gambas", allergens: ['crustaceos'] },
      { name: "Anchoas", allergens: ['pescado'] },
      { name: "Huevo", allergens: ['huevos'] },
      { name: "Nata", allergens: ['lacteos'] },
      { name: "Cheddar", allergens: ['huevos', 'lacteos'] },
      { name: "Roquefort", allergens: ['lacteos'] },
      { name: "Extra de queso", allergens: ['lacteos'] },
      { name: "Cebolla", allergens: [] },
      { name: "Pimiento verde/rojo", allergens: [] },
      { name: "Jalapeños", allergens: [] },
      { name: "Tomate Natural", allergens: [] },
      { name: "Piña", allergens: [] },
      { name: "Maiz", allergens: [] },
      { name: "Champiñones", allergens: [] },
      { name: "Aceitunas negras", allergens: [] },
      { name: "Alcaparras", allergens: [] }
    ]
  },
  deTodoUnPoco: {
    title: "De Todo un Poco",
    items: [
      { name: "Patatas Fritas", price: 3.00, allergens: [] },
      { name: "Patatas con Queso", price: 4.20, allergens: ['lacteos', 'gluten'] },
      { name: "Patatas Carne y Queso", price: 5.70, allergens: ['lacteos', 'gluten'] },
      { name: "Patatas Bacon y Queso", price: 5.70, allergens: ['lacteos', 'gluten'] },
      { name: "Aros de Cebolla", price: 4.50, allergens: ['gluten'] },
      { name: "1/2 Ensalada de la Casa", price: 5.50, allergens: ['huevos', 'pescado', 'lacteos'] },
      { name: "Ensalada de la Casa", price: 7.00, allergens: ['huevos', 'pescado', 'lacteos'] },
      { name: "Alitas de Pollo Caseras", price: 4.70, allergens: ['gluten'] },
      { name: "Nachos con Queso", price: 6.50, allergens: ['lacteos', 'gluten'] },
      { name: "Nachos con Carne y Queso", price: 7.50, allergens: ['lacteos', 'gluten'] },
      { name: "1/2 Arroz Frito", price: 6.00, allergens: ['huevos', 'soja', 'crustaceos', 'pescado'] },
      { name: "Arroz Frito", price: 10.00, allergens: ['huevos', 'soja', 'crustaceos', 'pescado'] },
      { name: "Nuggets con Patatas", price: 4.00, allergens: ['gluten', 'huevos'] },
      { name: "Perrito", price: 3.00, allergens: ['gluten', 'soja'] },
    ]
  },
  sandwichAndHamburguesas: {
    title: "Sándwich y Hamburguesas",
    sandwiches: [
      { name: "Sándwich Club", price: 4.90, allergens: ['gluten', 'huevos', 'lacteos', 'soja', 'mostaza'] },
      { name: "Sándwich Pollo", price: 3.70, allergens: ['gluten', 'huevos', 'mostaza'] },
      { name: "Sándwich Completo", price: 4.00, allergens: ['gluten', 'huevos', 'soja'] },
      { name: "Sándwich JQH", price: 3.70, allergens: ['gluten', 'lacteos', 'soja'] },
      { name: "Sándwich Mixto", price: 3.20, allergens: ['gluten', 'lacteos', 'soja'] },
    ],
    hamburguesas: [
      { name: "Hamburguesa Simple", price: 3.00, allergens: ['gluten'] },
      { name: "Hamburguesa con Queso", price: 3.50, allergens: ['gluten', 'lacteos'] },
      { name: "Hamburguesa Queso y Bacon", price: 4.00, allergens: ['gluten', 'lacteos'] },
      { name: "Hamburguesa Completa", price: 4.70, allergens: ['gluten', 'huevos', 'lacteos', 'soja'] },
      { name: "Hamb. Doble Completa", price: 5.50, allergens: ['gluten', 'huevos', 'lacteos', 'soja'] },
    ],
    extras: [
      { name: "Extra Carne", price: 1.00, allergens: [] },
      { name: "Extra Huevo", price: 0.70, allergens: ['huevos'] },
      { name: "Otros Extras", price: 0.50, allergens: [] },
    ]
  },
  extras: {
    title: "Extras y Otros",
    items: [
      { name: "Caja de pizza / Envases", price: 0.50, allergens: [] },
      { name: "Ketchup / Mayonesa", price: 0.50, allergens: ['huevos', 'mostaza'] },
      { name: "Extra Salsa Nachos", price: 1.00, allergens: ['lacteos'] },
      { name: "Extra Cheddar/BBQ/Jalapeños", price: 1.50, allergens: ['lacteos'] },
      { name: "Extra Perrito", price: 0.50, allergens: ['gluten'] },
      { name: "Extra Huevo Perrito", price: 0.70, allergens: ['huevos'] },
    ]
  }
};

export const REVIEWS = [
  {
    name: "Juan Manuel",
    rating: 5,
    text: "Las mejores pizzas de Rota sin duda. La masa es espectacular y el servicio a domicilio es muy rápido.",
    date: "Hace 2 semanas"
  },
  {
    name: "María García",
    rating: 5,
    text: "Sitio de toda la vida. Las hamburguesas completas son enormes y están riquísimas. Muy recomendado.",
    date: "Hace 1 mes"
  },
  {
    name: "Antonio R.",
    rating: 4,
    text: "Calidad-precio inmejorable. Las patatas con carne y queso son un vicio. Siempre pedimos aquí los fines de semana.",
    date: "Hace 3 meses"
  }
];

export const CONTACT_INFO = {
  phone: "956 84 15 15",
  address: "C/ Higuereta 61, Rota",
  deliveryFee: "2.00€",
  logoUrl: "https://i.postimg.cc/0rg53WGv/Chat-GPT-Image-2-mar-2026-15-59-09.png",
  reviewUrl: "https://share.google/Zb9crJvzEuoIqS75J"
};
