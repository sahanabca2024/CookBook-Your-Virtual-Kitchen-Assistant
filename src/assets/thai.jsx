import React, { useState } from "react";
import "./thai.css";

const recipes = [
  {
    title: "Pad Thai",
    img: "https://media.istockphoto.com/id/510163478/photo/pad-thai.jpg?s=612x612&w=0&k=20&c=-tOqzOMwfhq0JZrX0mfEHE4R-vaUua5I4rcuSlSeGs0=",
    alt: "Pad Thai",
    ingredients: [
      "200g rice noodles",
      "2 eggs",
      "100g shrimp or chicken",
      "Bean sprouts",
      "Tamarind paste, fish sauce, peanuts",
    ],
    instructions:
      "Soak noodles, stir-fry with egg, protein, tamarind sauce, and bean sprouts. Garnish with crushed peanuts and lime.",
  },
  {
    title: "Thai Green Curry",
    img: "https://piquantpost.com/cdn/shop/articles/GJ16a1y2HDD3gYjmojg2t_1200x1200.jpg?v=1646021297",
    alt: "Thai Green Curry",
    ingredients: [
      "300g chicken or tofu",
      "2 tbsp green curry paste",
      "1 cup coconut milk",
      "Bamboo shoots & eggplant",
      "Thai basil leaves",
    ],
    instructions:
      "Simmer curry paste in coconut milk, add chicken/tofu and vegetables. Cook until tender and finish with Thai basil.",
  },
  {
    title: "Tom Yum Soup",
    img: "https://media.istockphoto.com/id/1392660302/photo/tom-yam-kung-prawn-and-lemon-soup-with-mushrooms-thai-food-in-wooden-bowl-top-view.jpg?s=612x612&w=0&k=20&c=BZUh3_h2QLS3HTyBl5hDNoQwg_1xXLt5L0rYsug3yJs=",
    alt: "Tom Yum Soup",
    ingredients: [
      "4 cups chicken stock",
      "200g shrimp",
      "Lemongrass, galangal, kaffir lime leaves",
      "Mushrooms",
      "Fish sauce & chili paste",
    ],
    instructions:
      "Boil stock with lemongrass and galangal. Add shrimp, mushrooms, and chili paste. Season with lime juice and fish sauce.",
  },
  {
    title: "Mango Sticky Rice",
    img: "https://www.chenabgourmet.com/wp-content/uploads/2024/02/sticky-rice-with-mango-recipe.jpg",
    alt: "Mango Sticky Rice",
    ingredients: [
      "1 cup glutinous rice",
      "1 ripe mango",
      "1 cup coconut milk",
      "2 tbsp sugar",
      "Pandan leaf (optional)",
    ],
    instructions:
      "Steam sticky rice, mix with sweetened coconut milk. Serve with fresh mango slices and drizzle extra coconut cream.",
  },
];

export default function ThaiRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous Thai Dishes</h1>
      <div className="gallery">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="card" onClick={() => toggleRecipe(idx)}>
            {recipe.img && <img src={recipe.img} alt={recipe.alt} />}
            <div className="card-content">
              <h2>{recipe.title}</h2>
              {visibleRecipe === idx && (
                <div className="recipe">
                  <h3>Ingredients:</h3>
                  <ul>
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p>{recipe.instructions}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
