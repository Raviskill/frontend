// Array.prototype.findLastIndex()

{
    let num =[10 ,20 ,30 ,40 ,50]

    console.log(num);

    let array = num.findLastIndex((item) => item <  50)
    
     console.log(array);
    
}


// Array.prototype.flat()

{
         let multiarray = [10 , 20 , 30 ,[40 , 50 ,60, [ 70, 80 , 90 ]]]
 

    console.log(multiarray);

    let flat = multiarray.flat()

    console.log(flat);

    let flat1 = multiarray.flat(2)

    console.log(flat1);  
        
        
}

// Array.prototype.flatMap()

{
    let num = [1 , 2 , 3 ,4 ,5 ,6 ]

    let flatmap = num.flatMap((num) => (num == 2 ? [2 , 2 , [3 , 4]] : 2))

    console.log(num);
    
}
// Array.prototype.forEach()

{
     const array1 = ['a', 'b', 'c'];

    let foreach = array1.forEach((char) => console.log(char))
}

// Array.prototype.includes()


{
    const array1 = [1, 2, 3];

    let include = array1.includes(1)
    let include1 = array1.includes(4)

    console.log(include);
    console.log(include1);
}

// Array.prototype.indexOf()

{

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    // let indexofs = beasts.indexOf('duck')

    let indexofs = beasts.indexOf('duck' , 4)

    // console.log(indexofs);

    console.log(indexofs);
}

// Array.prototype.join()

{
    
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    let join = beasts.join('*')

    console.log(join);
}


// Array.prototype.keys()
{
        const array1 = [1, 2, 3 , 4 , 5];

    let keys = array1.keys()

    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);
    console.log(keys.next().value);
}

// Array.prototype.lastIndexOf()

{
     const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

     let lastindexof = beasts.lastIndexOf('camel')

     let lastindexof2 = beasts.lastIndexOf('camel' , 1)

     console.log(lastindexof);

     console.log(lastindexof2);
}

// Array.prototype.map()



{
    let num = ['2' , '4' , '6' , '8' , '10']

    let map = num.map((num) => num*10)

    console.log(map);
    
}



// Array.prototype.reduceRight()


{
    const array1 = [1, 2, 3, 4];

    let reduceright = array1.reduceRight((prev , next) => prev * next)
    let reduce = array1.reduce((prev , next) => prev * next)

    console.log(reduce);
    console.log(reduceright);
}

// Array.prototype.reverse()



{
    let char = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    console.log(char);

    let reverse = char.reverse()

    console.log(reverse);

    let num = [11 , 89 , 11 , 210 , 55]

    console.log(num);

    let reversenum = num.reverse()
    let reversenum1 = num.sort((a  , b) => a - b)

    console.log(reversenum);

    console.log(reversenum1);
    
}

// Array.prototype.slice()




{
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    let slice1 = animals.slice(2)

    console.log(slice1);

    let slice2  = animals.slice(1 , 3)

    console.log(slice2);
}

// Array.prototype.some()



{
    const array = [1, 2, 3, 4, 5];

    let some = array.some((item) => item > 5)

    console.log(some);
    
}

// Array.prototype.splice()



{
    let array = ['10' , '20' , '30' , '40' , '50']

    let splice = array.splice(2 , 1 , '40' , '60')

    console.log(splice);

    console.log(array);
}






