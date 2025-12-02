export const formSteps = [
  {
    name: "Naam",
    description: "Geef een naam aan je boterham",
    field: "sandwichName",
    validation: {
      required: "Naam is verplicht",
      minLength: { value: 3, message: "Naam moet minstens 3 karakters zijn" },
    },
  },
  {
    name: "Brood",
    description: "Begin met het onderste brood",
    field: "bread",
    validation: { required: "Je moet brood toevoegen om te beginnen" },
  },
  {
    name: "Beleg",
    description: "Kies je favoriete toppings",
    field: "toppings",
    validation: {},
  },
  {
    name: "Top",
    description: "Maak het af met de bovenkant",
    field: "topBread",
    validation: { required: "Vergeet het bovenste broodje niet!" },
  },
  {
    name: "Klaar",
    description: "De laatste touch",
    field: "fork",
    validation: {},
  },
];
