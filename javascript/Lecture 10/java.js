// loop withe brack stetment 



// for(let i=0;i<10;i++)
// {
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<10;j++)
//     {
//         if(i==3)
//         {
//             break;
//         }
//     }
    
// }

// demo:for(let i=0;i<10;i++)
//     {
//         console.log(`outer loop ${i}`);
//         for(let j=0;j<10;j++)
//         {
//             if(j==3)
//             {
//              continue demo;   
//             }
//         }
        
//     }


// java scripte map object


{
    let map= new Map(); 

    
    map.set("key 1",1)
    console.log(map);

    console.log(map);

    map.set("key 2",2)

    console.log(map);
    

    let Get = map.get("key 1")

    let Get1 = map.get("key 2")


    console.log(Get);

    console.log(Get1);

    let has1 = map.has('key 1')

    console.log(has1);

    let has2 = map.has('key 3')

    console.log(has2);

    map.set("key 3",3)

    console.log(map);

    map.set("key 3",4)

    console.log(map);

    map.delete("key 2")

    console.log(map);

    // map.clear()

    console.log(map);


    let entries1 = map.entries()

    console.log(entries1);

    let value1 = map.values()

    console.log(value1);

    let key1 = map.keys()

    console.log(key1);

    map.forEach((key,value)=>{
    return console.log(`${key}=${value}`);
    
})

let data = map[Symbol.iterator]()


for(const item of data)
{
    console.log(item);
    
}


    
    







    






    
    


    
}