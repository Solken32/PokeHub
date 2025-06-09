"use client"

import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Toggle para el menú móvil
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <header className="w-full bg-red-600 text-white">
            {/* Barra superior con degradado */}
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500"></div>

            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo y nombre */}
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                            <div className="h-8 w-8 bg-red-600 rounded-full border-2 border-black flex items-center justify-center">
                                <div className="h-3 w-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <a href="/" className="text-xl md:text-2xl font-bold tracking-wider">
                            PokeHub
                        </a>
                    </div>

                    {/* Navegación - Escritorio */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="/" className="font-medium hover:text-yellow-300 transition-colors">
                            Lista
                        </a>
                        <a href="/pokemons/1" className="font-medium hover:text-yellow-300 transition-colors">
                            Paginacion
                        </a>
                        <a href="/regions" className="font-medium hover:text-yellow-300 transition-colors">
                            Regiones
                        </a>
                        <a href="/games" className="font-medium hover:text-yellow-300 transition-colors">
                            Juegos
                        </a>
                    </nav>

                    {/* Botón de menú - Móvil */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-white/20 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Menú"
                    >
                        <div className="w-6 flex flex-col space-y-1">
                            <span className="h-0.5 w-full bg-current"></span>
                            <span className="h-0.5 w-full bg-current"></span>
                            <span className="h-0.5 w-full bg-current"></span>
                        </div>
                    </button>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-white/20">
                        <nav className="flex flex-col space-y-4">
                            <a href="/" className="font-medium hover:text-yellow-300 transition-colors">
                                Lista
                            </a>
                            <a href="/pokemons/1" className="font-medium hover:text-yellow-300 transition-colors">
                                Paginacion
                            </a>
                            <a href="/regions" className="font-medium hover:text-yellow-300 transition-colors">
                                Regiones
                            </a>
                            <a href="/games" className="font-medium hover:text-yellow-300 transition-colors">
                                Juegos
                            </a>

                        </nav>
                    </div>
                )}
            </div>

            {/* Barra inferior con degradado */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400"></div>
        </header>
    )
}