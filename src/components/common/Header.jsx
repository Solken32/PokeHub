"use client"

import { useState } from "react";
import { Menu } from "lucide-react";

export function Header({path}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle para el menú móvil
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const links = [
        { href: "/", text: "Lista" },
        { href: "/pokemons/1", text: "Paginacion" },
        { href: "/favoritos", text: "Favoritos" },
        { href: "#", text: "Regiones" }
    ];

    return (
        <>
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
                        {
                            links.map(link => (
                                <a key={link.text} href={link.href} className={`font-medium hover:text-yellow-300 transition-colors ${path == link.href ? "border-b-2" : "" }`}>
                                    {link.text}
                                </a>
                            ))
                        }
                    </nav>

                    {/* Botón de menú - Móvil */}
                    <Menu
                        className="md:hidden p-2 rounded-md hover:bg-white/20 w-10 h-10 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Menú"
                    />
                        
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-white/20">
                        <nav className="flex flex-col space-y-4">
                            {
                                links.map(link => (
                                    <a key={link.text} href={link.href} className="font-medium hover:text-yellow-300 transition-colors">
                                        {link.text}
                                    </a>
                                ))
                            }
                        </nav>
                    </div>
                )}
            </div>

            {/* Barra inferior con degradado */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400"></div>
        </header>
        </>
    )
}