import { Link } from "react-router";
export const Header = ( { title = "Pokedex 2025 Tercero" } )=>{
    return (
        <header className="bg-yellow-400 text-white flex justify-between items-center px-4 py-5">
            <h1 className="text-lg font-bold">{title}</h1>
            <nav>
                <ul className="flex gap-2 items-center">
                    <li><Link to="/" className="inline-block px-6 py-4 text-sm font-bold hover:bg-red-200">HOME</Link></li>
                    <li><Link to="/about" className="inline-block px-6 py-4 text-sm font-bold hover:bg-red-200">ABOUT US</Link></li>
                    <li><Link to="https://pokemondb.net/pokedex" className="inline-block px-6 py-4 text-sm font-bold hover:bg-red-200">LEARN MORE</Link></li>
                </ul>
            </nav>
        </header>
    );
}