
// component( props, context) {}
export const Card = (
    {
        id,
        name,
        defaultImgUri
    }
)=>{
    return (
        <section className="p-4 rounded-md border border-yellow-400 shadow flex flex-col items-center w-40 bg-slate-200">
            <img src={defaultImgUri} />
            <h2 class="text-ellipsis">{name}</h2>
        </section>
    );
}

/*
export const CardSample = (props) => {
    const {id, name, defaultImgUri} = props;
}
*/