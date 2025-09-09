import React, { useState } from "react";
import "./mexican.css";

const recipes = [
  {
    title: "Tacos",
    img: "https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.jpg?s=612x612&w=0&k=20&c=fxx5deD9YgseQfLc3IFZpoMfwdq8Fb7jYimAjITs6TA=",
    alt: "Tacos",
    ingredients: [
      "Corn tortillas",
      "Beef, chicken, or pork",
      "Onion & cilantro",
      "Lime wedges",
      "Salsa",
    ],
    instructions:
      "Cook meat with spices, fill tortillas, top with onions, cilantro, salsa, and lime juice.",
  },
  {
    title: "Enchiladas",
    img: "https://t3.ftcdn.net/jpg/06/19/63/96/360_F_619639658_hj9J9GlXO3l0AzA0GPLCUjEJKzV13Zvw.jpg",
    alt: "Enchiladas",
    ingredients: [
      "Corn tortillas",
      "Shredded chicken",
      "Cheese",
      "Enchilada sauce",
      "Sour cream",
    ],
    instructions:
      "Fill tortillas with chicken, roll up, cover with sauce & cheese, then bake until bubbly. Serve with sour cream.",
  },
  {
    title: "Guacamole",
    img: "https://png.pngtree.com/thumb_back/fw800/background/20241128/pngtree-homemade-guacamole-with-lime-image_16511302.jpg",
    alt: "Guacamole",
    ingredients: [
      "Ripe avocados",
      "Tomato",
      "Onion",
      "Lime juice",
      "Cilantro",
    ],
    instructions:
      "Mash avocados, mix with chopped tomato, onion, lime juice, and cilantro. Serve with tortilla chips.",
  },
  {
    title: "Quesadilla",
    img: "https://media.istockphoto.com/id/1159174146/photo/quesadilla-with-chicken-and-sauces.jpg?s=612x612&w=0&k=20&c=c_w0YgNkZO2X2MPIjAS2OYWoBkm7tPLOQOhHABfR8Ao=",
    alt: "Quesadilla",
    ingredients: [
      "Flour tortillas",
      "Cheese (Oaxaca or cheddar)",
      "Chicken or mushrooms",
      "Salsa",
      "Sour cream",
    ],
    instructions:
      "Fill tortilla with cheese and filling, fold, and grill until crispy. Serve with salsa and sour cream.",
  },
];

export default function MexicanRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous Mexican Dishes</h1>
      <div className="gallery">
        {recipes.map((recipe, idx) => (
          <div key={idx} className="card" onClick={() => toggleRecipe(idx)}>
            {recipe.img && (
              <img src={recipe.img} alt={recipe.alt} className="card-image" />
            )}
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
