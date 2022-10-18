import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const getResults = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = item;
          return {
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            category: strCategory,
            glass: strGlass,
            instruction: strInstructions,
            ingredient: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
            ],
          };
        });
        setResults(newCocktails);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getResults();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!results) {
    return (
      <h2 className="text-3xl text-center">Oops! no cocktail to display</h2>
    );
  }
  return (
    <div className="bg-white m-9 rounded-lg p-7">
      <Link to="/">
        <button className="my-2 ml-4 bg-gray-800 p-2 text-white rounded-lg">
          Back Home
        </button>
      </Link>
      <h1 className="text-center text-3xl font-bold tracking-widest">
        Cocktails
      </h1>
      {results.map((item, index) => {
        const { name, img, info, glass, instruction, category, ingredient } =
          item;
        return (
          <figure key={index} class="md:flex bg-white p-8 md:p-0">
            <img
              class="w-24 sm:object-cover h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={img}
              alt="img"
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8  md:text-left space-y-4">
              <blockquote>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Name:
                  </span>
                  {name}
                </p>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Category:
                  </span>
                  {category}
                </p>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Info:
                  </span>
                  {info}
                </p>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Glass:
                  </span>
                  {glass}
                </p>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Glass Instructons:
                  </span>
                  {instruction}
                </p>
                <p class="my-4 text-lg font-medium">
                  <span className="my-2 ml-4 mr-4 bg-gray-800 p-2 text-white rounded-lg">
                    Ingredients:
                  </span>
                  {ingredient.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null;
                  })}
                </p>
              </blockquote>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default CocktailDetails;
