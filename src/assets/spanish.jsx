import React, { useState } from "react";
import "./spanish.css";

const recipes = [
  {
    title: "Paella",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJt1kDcWSfaSLs64slfhOElIt8DtP3uqYAtQ&s",
    alt: "Paella",
    ingredients: [
      "Short-grain rice",
      "Saffron",
      "Seafood (shrimp, mussels, squid)",
      "Chicken",
      "Peppers & peas",
    ],
    instructions:
      "Cook rice with saffron, chicken, and vegetables, then add seafood. Simmer until rice absorbs the flavors.",
  },
  {
    title: "Tapas",
    img: "https://media.istockphoto.com/id/626171934/photo/spanish-tapas-and-sangria.jpg?s=612x612&w=0&k=20&c=vc5cifaxo03gucfE33kzvZSWV7PKt4bLD14-eN4EVAM=",
    alt: "Tapas",
    ingredients: ["Olives", "Chorizo", "Spanish ham (jamón)", "Cheese", "Bread"],
    instructions:
      "Arrange a variety of small bites like olives, meats, and cheeses on a platter. Serve as appetizers or snacks.",
  },
  {
    title: "Gazpacho",
    img: "https://media.istockphoto.com/id/1493969283/photo/tomato-gazpacho-soup.jpg?s=612x612&w=0&k=20&c=opJMbjEYrmtWOKNm9_AZMJBPrZwJRpaXwxJNQ-khF0c=",
    alt: "Gazpacho",
    ingredients: [
      "Tomatoes",
      "Cucumber",
      "Garlic",
      "Olive oil",
      "Bread",
    ],
    instructions:
      "Blend tomatoes, cucumber, garlic, bread, and olive oil into a chilled soup. Serve cold, garnished with herbs.",
  },
  {
    title: "Tortilla Espanola",
    img: "https://t4.ftcdn.net/jpg/03/29/46/69/360_F_329466927_kmuuVgBQXwvKqMt2L5wdbqNCRk70WQg7.jpg",
    alt: "Tortilla Espanola",
    ingredients: ["Eggs", "Potatoes", "Onions", "Olive oil", "Salt"],
    instructions:
      "Saute potatoes and onions, then pour beaten eggs over. Cook gently until firm, flipping once.",
  },
];

export default function SpanishRecipeGallery() {
  const [visibleRecipe, setVisibleRecipe] = useState(null);

  const toggleRecipe = (index) => {
    setVisibleRecipe(visibleRecipe === index ? null : index);
  };

  return (
    <div className="gallery-container">
      <h1>Famous Spanish Dishes</h1>
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
