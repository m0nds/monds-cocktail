import {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

const AppContext = createContext();
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = useCallback(async () => {
    // setLoading(true)
    try {
      const response = await fetch(`${baseUrl}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            item;
          return {
            id: idDrink,
            drink: strDrink,
            alcoholInfo: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setResults(newCocktails);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    getResults();
  }, [searchTerm, getResults]);

  return (
    <AppContext.Provider
      value={{ loading, results, searchTerm, setSearchTerm, getResults }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCocktailContext = () => useContext(AppContext);
