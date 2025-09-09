import React, { useState } from "react";
import "./italian.css";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    img: "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww",
    alt: "Spaghetti Carbonara",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 eggs + 1 yolk",
      "50g pecorino/Parmesan cheese",
      "Black pepper",
    ],
    instructions:
      "Cook pasta, sauté pancetta. Mix eggs and cheese, combine with hot pasta and pancetta. Finish with black pepper.",
  },
  {
    title: "Classic Lasagna",
    img: "https://media.istockphoto.com/id/535851351/photo/lasagna-on-a-square-white-plate.jpg?s=612x612&w=0&k=20&c=Rg1K7z4NlWhy2qexaym_GJ0khcJFSJUJgToTN2cRspM=",
    alt: "Lasagna",
    ingredients: [
      "Lasagna sheets",
      "500g minced beef",
      "Tomato sauce",
      "Béchamel sauce",
      "Mozzarella & Parmesan",
    ],
    instructions:
      "Layer lasagna sheets with meat sauce, béchamel, and cheese. Bake at 180°C for 40 mins until golden.",
  },
  {
    title: "Mushroom Risotto",
    img: "https://media.istockphoto.com/id/1369183332/photo/risotto-with-brown-champignon-mushrooms.jpg?s=612x612&w=0&k=20&c=hXubXk9pxjZbSR436lNbNWMrbGd37Y3v3DaopBoU84M=",
    alt: "Risotto",
    ingredients: [
      "200g Arborio rice",
      "1 onion",
      "200g mushrooms",
      "1L vegetable stock",
      "Butter & Parmesan",
    ],
    instructions:
      "Sauté onion & mushrooms, add rice, cook slowly with stock. Finish with butter and Parmesan for creaminess.",
  },
  {
    title: "Tiramisu",
    img: "https://t4.ftcdn.net/jpg/00/39/01/57/360_F_39015733_RlkPhCskQTJuLc8idgn7mpBajaViWqtn.jpg",
    alt: "Tiramisu",
    ingredients: [
      "200g ladyfingers",
      "250g mascarpone cheese",
      "2 eggs",
      "100ml coffee",
      "Cocoa powder",
    ],
    instructions:
      "Layer coffee-dipped ladyfingers with mascarpone cream. Chill for 4 hrs and dust with cocoa before serving.",
  },
];

export default function ItalianRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous Italian Dishes</h1>
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
