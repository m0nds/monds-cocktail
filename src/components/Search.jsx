import React from "react";
import { useCocktailContext } from "../context/ContextProvider";
import { AiOutlineSearch } from "react-icons/ai";
import { TiDelete } from 'react-icons/ti'

const Search = () => {
  const { searchTerm, setSearchTerm } = useCocktailContext();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center p-8"
    >
      <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <AiOutlineSearch />
          </svg>
        </span>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
          placeholder="Search for your cocktail"
          type="text"
          name="search"
        />
        { searchTerm && <button className="absolute inset-y-0 right-0 pr-2 " onClick={() => setSearchTerm('')}><TiDelete/></button> }
      </label>
    </form>
  );
};

export default Search;
