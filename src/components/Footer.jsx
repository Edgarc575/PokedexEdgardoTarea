export const Footer = ()=>{
    return (
        <footer className="bg-yellow-400 text-white font-bold p-4 flex justify-center items-center">
            <span>POKEDEX INC - ALL RIGHTS RESERVED &copy; {new Date().getFullYear().toString()}</span>
        </footer>
    );
}