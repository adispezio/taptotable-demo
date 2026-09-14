import { DetailedRecipe } from "../components/RecipeDetail";

import imgChocolateLavaCake from "../../assets/cb55031f2089079f68b33dcda4f5b353db466aea.png";
import imgMisoRamen from "../../assets/236c767b2913fbe1636ce510bf0131267181f25f.png";
import imgRibeyeSteak from "../../assets/596a7cf6b2d07fe1f7a54d4ca55d5736eac81c89.png";

export const RECIPES: DetailedRecipe[] = [
  // Original Mock Recipes
  {
    id: "1",
    title: "Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjM5NzgyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "15 min",
    calories: 420,
    matchScore: 98,
    tags: ["Vegan", "GF"],
    description: "A vibrant, nutrient-packed bowl featuring fluffy quinoa, crisp vegetables, and a creamy avocado dressing. Perfect for a quick lunch or light dinner.",
    ingredients: [
      { item: "Quinoa", amount: "1 cup" },
      { item: "Avocado", amount: "1 whole" },
      { item: "Cherry Tomatoes", amount: "1/2 cup" },
      { item: "Cucumber", amount: "1/2 medium" },
      { item: "Spinach", amount: "2 cups" },
      { item: "Lemon Juice", amount: "2 tbsp" }
    ],
    instructions: [
      "Rinse quinoa thoroughly and cook according to package instructions.",
      "While quinoa cooks, chop cucumber, tomatoes, and spinach.",
      "Blend avocado, lemon juice, and a splash of water to make the dressing.",
      "Combine cooked quinoa with vegetables in a large bowl.",
      "Drizzle with dressing and toss to combine. Serve immediately."
    ],
    servings: 2,
    difficulty: "Easy"
  },
  {
    id: "2",
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjQwMzU3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 550,
    matchScore: 92,
    tags: ["High Protein", "Keto"],
    description: "Fresh Atlantic salmon fillets grilled to perfection, served alongside crisp tender asparagus spears. A heart-healthy dinner rich in Omega-3s.",
    ingredients: [
      { item: "Salmon Fillet", amount: "2 (6oz)" },
      { item: "Asparagus", amount: "1 bunch" },
      { item: "Olive Oil", amount: "2 tbsp" },
      { item: "Lemon", amount: "1 whole" },
      { item: "Garlic Powder", amount: "1 tsp" },
      { item: "Salt & Pepper", amount: "to taste" }
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "Season salmon and asparagus with olive oil, garlic powder, salt, and pepper.",
      "Place salmon on grill skin-side down. Cook for 6-8 minutes without flipping.",
      "Add asparagus to grill and cook for 4-5 minutes, turning occasionally.",
      "Serve salmon with grilled asparagus and fresh lemon wedges."
    ],
    servings: 2,
    difficulty: "Medium"
  },
  {
    id: "3",
    title: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3R8ZW58MXx8fHwxNzYzOTI1NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "10 min",
    calories: 310,
    matchScore: 85,
    tags: ["Breakfast", "Vegetarian"],
    description: "The classic brunch staple. Crispy sourdough topped with creamy mashed avocado, chili flakes, and microgreens.",
    ingredients: [
      { item: "Sourdough Bread", amount: "2 slices" },
      { item: "Avocado", amount: "1 large" },
      { item: "Red Chili Flakes", amount: "1 pinch" },
      { item: "Sea Salt", amount: "to taste" },
      { item: "Olive Oil", amount: "drizzle" },
      { item: "Microgreens", amount: "garnish" }
    ],
    instructions: [
      "Toast sourdough slices until golden brown and crispy.",
      "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
      "Mash avocado with a fork, adding salt to taste.",
      "Spread mashed avocado generously over toasted bread.",
      "Top with chili flakes, a drizzle of olive oil, and microgreens."
    ],
    servings: 1,
    difficulty: "Easy"
  },
  {
    id: "4",
    title: "Pasta Salad",
    image: "https://images.unsplash.com/photo-1635318346822-e67d53e84039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHNhbGFkJTIwcGFzdGElMjBzbW9vdGhpZSUyMGdyaWxsZWQlMjBjaGlja2VufGVufDF8fHx8MTc2NDAzNTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 480,
    matchScore: 75,
    tags: ["Vegetarian"],
    description: "A refreshing pasta salad loaded with feta, olives, cucumbers, and tomatoes, tossed in a zesty vinaigrette.",
    ingredients: [
      { item: "Fusilli Pasta", amount: "8 oz" },
      { item: "Feta Cheese", amount: "1/2 cup" },
      { item: "Kalamata Olives", amount: "1/3 cup" },
      { item: "Cherry Tomatoes", amount: "1 cup" },
      { item: "Red Onion", amount: "1/4 cup" },
      { item: "Italian Dressing", amount: "1/3 cup" }
    ],
    instructions: [
      "Boil pasta in salted water until al dente. Drain and rinse with cold water.",
      "Chop tomatoes, cucumber, and red onion.",
      "In a large bowl, combine pasta, chopped vegetables, olives, and feta.",
      "Pour dressing over the salad and toss to coat evenly.",
      "Chill for at least 30 minutes before serving for best flavor."
    ],
    servings: 4,
    difficulty: "Easy"
  },

  // New Recipes
  {
    id: "5",
    title: "Soba Bowl",
    image: "https://images.unsplash.com/photo-1672303185512-399a42b2cf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXNvJTIwR2luZ2VyJTIwU29iYSUyMEJvd2x8ZW58MXx8fHwxNzY0MDQ4MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 420,
    difficulty: "Easy",
    description: "Buckwheat soba tossed with crisp veggies in a bright miso-ginger dressing.",
    tags: ["Vegan", "High Fiber"],
    ingredients: [
      { amount: "8 oz", item: "soba noodles" },
      { amount: "1 cup", item: "shredded carrots" },
      { amount: "1 cup", item: "sliced cucumber" },
      { amount: "1 cup", item: "edamame (cooked)" },
      { amount: "2 tbsp", item: "white miso" },
      { amount: "1 tbsp", item: "grated ginger" },
      { amount: "2 tbsp", item: "rice vinegar" },
      { amount: "1 tbsp", item: "sesame oil" },
      { amount: "1 tsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "toasted sesame seeds" }
    ],
    instructions: [
      "Cook soba per package and rinse cold",
      "Whisk miso, ginger, vinegar, sesame oil, and soy",
      "Toss noodles with carrots, cucumber, and edamame",
      "Add dressing and combine",
      "Top with sesame seeds and serve."
    ],
    servings: 2,
    matchScore: 88
  },
  {
    id: "6",
    title: "Chicken Tacos",
    image: "https://images.unsplash.com/photo-1711989874705-bb85dc205541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGlja2VuJTIwVGluZ2ElMjBUYWNvc3xlbnwxfHx8fDE3NjQwNDgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 510,
    difficulty: "Medium",
    description: "Shredded chicken simmered in smoky chipotle-tomato sauce served in warm tortillas.",
    tags: ["High Protein"],
    ingredients: [
      { amount: "1 lb", item: "cooked shredded chicken" },
      { amount: "1 tbsp", item: "oil" },
      { amount: "1 small", item: "onion (sliced)" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1", item: "chipotle in adobo (minced) + 1 tsp sauce" },
      { amount: "1 cup", item: "crushed tomatoes" },
      { amount: "1/2 tsp", item: "oregano" },
      { amount: "8", item: "corn tortillas" },
      { amount: "1/2 cup", item: "crumbled queso fresco" },
      { amount: "1/2 cup", item: "chopped cilantro" },
      { amount: "1", item: "lime (wedges)" }
    ],
    instructions: [
      "Sauté onion in oil until soft",
      "Add garlic and chipotle, cook 30 sec",
      "Stir in tomatoes and oregano, simmer 5 min",
      "Add chicken and simmer until saucy",
      "Warm tortillas",
      "Fill with tinga and top with queso and cilantro",
      "Serve with lime."
    ],
    servings: 2,
    matchScore: 85
  },
  {
    id: "7",
    title: "Basil Gnocchi",
    image: "https://images.unsplash.com/photo-1744835896651-93493e7d2ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDcmVhbXklMjBUb21hdG8lMjBCYXNpbCUyMEdub2NjaGl8ZW58MXx8fHwxNzY0MDQ4MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 560,
    difficulty: "Easy",
    description: "Pillowy gnocchi in a creamy tomato-basil sauce.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "16 oz", item: "potato gnocchi" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 cup", item: "tomato puree" },
      { amount: "1/2 cup", item: "heavy cream" },
      { amount: "1/4 tsp", item: "red pepper flakes" },
      { amount: "1/4 cup", item: "grated parmesan" },
      { amount: "1/4 cup", item: "fresh basil (torn)" },
      { amount: "", item: "Salt to taste" }
    ],
    instructions: [
      "Boil gnocchi until they float",
      "Sauté garlic in oil",
      "Add tomato puree and flakes, simmer 5 min",
      "Stir in cream and parmesan",
      "Fold in gnocchi and basil",
      "Season and serve."
    ],
    servings: 2,
    matchScore: 90
  },
  {
    id: "8",
    title: "Shrimp Orzo",
    image: "https://images.unsplash.com/photo-1603894483228-9a3d10c32390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYXJsaWMlMjBCdXR0ZXIlMjBTaHJpbXAlMjBPcnpvfGVufDF8fHx8MTc2NDA0ODE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 590,
    difficulty: "Medium",
    description: "Juicy shrimp and orzo cooked risotto-style in garlic butter and lemon.",
    tags: ["High Protein"],
    ingredients: [
      { amount: "1 lb", item: "shrimp (peeled)" },
      { amount: "2 tbsp", item: "butter" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "4 cloves", item: "garlic (minced)" },
      { amount: "1 cup", item: "orzo" },
      { amount: "2 cups", item: "chicken broth" },
      { amount: "1", item: "lemon (zest and juice)" },
      { amount: "1/4 cup", item: "parsley (chopped)" },
      { amount: "", item: "Salt and pepper" }
    ],
    instructions: [
      "Sear shrimp in butter/oil 1–2 min per side, remove",
      "Sauté garlic",
      "Add orzo and toast 1 min",
      "Add broth and simmer until tender",
      "Stir in lemon zest/juice",
      "Return shrimp and parsley",
      "Season and serve."
    ],
    servings: 2,
    matchScore: 95
  },
  {
    id: "9",
    title: "Chickpea Stew",
    image: "https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGljeSUyMENoaWNrcGVhJTIwUXVpbm9hJTIwU3Rld3xlbnwxfHx8fDE3NjQwNDgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 430,
    difficulty: "Easy",
    description: "Hearty stew of chickpeas, quinoa, tomatoes, and spinach with warm spices.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 small", item: "onion (diced)" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 tsp", item: "cumin" },
      { amount: "1/2 tsp", item: "smoked paprika" },
      { amount: "1/4 tsp", item: "chili flakes" },
      { amount: "1 can", item: "chickpeas (drained)" },
      { amount: "1/2 cup", item: "quinoa (rinsed)" },
      { amount: "2 cups", item: "vegetable broth" },
      { amount: "1 cup", item: "diced tomatoes" },
      { amount: "2 cups", item: "baby spinach" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Sauté onion in oil",
      "Add garlic and spices",
      "Stir in chickpeas, quinoa, broth, and tomatoes",
      "Simmer 18–20 min until quinoa is tender",
      "Fold in spinach to wilt",
      "Season and serve."
    ],
    servings: 2,
    matchScore: 80
  },
  {
    id: "10",
    title: "Teriyaki Salmon",
    image: "https://images.unsplash.com/photo-1685079258536-06d8253e862c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXJpeWFraSUyMFNhbG1vbiUyMFJpY2UlMjBCb3dsfGVufDF8fHx8MTc2NDA0ODE1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 540,
    difficulty: "Medium",
    description: "Oven-broiled salmon glazed with homemade teriyaki over steamed rice and broccoli.",
    tags: ["High Protein"],
    ingredients: [
      { amount: "2", item: "salmon fillets (6 oz each)" },
      { amount: "2 cups", item: "cooked rice" },
      { amount: "2 cups", item: "broccoli florets" },
      { amount: "2 tbsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "mirin" },
      { amount: "1 tbsp", item: "brown sugar" },
      { amount: "1 tsp", item: "grated ginger" },
      { amount: "1 tsp", item: "cornstarch + 2 tsp water" },
      { amount: "1 tsp", item: "sesame seeds" }
    ],
    instructions: [
      "Steam or microwave broccoli until crisp-tender",
      "Whisk soy, mirin, sugar, ginger",
      "Broil salmon 6–8 min, brushing with sauce",
      "Thicken remaining sauce with cornstarch slurry",
      "Serve salmon over rice with broccoli",
      "Drizzle sauce and sprinkle sesame."
    ],
    servings: 2,
    matchScore: 92
  },
  {
    id: "11",
    title: "Pesto Pasta",
    image: "https://images.unsplash.com/photo-1574636573716-062c8c8c6179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb2FzdGVkJTIwVmVnZ2llJTIwUGVzdG8lMjBQYXN0YXxlbnwxfHx8fDE3NjQwNDgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 520,
    difficulty: "Easy",
    description: "Oven-roasted zucchini and cherry tomatoes tossed with pesto and pasta.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "12 oz", item: "short pasta" },
      { amount: "1", item: "zucchini (cubed)" },
      { amount: "1 cup", item: "cherry tomatoes" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1/2 tsp", item: "salt" },
      { amount: "1/3 cup", item: "basil pesto" },
      { amount: "2 tbsp", item: "grated parmesan" }
    ],
    instructions: [
      "Roast zucchini and tomatoes with oil/salt at 425°F for 15 min",
      "Boil pasta and reserve 1/4 cup water",
      "Toss pasta with pesto, veg, and splash of cooking water",
      "Top with parmesan."
    ],
    servings: 2,
    matchScore: 78
  },
  {
    id: "12",
    title: "Beef Stir-Fry",
    image: "https://images.unsplash.com/photo-1760504526069-ff0f8bf6e4ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWVmJTIwJTI2JTIwQnJvY2NvbGklMjBTdGlyLUZyeXxlbnwxfHx8fDE3NjQwNDgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 600,
    difficulty: "Medium",
    description: "Classic takeout stir-fry with tender beef and crisp broccoli in savory sauce.",
    tags: ["High Protein"],
    ingredients: [
      { amount: "12 oz", item: "flank steak (sliced thin)" },
      { amount: "2 cups", item: "broccoli florets" },
      { amount: "2 tbsp", item: "oil" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 tsp", item: "grated ginger" },
      { amount: "2 tbsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "oyster sauce" },
      { amount: "1 tsp", item: "cornstarch + 2 tsp water" },
      { amount: "2 cups", item: "cooked rice" }
    ],
    instructions: [
      "Stir-fry beef in hot oil and remove",
      "Stir-fry broccoli 2–3 min",
      "Add garlic/ginger",
      "Return beef",
      "Add soy, oyster, and cornstarch slurry",
      "Toss to coat",
      "Serve with rice."
    ],
    servings: 2,
    matchScore: 87
  },
  {
    id: "13",
    title: "Roasted Chicken",
    image: "https://images.unsplash.com/photo-1717769071502-e9b5d06c5fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZW1vbiUyMEhlcmIlMjBSb2FzdGVkJTIwQ2hpY2tlbiUyMFRoaWdoc3xlbnwxfHx8fDE3NjQwNDgxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "40 min",
    calories: 620,
    difficulty: "Medium",
    description: "Crispy roasted thighs with lemon, garlic, and herbs.",
    tags: ["High Protein", "Gluten-Free"],
    ingredients: [
      { amount: "6", item: "bone-in chicken thighs" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1", item: "lemon (slices)" },
      { amount: "4 cloves", item: "garlic (smashed)" },
      { amount: "1 tsp", item: "dried oregano" },
      { amount: "1 tsp", item: "thyme" },
      { amount: "1/2 tsp", item: "salt" },
      { amount: "1/4 tsp", item: "pepper" }
    ],
    instructions: [
      "Toss thighs with oil, herbs, salt, and pepper",
      "Arrange with lemon and garlic on sheet pan",
      "Roast at 425°F for 35–40 min until 175°F",
      "Rest and serve."
    ],
    servings: 3,
    matchScore: 91
  },
  {
    id: "14",
    title: "Noodle Salad",
    image: "https://images.unsplash.com/photo-1580212206172-dbea2d1b64dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpJTIwUGVhbnV0JTIwTm9vZGxlJTIwU2FsYWR8ZW58MXx8fHwxNzY0MDQ4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 560,
    difficulty: "Easy",
    description: "Cold rice noodles with crunchy veggies and creamy peanut-lime dressing.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "8 oz", item: "rice noodles" },
      { amount: "1 cup", item: "shredded cabbage" },
      { amount: "1", item: "red bell pepper (sliced)" },
      { amount: "2", item: "carrots (ribboned)" },
      { amount: "1/4 cup", item: "chopped peanuts" },
      { amount: "1/4 cup", item: "cilantro" },
      { amount: "1/4 cup", item: "peanut butter" },
      { amount: "2 tbsp", item: "lime juice" },
      { amount: "1 tbsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "honey" },
      { amount: "1 tsp", item: "grated ginger" },
      { amount: "", item: "Water to thin" }
    ],
    instructions: [
      "Cook and rinse noodles cold",
      "Whisk peanut butter, lime, soy, honey, ginger, adding water to loosen",
      "Toss noodles with veggies and dressing",
      "Top with peanuts and cilantro."
    ],
    servings: 2,
    matchScore: 85
  },
  {
    id: "15",
    title: "Tuscan Beans",
    image: "https://images.unsplash.com/photo-1730766451299-9c019b78562d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPbmUtUG90JTIwQ3JlYW15JTIwVHVzY2FuJTIwQmVhbnN8ZW58MXx8fHwxNzY0MDQ4MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 420,
    difficulty: "Easy",
    description: "Cannellini beans simmered with tomatoes, garlic, and spinach in silky coconut cream.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "3 cloves", item: "garlic (sliced)" },
      { amount: "1/2 tsp", item: "chili flakes" },
      { amount: "1 can", item: "diced tomatoes" },
      { amount: "2 cans", item: "cannellini beans (drained)" },
      { amount: "1/2 cup", item: "coconut milk" },
      { amount: "2 cups", item: "baby spinach" },
      { amount: "", item: "Salt and pepper" },
      { amount: "", item: "Lemon wedge" }
    ],
    instructions: [
      "Warm oil and garlic with flakes",
      "Add tomatoes and simmer 5 min",
      "Add beans and coconut milk, simmer 8 min",
      "Fold in spinach",
      "Season and finish with lemon."
    ],
    servings: 2,
    matchScore: 83
  },
  {
    id: "16",
    title: "Gyro Bowls",
    image: "https://images.unsplash.com/photo-1633984927681-52b4e54f40ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHcmVlayUyMENoaWNrZW4lMjBHeXJvJTIwQm93bHN8ZW58MXx8fHwxNzY0MDQ4MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 570,
    difficulty: "Medium",
    description: "Marinated chicken with lemony rice, cucumber-tomato salad, and quick tzatziki.",
    tags: ["High Protein"],
    ingredients: [
      { amount: "1 lb", item: "chicken breast (cubed)" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1", item: "lemon (juice)" },
      { amount: "2 tsp", item: "oregano" },
      { amount: "2 cups", item: "cooked rice" },
      { amount: "1 cup", item: "diced cucumber" },
      { amount: "1 cup", item: "diced tomato" },
      { amount: "1/2 cup", item: "plain yogurt" },
      { amount: "1 small", item: "garlic clove (minced)" },
      { amount: "1/2 cup", item: "chopped dill" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Marinate chicken in oil, lemon, oregano 15 min",
      "Sauté until cooked",
      "Mix cucumber/tomato with pinch salt",
      "Stir yogurt, garlic, dill for tzatziki",
      "Serve chicken over rice with salad and sauce."
    ],
    servings: 2,
    matchScore: 96
  },
  {
    id: "17",
    title: "Squash Risotto",
    image: "https://images.unsplash.com/photo-1736752346246-61f4daedfde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR0ZXJudXQlMjBTcXVhc2glMjBSaXNvdHRvfGVufDF8fHx8MTc2NDA0ODE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "35 min",
    calories: 640,
    difficulty: "Medium",
    description: "Creamy risotto with roasted butternut squash and sage.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "3 cups", item: "butternut squash (cubed)" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1 tsp", item: "salt" },
      { amount: "1 cup", item: "arborio rice" },
      { amount: "1 small", item: "onion (diced)" },
      { amount: "1/2 cup", item: "white wine" },
      { amount: "4 cups", item: "warm vegetable broth" },
      { amount: "2 tbsp", item: "butter" },
      { amount: "1/4 cup", item: "grated parmesan" },
      { amount: "6", item: "sage leaves (chopped)" }
    ],
    instructions: [
      "Roast squash at 425°F with oil/salt 20 min",
      "Sauté onion and rice 2 min",
      "Deglaze with wine",
      "Add broth gradually, stirring until creamy",
      "Fold in squash, butter, parmesan, and sage."
    ],
    servings: 2,
    matchScore: 89
  },
  {
    id: "18",
    title: "Bean Tacos",
    image: "https://images.unsplash.com/photo-1668723855603-16cd6e2ff987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbGFjayUyMEJlYW4lMjBTd2VldCUyMFBvdGF0byUyMFRhY29zfGVufDF8fHx8MTc2NDA0ODE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 480,
    difficulty: "Easy",
    description: "Roasted sweet potato and smoky black beans in warm corn tortillas.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "2 cups", item: "sweet potato (cubed)" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tsp", item: "chili powder" },
      { amount: "1/2 tsp", item: "cumin" },
      { amount: "1 can", item: "black beans (rinsed)" },
      { amount: "8", item: "corn tortillas" },
      { amount: "1/2 cup", item: "salsa" },
      { amount: "1", item: "avocado (sliced)" },
      { amount: "", item: "Lime wedges" }
    ],
    instructions: [
      "Roast sweet potato with oil and spices at 425°F for 18 min",
      "Warm beans",
      "Heat tortillas",
      "Fill with sweet potato and beans",
      "Top with salsa and avocado",
      "Serve with lime."
    ],
    servings: 2,
    matchScore: 93
  },
  {
    id: "19",
    title: "Lentil Salad",
    image: "https://images.unsplash.com/photo-1636044992970-f6efe88ab1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZXJiZWQlMjBMZW50aWwlMjBTYWxhZCUyMHdpdGglMjBGZXRhfGVufDF8fHx8MTc2NDA0ODE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 410,
    difficulty: "Easy",
    description: "Zesty green lentil salad with cucumbers, herbs, and feta.",
    tags: ["Vegetarian", "High Fiber"],
    ingredients: [
      { amount: "2 cups", item: "cooked green lentils" },
      { amount: "1 cup", item: "diced cucumber" },
      { amount: "1/2 cup", item: "cherry tomatoes (halved)" },
      { amount: "1/4 cup", item: "red onion (minced)" },
      { amount: "1/4 cup", item: "parsley (chopped)" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "1 tbsp", item: "red wine vinegar" },
      { amount: "1 tsp", item: "Dijon" },
      { amount: "1/3 cup", item: "crumbled feta" },
      { amount: "", item: "Salt and pepper" }
    ],
    instructions: [
      "Whisk oil, vinegar, Dijon, salt, pepper",
      "Toss lentils with veg and herbs",
      "Add dressing and feta",
      "Chill or serve at room temp."
    ],
    servings: 2,
    matchScore: 84
  },
  {
    id: "20",
    title: "Roasted Cod",
    image: "https://images.unsplash.com/photo-1512072404163-f1f2c8148ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGVldC1QYW4lMjBMZW1vbiUyMEdhcmxpYyUyMENvZHxlbnwxfHx8fDE3NjQwNDgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "22 min",
    calories: 420,
    difficulty: "Easy",
    description: "Flaky cod roasted with potatoes, green beans, lemon, and garlic.",
    tags: ["High Protein", "Gluten-Free"],
    ingredients: [
      { amount: "4", item: "cod fillets (5 oz)" },
      { amount: "10 oz", item: "baby potatoes (halved)" },
      { amount: "2 cups", item: "green beans" },
      { amount: "3 tbsp", item: "olive oil" },
      { amount: "3 cloves", item: "garlic (minced)" },
      { amount: "1", item: "lemon (slices)" },
      { amount: "1 tsp", item: "paprika" },
      { amount: "", item: "Salt and pepper" }
    ],
    instructions: [
      "Toss potatoes/beans with 2 tbsp oil, half garlic, paprika, salt",
      "Roast at 425°F for 12 min",
      "Add cod brushed with remaining oil/garlic",
      "Top with lemon",
      "Roast 8–10 min until flaky",
      "Serve."
    ],
    servings: 2,
    matchScore: 94
  },
  {
    id: "21",
    title: "Stuffed Chicken",
    image: "https://images.unsplash.com/photo-1712959542428-af7592cdbdcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXByZXNlJTIwU3R1ZmZlZCUyMENoaWNrZW58ZW58MXx8fHwxNzY0MDQ4MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 580,
    difficulty: "Medium",
    description: "Chicken breasts stuffed with mozzarella, tomato, and basil, baked until juicy.",
    tags: ["High Protein", "Gluten-Free"],
    ingredients: [
      { amount: "4", item: "chicken breasts" },
      { amount: "4 oz", item: "fresh mozzarella (sliced)" },
      { amount: "1", item: "tomato (sliced)" },
      { amount: "8", item: "basil leaves" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tsp", item: "Italian seasoning" },
      { amount: "", item: "Salt and pepper" },
      { amount: "", item: "Balsamic glaze (optional)" }
    ],
    instructions: [
      "Cut pocket in chicken",
      "Stuff with mozzarella, tomato, basil",
      "Brush with oil and season",
      "Bake at 400°F for 22–25 min",
      "Rest and drizzle balsamic if desired."
    ],
    servings: 2,
    matchScore: 90
  },
  {
    id: "22",
    title: "Cauliflower Curry",
    image: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDdXJyaWVkJTIwQ2F1bGlmbG93ZXIlMjAlMjYlMjBQZWElMjBTa2lsbGV0fGVufDF8fHx8MTc2NDA0ODE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 390,
    difficulty: "Easy",
    description: "Golden cauliflower and peas in a mild coconut curry.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "1 tbsp", item: "oil" },
      { amount: "1", item: "onion (sliced)" },
      { amount: "2 tsp", item: "curry powder" },
      { amount: "1/2 tsp", item: "turmeric" },
      { amount: "1 head", item: "cauliflower (florets)" },
      { amount: "1 can", item: "coconut milk" },
      { amount: "1 cup", item: "frozen peas" },
      { amount: "", item: "Salt" },
      { amount: "", item: "Cilantro for garnish" }
    ],
    instructions: [
      "Sauté onion in oil",
      "Add spices and toast",
      "Stir in cauliflower and coconut milk",
      "Simmer 12–15 min until tender",
      "Add peas to warm",
      "Season and garnish."
    ],
    servings: 2,
    matchScore: 79
  },
  {
    id: "23",
    title: "Turkey Bolognese",
    image: "https://images.unsplash.com/photo-1630563775062-bbaf8ad3d73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJrZXklMjBCb2xvZ25lc2UlMjB3aXRoJTIwWnVjY2hpbmklMjBOb29kbGVzfGVufDF8fHx8MTc2NDA0ODE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "35 min",
    calories: 510,
    difficulty: "Medium",
    description: "Lean turkey bolognese spooned over sautéed zucchini noodles.",
    tags: ["High Protein", "Low Carb", "Keto"],
    ingredients: [
      { amount: "1 lb", item: "ground turkey" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 small", item: "onion (diced)" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 cup", item: "crushed tomatoes" },
      { amount: "1/2 cup", item: "tomato sauce" },
      { amount: "1 tsp", item: "Italian seasoning" },
      { amount: "4 medium", item: "zucchini (spiralized)" },
      { amount: "", item: "Salt and pepper" },
      { amount: "2 tbsp", item: "grated parmesan" }
    ],
    instructions: [
      "Brown turkey in oil",
      "Add onion and garlic",
      "Stir in tomatoes, sauce, seasoning",
      "Simmer 15 min",
      "Sauté zucchini noodles 2–3 min",
      "Serve sauce over zoodles",
      "Top with parmesan."
    ],
    servings: 2,
    matchScore: 88
  },
  {
    id: "24",
    title: "Spanish Stew",
    image: "https://images.unsplash.com/photo-1737210235283-7675f83efc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGFuaXNoJTIwQ2hpY2twZWElMjBTcGluYWNoJTIwU3Rld3xlbnwxfHx8fDE3NjQwNDgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 400,
    difficulty: "Easy",
    description: "Smoky paprika chickpeas with wilted spinach and tomatoes.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "3 cloves", item: "garlic (sliced)" },
      { amount: "1 tsp", item: "smoked paprika" },
      { amount: "1/4 tsp", item: "cumin" },
      { amount: "1 can", item: "chickpeas (drained)" },
      { amount: "1 cup", item: "crushed tomatoes" },
      { amount: "2 cups", item: "spinach" },
      { amount: "", item: "Salt" },
      { amount: "", item: "Lemon wedge" }
    ],
    instructions: [
      "Warm oil and sauté garlic",
      "Add paprika and cumin",
      "Stir in chickpeas and tomatoes",
      "Simmer 10 min",
      "Fold in spinach",
      "Season and finish with lemon."
    ],
    servings: 2,
    matchScore: 81
  },
  {
    id: "25",
    title: "Kimchi Rice",
    image: "https://images.unsplash.com/photo-1652265541147-560e6464aaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaW1jaGklMjBGcmllZCUyMFJpY2UlMjB3aXRoJTIwRWdnfGVufDF8fHx8MTc2NDA0ODE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "18 min",
    calories: 520,
    difficulty: "Easy",
    description: "Crispy fried rice with kimchi, scallions, and a jammy fried egg.",
    tags: ["Vegetarian (contains egg)"],
    ingredients: [
      { amount: "2 cups", item: "day-old cooked rice" },
      { amount: "1 cup", item: "chopped kimchi" },
      { amount: "2 tsp", item: "kimchi juice" },
      { amount: "1 tbsp", item: "oil" },
      { amount: "2", item: "scallions (sliced)" },
      { amount: "1 tbsp", item: "soy sauce" },
      { amount: "1 tsp", item: "sesame oil" },
      { amount: "2", item: "eggs" },
      { amount: "", item: "Sesame seeds" }
    ],
    instructions: [
      "Heat oil and fry kimchi 2 min",
      "Add rice and kimchi juice",
      "Stir in soy and sesame oil",
      "Push aside and fry eggs sunny-side",
      "Top rice with eggs, scallions, sesame."
    ],
    servings: 2,
    matchScore: 89
  },
  {
    id: "26",
    title: "Stuffed Peppers",
    image: "https://images.unsplash.com/photo-1741518165765-af1c27e6795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGluYWNoJTIwJTI2JTIwRmV0YSUyMFN0dWZmZWQlMjBQZXBwZXJzfGVufDF8fHx8MTc2NDA0ODE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 460,
    difficulty: "Easy",
    description: "Bell peppers stuffed with herbed rice, spinach, and feta.",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: [
      { amount: "4", item: "bell peppers (halved)" },
      { amount: "2 cups", item: "cooked rice" },
      { amount: "2 cups", item: "spinach (chopped)" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tsp", item: "oregano" },
      { amount: "1/2 cup", item: "feta (crumbled)" },
      { amount: "1/2 tsp", item: "salt" },
      { amount: "1/4 tsp", item: "pepper" }
    ],
    instructions: [
      "Sauté spinach in oil",
      "Mix with rice, oregano, feta, salt, pepper",
      "Fill peppers",
      "Bake at 400°F for 20–22 min until tender."
    ],
    servings: 2,
    matchScore: 84
  },
  {
    id: "27",
    title: "Jackfruit Sandwich",
    image: "https://images.unsplash.com/photo-1633821773816-0d50391e7b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCQlElMjBQdWxsZWQlMjBKYWNrZnJ1aXQlMjBTYW5kd2ljaGVzfGVufDF8fHx8MTc2NDA0ODE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 520,
    difficulty: "Easy",
    description: "Shredded jackfruit simmered in smoky BBQ sauce piled onto toasted buns with slaw.",
    tags: ["Vegan"],
    ingredients: [
      { amount: "2 cans", item: "young jackfruit (drained, shredded)" },
      { amount: "1 tbsp", item: "oil" },
      { amount: "1/2", item: "onion (sliced)" },
      { amount: "1 cup", item: "BBQ sauce" },
      { amount: "4", item: "burger buns" },
      { amount: "1 cup", item: "coleslaw mix" },
      { amount: "2 tbsp", item: "mayo (vegan or regular)" },
      { amount: "1 tsp", item: "apple cider vinegar" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Sauté onion in oil",
      "Add jackfruit and cook 3–4 min",
      "Stir in BBQ sauce and simmer 10 min",
      "Mix slaw with mayo, vinegar, salt",
      "Toast buns",
      "Assemble sandwiches with jackfruit and slaw."
    ],
    servings: 2,
    matchScore: 86
  },
  {
    id: "28",
    title: "Feta Shakshuka",
    image: "https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFrc2h1a2ElMjB3aXRoJTIwRmV0YXxlbnwxfHx8fDE3NjQwNDgxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 430,
    difficulty: "Easy",
    description: "Eggs poached in spiced tomato-pepper sauce topped with feta and herbs.",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: [
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 small", item: "onion (diced)" },
      { amount: "1", item: "red bell pepper (diced)" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 tsp", item: "cumin" },
      { amount: "1/2 tsp", item: "paprika" },
      { amount: "1 can", item: "crushed tomatoes" },
      { amount: "4–6", item: "eggs" },
      { amount: "1/3 cup", item: "feta" },
      { amount: "", item: "Parsley" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Sauté onion/pepper in oil",
      "Add garlic and spices",
      "Stir in tomatoes and simmer 8 min",
      "Make wells and crack in eggs",
      "Cover and cook to desired doneness",
      "Top with feta and parsley."
    ],
    servings: 2,
    matchScore: 91
  },
  {
    id: "29",
    title: "Lettuce Wraps",
    image: "https://images.unsplash.com/photo-1747445666172-7f47b2776ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZXNhbWUlMjBUb2Z1JTIwTGV0dHVjZSUyMFdyYXBzfGVufDF8fHx8MTc2NDA0ODE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "22 min",
    calories: 390,
    difficulty: "Easy",
    description: "Crispy tofu tossed in sesame-soy glaze tucked into lettuce cups with crunchy veg.",
    tags: ["Vegan", "Low Carb"],
    ingredients: [
      { amount: "14 oz", item: "firm tofu (pressed, cubed)" },
      { amount: "2 tbsp", item: "cornstarch" },
      { amount: "2 tbsp", item: "oil" },
      { amount: "2 tbsp", item: "soy sauce" },
      { amount: "1 tbsp", item: "maple syrup" },
      { amount: "1 tsp", item: "rice vinegar" },
      { amount: "1 tsp", item: "sesame oil" },
      { amount: "1", item: "carrot (julienned)" },
      { amount: "1", item: "cucumber (matchsticks)" },
      { amount: "10", item: "lettuce leaves" },
      { amount: "", item: "Sesame seeds" }
    ],
    instructions: [
      "Toss tofu with cornstarch",
      "Pan-fry in oil until crisp",
      "Whisk soy, maple, vinegar, sesame",
      "Toss tofu in glaze",
      "Fill lettuce with tofu, carrot, cucumber",
      "Sprinkle sesame."
    ],
    servings: 2,
    matchScore: 82
  },
  {
    id: "30",
    title: "Tomato Soup",
    image: "https://images.unsplash.com/photo-1763261790435-c0ea9b185fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb2FzdGVkJTIwVG9tYXRvJTIwQmFzaWwlMjBTb3VwJTIwd2l0aCUyMEdyaWxsZWQlMjBDaGVlc2V8ZW58MXx8fHwxNzY0MDQ4MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 650,
    difficulty: "Easy",
    description: "Creamy roasted tomato soup served with classic grilled cheese for dipping.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "2 lbs", item: "Roma tomatoes (halved)" },
      { amount: "1", item: "onion (wedges)" },
      { amount: "4 cloves", item: "garlic" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "2 cups", item: "vegetable broth" },
      { amount: "1/4 cup", item: "basil leaves" },
      { amount: "", item: "Salt and pepper" },
      { amount: "4 slices", item: "bread" },
      { amount: "4 slices", item: "cheddar" },
      { amount: "2 tbsp", item: "butter" }
    ],
    instructions: [
      "Roast tomatoes/onion/garlic with oil at 425°F for 20 min",
      "Blend with broth and basil",
      "Simmer 5 min and season",
      "Butter bread, grill with cheddar",
      "Serve soup with sandwiches."
    ],
    servings: 2,
    matchScore: 88
  },
  {
    id: "31",
    title: "Grain Bowl",
    image: "https://images.unsplash.com/photo-1582451854057-78add2e8bf37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYXJpc3NhJTIwUm9hc3RlZCUyMENhcnJvdCUyMEdyYWluJTIwQm93bHxlbnwxfHx8fDE3NjQwNDgxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 500,
    difficulty: "Easy",
    description: "Spicy-sweet roasted carrots over farro with lemony yogurt and herbs.",
    tags: ["Vegan"],
    ingredients: [
      { amount: "1 lb", item: "carrots (sliced)" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tbsp", item: "harissa paste" },
      { amount: "2 cups", item: "cooked farro" },
      { amount: "1/2 cup", item: "plain yogurt (or plant-based)" },
      { amount: "1", item: "lemon (zest/juice)" },
      { amount: "1/4 cup", item: "mint (chopped)" },
      { amount: "1/4 cup", item: "pistachios (chopped)" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Toss carrots with oil and harissa",
      "Roast at 425°F for 18–20 min",
      "Mix yogurt with lemon zest/juice and pinch salt",
      "Assemble farro bowls with carrots, yogurt, mint, pistachios."
    ],
    servings: 2,
    matchScore: 84
  },
  {
    id: "32",
    title: "Moroccan Couscous",
    image: "https://images.unsplash.com/photo-1760047550367-3d72fa3053c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMENoaWNrcGVhJTIwQ291c2NvdXN8ZW58MXx8fHwxNzY0MDQ4MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "18 min",
    calories: 450,
    difficulty: "Easy",
    description: "Fluffy couscous with spiced chickpeas, apricots, and almonds.",
    tags: ["Vegan"],
    ingredients: [
      { amount: "1 cup", item: "couscous" },
      { amount: "1 cup", item: "vegetable broth" },
      { amount: "1 tbsp", item: "olive oil" },
      { amount: "1 tsp", item: "ras el hanout (or curry powder)" },
      { amount: "1 can", item: "chickpeas" },
      { amount: "1/4 cup", item: "chopped dried apricots" },
      { amount: "1/4 cup", item: "sliced almonds" },
      { amount: "2 tbsp", item: "parsley" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Pour hot broth over couscous, cover 5 min and fluff",
      "Warm oil with spice",
      "Stir in chickpeas",
      "Combine with couscous, apricots, almonds, parsley",
      "Season and serve."
    ],
    servings: 2,
    matchScore: 78
  },
  {
    id: "33",
    title: "Asparagus Pasta",
    image: "https://images.unsplash.com/photo-1512072404163-f1f2c8148ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYXJsaWMlMjBMZW1vbiUyMEFzcGFyYWd1cyUyMFBhc3RhfGVufDF8fHx8MTc2NDA0ODE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 480,
    difficulty: "Easy",
    description: "Light pasta with tender asparagus, garlic, and lemon-parmesan finish.",
    tags: ["Vegetarian"],
    ingredients: [
      { amount: "12 oz", item: "spaghetti" },
      { amount: "1 bunch", item: "asparagus (cut 1-inch)" },
      { amount: "3 tbsp", item: "olive oil" },
      { amount: "3 cloves", item: "garlic (sliced)" },
      { amount: "1", item: "lemon (zest/juice)" },
      { amount: "1/3 cup", item: "grated parmesan" },
      { amount: "", item: "Salt and pepper" }
    ],
    instructions: [
      "Boil pasta",
      "Add asparagus to pot last 2–3 min",
      "Sauté garlic in oil",
      "Toss pasta/asparagus with oil, lemon zest/juice",
      "Add parmesan",
      "Season and serve."
    ],
    servings: 2,
    matchScore: 87
  },
  {
    id: "34",
    title: "Chopped Salad",
    image: "https://images.unsplash.com/photo-1673238112965-f1e92cdbd8cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCQlElMjBDaGlja2VuJTIwQ2hvcHBlZCUyMFNhbGFkfGVufDF8fHx8MTc2NDA0ODE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 520,
    difficulty: "Easy",
    description: "Crunchy romaine with grilled chicken, corn, black beans, and tangy BBQ-ranch.",
    tags: ["High Protein", "Gluten-Free"],
    ingredients: [
      { amount: "2 cups", item: "chopped romaine" },
      { amount: "1 cup", item: "cooked chicken (diced)" },
      { amount: "1/2 cup", item: "corn" },
      { amount: "1/2 cup", item: "black beans" },
      { amount: "1/2 cup", item: "cherry tomatoes" },
      { amount: "1/4 cup", item: "red onion" },
      { amount: "2 tbsp", item: "BBQ sauce" },
      { amount: "2 tbsp", item: "ranch dressing" },
      { amount: "1 tbsp", item: "cilantro" }
    ],
    instructions: [
      "Whisk BBQ and ranch",
      "Toss romaine with chicken, corn, beans, tomatoes, onion",
      "Drizzle dressing",
      "Sprinkle cilantro and serve."
    ],
    servings: 2,
    matchScore: 91
  },
  {
    id: "35",
    title: "Puttanesca Pasta",
    image: "https://images.unsplash.com/photo-1551631759-96b8377f491c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYXJiYW56byUyMFB1dHRhbmVzY2ElMjBQYXN0YXxlbnwxfHx8fDE3NjQwNDgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 510,
    difficulty: "Medium",
    description: "A briny, spicy pasta with chickpeas, olives, capers, and tomatoes.",
    tags: ["Vegan"],
    ingredients: [
      { amount: "12 oz", item: "spaghetti" },
      { amount: "2 tbsp", item: "olive oil" },
      { amount: "3 cloves", item: "garlic (sliced)" },
      { amount: "1/2 tsp", item: "chili flakes" },
      { amount: "1 can", item: "crushed tomatoes" },
      { amount: "1 cup", item: "cooked chickpeas" },
      { amount: "1/3 cup", item: "sliced olives" },
      { amount: "2 tbsp", item: "capers" },
      { amount: "1/4 cup", item: "parsley" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Cook pasta",
      "Saut�� garlic with flakes in oil",
      "Add tomatoes and simmer",
      "Stir in chickpeas, olives, capers",
      "Toss with pasta",
      "Finish with parsley."
    ],
    servings: 2,
    matchScore: 83
  },
  {
    id: "36",
    title: "Curry Noodles",
    image: "https://images.unsplash.com/photo-1752764181694-8d064a50ca5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHcmVlbiUyMEN1cnJ5JTIwVmVnZ2llJTIwTm9vZGxlc3xlbnwxfHx8fDE3NjQwNDgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 520,
    difficulty: "Easy",
    description: "Coconut green curry tossed with rice noodles and mixed vegetables.",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: [
      { amount: "8 oz", item: "rice noodles" },
      { amount: "1 tbsp", item: "oil" },
      { amount: "2 tbsp", item: "green curry paste" },
      { amount: "1 can", item: "coconut milk" },
      { amount: "1 cup", item: "vegetable broth" },
      { amount: "2 cups", item: "mixed vegetables (bell pepper, snap peas, carrots)" },
      { amount: "1 tbsp", item: "lime juice" },
      { amount: "", item: "Basil leaves" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Cook noodles and rinse",
      "Fry curry paste in oil 30 sec",
      "Add coconut milk and broth, simmer",
      "Add vegetables until tender",
      "Toss with noodles",
      "Finish with lime and basil."
    ],
    servings: 2,
    matchScore: 85
  },
  {
    id: "37",
    title: "Beef Chili",
    image: "https://images.unsplash.com/photo-1602873520153-ec56ca3c205b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQmVlZiUyMENoaWxpfGVufDF8fHx8MTc2NDA0ODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "40 min",
    calories: 650,
    difficulty: "Medium",
    description: "Robust chili with ground beef, beans, tomatoes, and warm spices.",
    tags: ["High Protein", "Gluten-Free"],
    ingredients: [
      { amount: "1 lb", item: "ground beef" },
      { amount: "1 tbsp", item: "oil" },
      { amount: "1", item: "onion (diced)" },
      { amount: "2 cloves", item: "garlic (minced)" },
      { amount: "1 tbsp", item: "chili powder" },
      { amount: "1 tsp", item: "cumin" },
      { amount: "1/2 tsp", item: "smoked paprika" },
      { amount: "1 can", item: "diced tomatoes" },
      { amount: "1 can", item: "kidney beans" },
      { amount: "1 cup", item: "beef broth" },
      { amount: "", item: "Salt" }
    ],
    instructions: [
      "Brown beef in oil",
      "Add onion and garlic",
      "Stir in spices",
      "Add tomatoes, beans, broth",
      "Simmer 25–30 min",
      "Season and serve."
    ],
    servings: 4,
    matchScore: 92
  },
  {
    id: "38",
    title: "Banana Pancakes",
    image: "https://images.unsplash.com/photo-1565288732336-b705b15584d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbHVlYmVycnklMjBPYXQlMjBCYW5hbmElMjBQYW5jYWtlc3xlbnwxfHx8fDE3NjQwNDgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 430,
    difficulty: "Easy",
    description: "Wholesome blender pancakes studded with blueberries.",
    tags: ["Breakfast", "Vegetarian"],
    ingredients: [
      { amount: "1 ripe", item: "banana" },
      { amount: "1 cup", item: "rolled oats" },
      { amount: "1", item: "egg" },
      { amount: "1/2 cup", item: "milk" },
      { amount: "1 tsp", item: "baking powder" },
      { amount: "1 tsp", item: "vanilla" },
      { amount: "1/2 cup", item: "blueberries" },
      { amount: "", item: "Butter or oil for griddle" },
      { amount: "", item: "Maple syrup" }
    ],
    instructions: [
      "Blend banana, oats, egg, milk, baking powder, vanilla",
      "Fold in blueberries",
      "Cook 1/4-cup scoops on greased griddle until bubbles form",
      "Flip to finish",
      "Serve with maple."
    ],
    servings: 2,
    matchScore: 88
  },
  {
    id: "39",
    title: "Thai Noodles",
    image: "https://images.unsplash.com/photo-1661349008073-136bed6e6788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2Z1JTIwUGFkJTIwU2VlJTIwRXd8ZW58MXx8fHwxNzY0MDQ4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 560,
    difficulty: "Medium",
    description: "Wide rice noodles stir-fried with tofu, broccoli, and a savory-sweet soy sauce.",
    tags: ["Vegan"],
    ingredients: [
      { amount: "8 oz", item: "wide rice noodles" },
      { amount: "14 oz", item: "firm tofu (sliced)" },
      { amount: "2 tbsp", item: "oil" },
      { amount: "2 cups", item: "Chinese broccoli (or regular)" },
      { amount: "2 tbsp", item: "dark soy sauce" },
      { amount: "1 tbsp", item: "regular soy" },
      { amount: "1 tbsp", item: "brown sugar" },
      { amount: "1 clove", item: "garlic (minced)" }
    ],
    instructions: [
      "Soak or cook noodles per package",
      "Pan-sear tofu until golden, set aside",
      "Stir-fry garlic and broccoli",
      "Add noodles and sauces with sugar",
      "Toss in tofu",
      "Stir-fry until charred in spots",
      "Serve hot."
    ],
    servings: 2,
    matchScore: 93
  },
  // Trending / Figma-imported recipes
  {
    id: "40",
    title: "Fish Tacos",
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxGaXNoJTIwVGFjb3N8ZW58MXx8fHwxNzcwNDI1OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "30 min",
    calories: 450,
    matchScore: 97,
    tags: ["High Protein", "Fresh"],
    description: "Crispy battered fish wrapped in soft corn tortillas with crunchy slaw, zesty lime crema, and fresh cilantro.",
    ingredients: [
      { item: "White fish fillets", amount: "1 lb" },
      { item: "Corn tortillas", amount: "8" },
      { item: "Cabbage slaw", amount: "2 cups" },
      { item: "Lime", amount: "2" },
      { item: "Sour cream", amount: "1/2 cup" },
      { item: "Flour", amount: "1 cup" },
      { item: "Cilantro", amount: "1/4 cup" },
      { item: "Spices (cumin, chili)", amount: "1 tbsp" }
    ],
    instructions: [
      "Cut fish into strips and season with salt and spices.",
      "Dredge fish in flour and fry until golden brown and crispy.",
      "Warm tortillas in a dry skillet.",
      "Mix sour cream with lime juice and zest.",
      "Assemble tacos with fish, slaw, and lime crema.",
      "Garnish with fresh cilantro and serve immediately."
    ],
    servings: 4,
    difficulty: "Medium"
  },
  {
    id: "41",
    title: "Lava Cake",
    image: imgChocolateLavaCake,
    time: "30 min",
    calories: 480,
    matchScore: 94,
    tags: ["Vegetarian"],
    description: "Rich, molten dark chocolate cake with a gooey center, dusted with powdered sugar and served with vanilla ice cream.",
    ingredients: [
      { item: "Dark chocolate (70%)", amount: "6 oz" },
      { item: "Butter", amount: "1/2 cup" },
      { item: "Eggs", amount: "2 whole + 2 yolks" },
      { item: "Sugar", amount: "1/4 cup" },
      { item: "All-purpose flour", amount: "2 tbsp" },
      { item: "Vanilla extract", amount: "1 tsp" },
      { item: "Pinch of salt", amount: "" },
      { item: "Powdered sugar", amount: "for dusting" }
    ],
    instructions: [
      "Melt chocolate and butter together, let cool slightly.",
      "Whisk eggs, yolks, and sugar until thick.",
      "Fold chocolate mixture into egg mixture.",
      "Add flour, vanilla, and salt; fold gently.",
      "Pour into greased ramekins.",
      "Bake at 425°F for 12–14 min until edges are set but center jiggles.",
      "Invert onto plates and dust with powdered sugar."
    ],
    servings: 2,
    difficulty: "Medium"
  },
  {
    id: "42",
    title: "Miso Ramen",
    image: imgMisoRamen,
    time: "45 min",
    calories: 680,
    matchScore: 91,
    tags: ["High Protein"],
    description: "A rich, creamy pork bone broth ramen with spicy miso tare, chashu pork, soft-boiled egg, and fresh toppings.",
    ingredients: [
      { item: "Pork belly", amount: "8 oz" },
      { item: "Ramen noodles", amount: "2 portions" },
      { item: "White miso paste", amount: "3 tbsp" },
      { item: "Chicken broth", amount: "4 cups" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Chili oil", amount: "1 tbsp" },
      { item: "Soft-boiled eggs", amount: "2" },
      { item: "Green onions", amount: "3 stalks" },
      { item: "Corn kernels", amount: "1/4 cup" },
      { item: "Nori sheets", amount: "2" }
    ],
    instructions: [
      "Sear pork belly until golden on all sides.",
      "Braise in soy sauce, mirin, and water for 25 min until tender. Slice.",
      "Heat broth with miso paste and chili oil, stirring until dissolved.",
      "Cook ramen noodles per package.",
      "Divide noodles into bowls, ladle broth over.",
      "Top with sliced chashu, halved soft-boiled egg, corn, nori, and scallions."
    ],
    servings: 2,
    difficulty: "Hard"
  },
  {
    id: "43",
    title: "Ribeye Steak",
    image: imgRibeyeSteak,
    time: "35 min",
    calories: 720,
    matchScore: 96,
    tags: ["High Protein", "Keto", "Gluten-Free"],
    description: "A perfectly seared ribeye with a fragrant herb crust of rosemary, thyme, and garlic, finished with compound butter.",
    ingredients: [
      { item: "Ribeye steak", amount: "2 (12 oz each)" },
      { item: "Fresh rosemary", amount: "2 tbsp chopped" },
      { item: "Fresh thyme", amount: "1 tbsp" },
      { item: "Garlic", amount: "4 cloves minced" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Butter", amount: "3 tbsp" },
      { item: "Salt", amount: "to taste" },
      { item: "Black pepper", amount: "to taste" },
      { item: "Flaky sea salt", amount: "for finishing" }
    ],
    instructions: [
      "Bring steaks to room temperature for 30 min.",
      "Mix rosemary, thyme, garlic, salt, and pepper. Press onto steaks.",
      "Heat oil in cast-iron skillet over high heat until smoking.",
      "Sear steaks 4 min per side for medium-rare.",
      "Add butter to pan and baste steaks continuously.",
      "Rest for 5 min, slice against the grain, finish with flaky sea salt."
    ],
    servings: 2,
    difficulty: "Medium"
  },
  {
    id: "44",
    title: "Thai Basil Chicken",
    image: "https://images.unsplash.com/photo-1597577652129-7ffad9d37ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxiYXNpbCUyMGNoaWNrZW4lMjBzdGlyJTIwZnJ5JTIwYXNpYW58ZW58MXx8fHwxNzcxMDE3NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 min",
    calories: 480,
    matchScore: 98,
    tags: ["High Protein", "Quick"],
    description: "Fiery Thai street food classic with ground chicken, holy basil, chilies, and fish sauce served over jasmine rice with a fried egg.",
    ingredients: [
      { item: "Ground chicken", amount: "1 lb" },
      { item: "Thai holy basil", amount: "2 cups leaves" },
      { item: "Thai chilies", amount: "3-5, chopped" },
      { item: "Garlic", amount: "5 cloves, minced" },
      { item: "Fish sauce", amount: "2 tbsp" },
      { item: "Soy sauce", amount: "1 tbsp" },
      { item: "Oyster sauce", amount: "1 tbsp" },
      { item: "Palm sugar", amount: "1 tsp" },
      { item: "Jasmine rice", amount: "2 cups cooked" },
      { item: "Eggs", amount: "2" },
      { item: "Vegetable oil", amount: "3 tbsp" }
    ],
    instructions: [
      "Heat 1 tbsp oil in a wok over high heat.",
      "Stir-fry garlic and chilies until fragrant, about 30 seconds.",
      "Add ground chicken and break up, cooking until no longer pink.",
      "Add fish sauce, soy sauce, oyster sauce, and sugar. Stir-fry for 2 min.",
      "Turn off heat and fold in basil leaves until wilted.",
      "Fry eggs in remaining oil until crispy edges.",
      "Serve chicken over rice topped with fried egg."
    ],
    servings: 2,
    difficulty: "Easy"
  },
  {
    id: "45",
    title: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTgwMDh8MHwxfHNlYXJjaHwyfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGJhc2lsfGVufDF8fHx8MTc3MTAxNzc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "25 min",
    calories: 550,
    matchScore: 95,
    tags: ["Vegetarian", "Italian"],
    description: "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil on a perfectly charred crust.",
    ingredients: [
      { item: "Pizza dough", amount: "1 lb (store-bought or homemade)" },
      { item: "San Marzano tomatoes", amount: "1 can (14 oz), crushed" },
      { item: "Fresh mozzarella", amount: "8 oz, torn" },
      { item: "Fresh basil", amount: "1/2 cup leaves" },
      { item: "Garlic", amount: "2 cloves, minced" },
      { item: "Extra virgin olive oil", amount: "3 tbsp" },
      { item: "Salt", amount: "to taste" },
      { item: "Black pepper", amount: "to taste" }
    ],
    instructions: [
      "Preheat oven to 500°F (or highest setting) with pizza stone inside.",
      "Mix crushed tomatoes with garlic, 1 tbsp olive oil, salt, and pepper.",
      "Stretch dough into 12-inch round on floured surface.",
      "Spread thin layer of sauce, leaving 1-inch border.",
      "Tear mozzarella and distribute evenly over sauce.",
      "Transfer to hot pizza stone and bake 10-12 min until crust is golden and bubbly.",
      "Remove and immediately top with fresh basil and drizzle with remaining olive oil."
    ],
    servings: 2,
    difficulty: "Medium"
  }
];
