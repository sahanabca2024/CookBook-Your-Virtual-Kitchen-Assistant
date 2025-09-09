import React, { useState } from "react";
import "./japanese.css";

const recipes = [
  {
    title: "Sushi",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    alt: "Sushi",
    ingredients: [
      "2 cups sushi rice",
      "Fresh fish (salmon, tuna)",
      "Nori sheets",
      "Soy sauce & wasabi",
      "Pickled ginger",
    ],
    instructions:
      "Prepare sushi rice, place on nori, add fish or veggies, roll tightly and slice. Serve with soy sauce and wasabi.",
  },
  {
    title: "Ramen",
    img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFtZW58ZW58MHx8MHx8fDA%3D",
    alt: "Ramen",
    ingredients: [
      "Ramen noodles",
      "Chicken or pork broth",
      "Soy sauce or miso paste",
      "Boiled egg",
      "Chashu pork, seaweed, scallions",
    ],
    instructions:
      "Simmer broth with miso or soy, cook noodles separately. Assemble bowl with broth, noodles, toppings, and egg.",
  },
  {
    title: "Tempura",
    img: "https://t4.ftcdn.net/jpg/01/78/56/99/360_F_178569922_aPb7auRS5SFm7dh6hkCB6OTbW1IweMN5.jpg",
    alt: "Tempura",
    ingredients: [
      "Shrimp or vegetables",
      "1 cup flour",
      "1 egg",
      "Cold water",
      "Soy dipping sauce",
    ],
    instructions:
      "Prepare light batter with flour, egg, and cold water. Dip shrimp/veggies, deep-fry until crisp. Serve with dipping sauce.",
  },
  {
    title: "Okonomiyaki",
    img: "https://media.istockphoto.com/id/1134067307/photo/japanese-food-okonomiyaki-japanese-style-pancakes.jpg?s=612x612&w=0&k=20&c=WAXGsoYX9eH0Da-iG5shwJ_jDOtfDqoZ0QYNBUCAcRI=",
    alt: "Okonomiyaki",
    ingredients: [
      "1 cup flour",
      "2 eggs",
      "Shredded cabbage",
      "Sliced pork belly",
      "Okonomiyaki sauce & mayo",
    ],
    instructions:
      "Mix batter with cabbage, spread on hot pan, top with pork. Cook both sides, finish with sauce, mayo & bonito flakes.",
  },
];

export default function JapaneseRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous Japanese Dishes</h1>
      <div className="gallery">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="card" onClick={() => toggleRecipe(idx)}>
            <img src={recipe.img} alt={recipe.alt} />
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
