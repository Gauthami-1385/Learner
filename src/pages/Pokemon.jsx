import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PokiApi = () => {
  const history = useNavigate();
  const [pokemon, setPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6"
  );
  const [hasMore, setHasMore] = useState(true);
  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    if (!data.next || pokemon.length === 60) {
      setHasMore(false);
    }
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setPokemon((p) => [...p, data]);
        // await pokemon.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  const handleBack = () => {
    history("/");
  };
  return (
    <div className="bg-black bg-no-repeat bg-cover border border-green-500 text-white p-8 font-roboto">
      <div>
        <IoArrowBackOutline className="w-10 h-10" onClick={handleBack} />
      </div>

      <div className="font-extrabold text-center text-5xl ">POKEMON</div>

      <div className="m-3 pt-2">
        <InfiniteScroll
          dataLength={pokemon.length}
          next={getAllPokemons}
          hasMore={hasMore}
          loader={<p className="text-center ">Loading...</p>}
          endMessage={<p className="text-center text-[50px]">Happy Diving</p>}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-4">
            {pokemon?.map((p, i) => (
              <Cards
                name={p.name}
                image={p.sprites.other.dream_world.front_default}
                key={i}
                type={p.types[0].type.name}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PokiApi;
