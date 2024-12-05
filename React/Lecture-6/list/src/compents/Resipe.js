
export const Resipe = ({drinkers}) =>
{
return(
    <>
            <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
</>
)
}


let guste = 0;


export const Cup = ()=>
{   
    guste = guste+1;
    return <h2>Tea cup for {guste} guest </h2>;
}


