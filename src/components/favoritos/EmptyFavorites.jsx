"use client"
import { Heart, Frown } from "lucide-react"

function PokemonEmptyFavorites() {
    return (
        <>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Card principal */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 text-white text-center">
                                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                                    <Heart className="h-6 w-6" />
                                    Pokémons Favoritos
                                </h2>
                            </div>

                            {/* Contenido */}
                            <div className="p-8 flex flex-col items-center">
                                {/* Ilustración */}
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                                        <Frown className="h-16 w-16 text-gray-400" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full border border-gray-200">
                                        <Heart className="h-8 w-8 text-gray-300" />
                                    </div>
                                </div>
                                {/* Mensaje */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">No tiene favoritos aún</h3>
                                <p className="text-gray-600 text-center mb-8">
                                    Parece que aún no has agregado ningún Pokémon a tus favoritos. ¡Explora la Pokédex y marca los que más
                                    te gusten!
                                </p>

                                {/* Nota adicional */}
                                <div className="mt-8 text-sm text-gray-500 flex items-center gap-1">
                                    <Heart className="h-3 w-3" />
                                    <span>Toca el corazón en cualquier Pokémon para agregarlo a favoritos</span>
                                </div>
                            </div>
                        </div>

                        {/* Decoración */}
                        <div className="flex justify-center mt-8">
                            <div className="h-2 w-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PokemonEmptyFavorites;