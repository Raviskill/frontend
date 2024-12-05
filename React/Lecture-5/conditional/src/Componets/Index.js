


// const Pro = ({Isstoke,name}) =>
//     {
//         if(Isstoke)
//         {
//             return <li>{name}</li>
//         }
//         return <li><del>{name}</del></li>
    
    
//     }

// const  Pro =({Isstoke,name})=>
// {
//     return <li>
//          {Isstoke ? name : (<del>{name}</del>)}
//   </li>
    
// }


const Pro = ({Isstoke , name}) => {
    return <li>
        {name} {Isstoke && '🚫'}
    </li>
  }
  



    
const Index =() =>
    {

      

        return(
            <div>
                <ul>
                    <Pro name="book" Isstoke={true} />
                    <Pro name="ac" Isstoke={true} />
                    <Pro name="moboile" Isstoke={false} />
                    <Pro name="leptop" Isstoke={true} />
                    <Pro name="cemro" Isstoke={true} />
                    <Pro name="hedfon" Isstoke={false} />
                    <Pro name="leptop" Isstoke={false} />

                </ul>
            </div>
        )
    }


export default Index;




