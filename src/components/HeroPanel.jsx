export const HeroPanel = (
) => {
    return (
        <div className="w-full h-[75vh] overflow-hidden relative max-w-screen">
            <picture className="w-full h-full">
                <source srcset={`https://picsum.photos/id/13/367/267`} media="(min-width:1025px)" />
                <source srcset={`https://picsum.photos/id/13/367/267`} media="(min-width:720px)" />
                <img className="w-full h-full object-cover"  src={`https://picsum.photos/id/13/367/267`} alt="Hero Panel Images" />
            </picture>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-80 p-8 bg-red-600 rounded-4xl shadow-md hover:bg-yellow-500 ">
                <h2 className="text-white font-bold text-center">WELCOME TO POKEDEX WEB SITE!</h2>
                <p className="text-white font-bold text-center py-5">Explore all the Pokemons and enjoy this journey!</p>
                <button className="btn-principal" />
            </div>
        </div>
    );
}