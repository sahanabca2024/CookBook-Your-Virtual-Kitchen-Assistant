import React, { useState } from "react";
import "./french.css";

const recipes = [
  {
    title: "Coq au Vin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn-j3sCBQkPHXpOvqA5GN2t_P8c2Gc01dIQ&s",
    alt: "Coq au Vin",
    ingredients: [
      "Chicken",
      "Red wine",
      "Mushrooms",
      "Bacon",
      "Onions & garlic",
    ],
    instructions:
      "Braise chicken with wine, bacon, mushrooms, and herbs until tender and flavorful.",
  },
  {
    title: "Ratatouille",
    img: "https://media.istockphoto.com/id/498303420/photo/vegetable-ratatouille-baked-in-cast-iron-frying-pan-traditional-homemade.jpg?s=612x612&w=0&k=20&c=UGtZq4rhBdg-X2bA_cwp1qXJ-7JlqofCuMjUJgee6Nc=",
    alt: "Ratatouille",
    ingredients: [
      "Eggplant",
      "Zucchini",
      "Bell peppers",
      "Tomatoes",
      "Herbs de Provence",
    ],
    instructions:
      "Layer sliced vegetables and bake with olive oil, garlic, and herbs until soft and aromatic.",
  },
  {
    title: "Bouillabaisse",
    img: "https://thumbs.dreamstime.com/b/french-seafood-bouillabaisse-soup-closeup-bowl-served-toast-table-horizontal-130692687.jpg",
    alt: "Bouillabaisse",
    ingredients: [
      "Mixed fish & shellfish",
      "Saffron",
      "Fennel",
      "Tomatoes",
      "Garlic & onions",
    ],
    instructions:
      "Simmer fish and shellfish with saffron, fennel, and tomatoes to create a rich Provençal stew.",
  },
  {
    title: "Quiche Lorraine",
    img: "https://static.vecteezy.com/system/resources/previews/042/579/989/non_2x/ai-generated-french-culinary-heritage-perfecting-quiche-lorraine-photo.jpg",
    alt: "Quiche Lorraine",
    ingredients: [
      "Pastry crust",
      "Eggs",
      "Cream",
      "Bacon",
      "Cheese",
    ],
    instructions:
      "Bake a savory tart filled with eggs, cream, cheese, and bacon until golden and set.",
  },
];

export default function FrenchRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous French Dishes</h1>
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
