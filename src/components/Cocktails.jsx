import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCocktailContext } from "../context/ContextProvider";
import Loading from "./Loading";

const Cocktails = () => {
  const { loading, results } = useCocktailContext();

  if (loading) {
    return <Loading />;
  }
  if (results.length < 1) {
    return (
      <h1 className="text-white text-3xl text-center">
        Ooops! We can't seem to find your cocktail
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-white text-4xl text-center">Cocktails</h1>
      <div className="py-6 px-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {results.map((items) => {
          const { id, drink, alcoholInfo, glass, img } = items;
          return (
            <div key={id} className="bg-white rounded-md">
              <img
                className="w-full h-96 object-cover"
                width="380"
                height="512"
                src={img}
                alt="none"
              />
              <div className="p-3">
                <h3 className="text-2xl font-bold tracking-wider">{drink}</h3>
                <h6 className="font-semibold tracking-widest">{glass}</h6>
                <p className="font-light text-gray-400">{alcoholInfo}</p>
                <Link to={`/cocktail/${id}`}>
                  <button className="my-2 bg-gray-800 p-2 text-white rounded-lg">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cocktails;
