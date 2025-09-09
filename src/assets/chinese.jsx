import React, { useState } from "react";
import "./chinese.css";

const recipes = [
  {
    title: "Chinese Fried Rice",
    img: "https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1-320x320.jpg",
    ingredients: [
      "2 cups cooked rice",
      "2 eggs",
      "1 cup mixed vegetables",
      "2 tbsp soy sauce",
      "Spring onions"
    ],
    steps: "Stir-fry eggs and vegetables, add rice, soy sauce, and toss well. Garnish with spring onions."
  },
  {
    title: "Pork Dumplings",
    img: "https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=",
    ingredients: [
      "Dumpling wrappers",
      "250g minced pork",
      "2 garlic cloves",
      "Ginger & soy sauce",
      "Spring onions"
    ],
    steps: "Mix pork filling with garlic, ginger, and soy sauce. Wrap in dough, steam or pan-fry until golden."
  },
  {
    title: "Chow Mein",
    img: "https://media.istockphoto.com/id/483137365/photo/asian-chow-mein-noodles.jpg?s=612x612&w=0&k=20&c=aVkPKpDkiAM7CxTFinQBax0i-nm-ybzWimrJRyPePcg=",
    ingredients: [
      "200g egg noodles",
      "1 cup cabbage & carrots",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "Sesame oil"
    ],
    steps: "Boil noodles, stir-fry with vegetables and sauces. Finish with sesame oil for flavor."
  },
  {
    title: "Kung Pao Chicken",
    img: "https://cdn.cleaneatingmag.com/wp-content/uploads/2013/04/kung-pao-chicken.jpg",
    ingredients: [
      "300g chicken breast",
      "1 red bell pepper",
      "Dry red chilies",
      "Peanuts",
      "Soy sauce & vinegar"
    ],
    steps: "Stir-fry chicken, add peppers, chilies, and peanuts. Toss with soy sauce and vinegar for spicy-sour flavor."
  }
];

export default function ChineseRecipeGallery() {
  const [open, setOpen] = useState(-1);

  const toggleRecipe = idx => {
    setOpen(open === idx ? -1 : idx);
  };

  return (
    <div className="recipe-page">
      <h1>Famous Chinese Dishes</h1>
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
