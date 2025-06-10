

import { Heart, Star, Eye, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonEmptyFavorites from "./EmptyFavorites";


function FavoriteSection(){

  const [favorites,setFavorites] = useState([]);
  useEffect(() =>{
    const stored = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    setFavorites(stored);
  },[]);

  if (favorites.length === 0 ){
    return <PokemonEmptyFavorites />
  }

  const deletePokemon= (name) => {
    const stored = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    const updated= stored.filter((fav) => fav.name !== name);
    localStorage.setItem("favorites",JSON.stringify(updated));
    setFavorites(updated);
  }
  return (
    <>
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
            <h2 className="text-4xl font-bold text-gray-800">Mis Pokémons Favoritos</h2>
            <Star className="h-8 w-8 text-yellow-500 fill-current" />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <span className="text-sm text-gray-500">{favorites.length} Pokémon en favoritos</span>
          </div>
        </div>
    
        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            favorites.map( pokemon => (
              <div key={pokemon.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                {/* Header de la card */}
                <div className="relative p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                  {/* Imagen del Pokémon */}
                  <div class="flex justify-center pt-4">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                      alt={pokemon.name}
                      class="w-32 h-32 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
        
                {/* Contenido de la card */}
                <div className="p-5 flex flex-col gap-2">
                  {/* Nombre */}
                  <h3 className="capitalize text-xl font-bold text-gray-800 mb-2 text-center">
                    {pokemon.name}
                  </h3>
        
                  {/* ver detalles */}
                  <a href={`/pokemons/${pokemon.name}`} className="cursor-pointer w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group">
                    <Eye className="h-4 w-4" />
                    <span>Ver Detalles</span>
                  </a>

                  <button onClick={() => deletePokemon(pokemon.name)} className="cursor-pointer w-full py-2 px-4  bg-red-500  text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group">
                    <Trash className="h-4 w-4" />
                    <span>Quitar</span>
                  </button>
                </div>
              </div>
            ))
          }

        </div>
    
        {/* Botón para ver todos */}
        <div className="text-center mt-12">
          <a href="/pokemons/1" className="cursor-pointer px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Ver Todos los Pokémon
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default FavoriteSection;
