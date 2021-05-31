import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";

import "../assets/Characters.scss";
/**
  *Components 
  */
import Search from "./Search.jsx";
/**
 * Hooks 
 */
import useCharacters from "../hooks/useCharacters.js"

const initialState = {
  favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character'

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  /*const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });*/

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {filteredUsers.map((character) => (
        <div key={character.id} className="Characters__card">
          <div className="Characters__card--img">
            <img src={character.image} alt={"image of " + character.name} />
          </div>
          <h2>{character.name}</h2>
          <div className="Characters__card--text">
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Url:</strong> {character.url}
            </p>
            <p>
              <strong>Created:</strong> {character.created}
            </p>
            <button type="button" onClick={() => handleClick(character)}>
              AGREGAR A FAVORITOS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
