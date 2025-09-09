import React, { useState } from "react";
import "./indian.css";

const recipes = [
  {
    title: "Chicken Biryani",
    img: "https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 onions (fried)",
      "2 tomatoes",
      "Yogurt & spices (garam masala, turmeric, chili powder)"
    ],
    steps: "Cook rice separately. Prepare chicken masala with spices, yogurt, and onions. Layer rice and chicken, steam for 15 minutes. Serve hot."
  },
  {
    title: "Masala Dosa",
    img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-H1-1.jpg?fit=600%2C900&ssl=1",
    ingredients: [
      "2 cups dosa batter",
      "3 potatoes (boiled)",
      "1 onion",
      "Green chili, curry leaves",
      "Turmeric & mustard seeds"
    ],
    steps: "Spread dosa batter on hot tawa, stuff with potato masala (spiced with turmeric, onion, and chili). Serve with chutney & sambar."
  },
  {
    title: "Butter Chicken",
    img: "https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg",
    ingredients: [
      "500g chicken",
      "1 cup tomato puree",
      "½ cup cream",
      "2 tbsp butter",
      "Spices (garam masala, chili powder, ginger-garlic paste)"
    ],
    steps: "Cook marinated chicken in butter. Add tomato puree, cream, and spices. Simmer until thick and creamy. Best served with naan or rice."
  },
  {
    title: "Paneer Butter Masala",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
    ingredients: [
      "250g paneer (cubes)",
      "2 onions",
      "1 cup tomato puree",
      "½ cup cream",
      "Spices (coriander, chili powder, garam masala)"
    ],
    steps: "Sauté onion & tomato. Blend into smooth paste. Add paneer, cream, and spices. Cook until gravy thickens. Serve with roti or rice."
  }
];

export default function IndianRecipeGallery() {
  const [open, setOpen] = useState(-1);

  const toggleRecipe = idx => {
    setOpen(open === idx ? -1 : idx);
  };

  return (
    <div className="recipe-page">
      <h1>Famous Indian Dishes</h1>
      <div className="gallery">
        {recipes.map((rec, idx) => (
          <div className="card" key={rec.title} onClick={() => toggleRecipe(idx)}>
            <img src={rec.img} alt={rec.title} />
            <div className="card-content">
              <h2>{rec.title}</h2>
              {open === idx && (
                <div className="recipe">
                  <h3>Ingredients:</h3>
                  <ul>
                    {rec.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                  </ul>
                  <p>{rec.steps}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
