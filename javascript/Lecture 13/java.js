 // /* Javascript String Method */


 {
    
    let str ="this is a string methode "

    console.log(str);
    console.log(str.length);

 }

 // padStart(targetLength)
// padStart(targetLength, padString)

// padEnd(targetLength)
// padEnd(targetLength, padString)

{
    let str = '10000'

    console.log(str.padStart(10,7));
    console.log(str.padEnd(10,7));
    
    
}


/* String trim() , trimStart() and trimEnd() Method */

// trim()
// trimStart()
// trimLeft()  deprecated
// trimEnd()
// trimRight()  deprecated


{

    let str ="       this is a string methode       "


    console.log(str.length);
    let trim =str.trim();
    console.log(trim);
    console.log(trim.length);
    let trimStart = str.trimStart();
    console.log(trimStart);
    console.log(trimStart.length);
    let trimEnd = str.trimEnd();
    console.log(trimEnd);
    console.log(trimEnd.length);

}



/* String slice() , subString() Method */

// slice(indexStart)
// slice(indexStart, indexEnd)

// substring(indexStart)
// substring(indexStart, indexEnd)



{
    let str ="this is a string methode!"

    console.log(str.slice(12));
    console.log(str.substring(12));
    console.log(str.slice(-12));
    console.log(str.substring(-12));
    console.log(str.slice(12,24));
    console.log(str.substring(12,24));
    console.log(str.slice(12,-5));
    console.log(str.substring(12,-5));
    console.log(str.slice(-15,22));
    console.log(str.substring(-15,21));
    console.log(str.slice(-12,-15));
    console.log(str.substring(-25,-15));
}

/* String Search() Method */

// search(regexp)

{
    let regex1 = /dog/g;
    let regex2 = /Dog/i;
    let str = "I think Ruth's dog is cuter than your dog!";
    console.log(str.search(regex1));
    console.log(str.search(regex2));
}

    /* String toLowercase() and toUppercase Method */

// toUpperCase()
// toLowerCase()

{

    let str = "I think Ruth's dog is cuter than your dog!";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
}

    /* String replace() and repalaceAll() Method */

// replace(pattern, replacement)
// replaceAll(pattern, replacement
{
     let str = "I think Ruth's dog is cuter than your dog!";
    let regex1 = /dog/g
    console.log(str.replace(regex1 , 'Dog'));
    console.log(str.replaceAll(regex1 , 'Dog'));
}

/* String match() and matchAll() Method */

// match(regexp)
// matchAll(regexp)

{
    let str = "I think Ruth's dog is cuter than your dog!";
    let regex1 = /dog/g
    console.log(str.match(regex1));
    console.log(([...str.matchAll(regex1)]));

    let array = [1,2,3,4,5,6,7]
    let array1 = [...array]
    let array2 = array

    console.log(array);
    console.log(array1);
    console.log(array2);

    array[2] = 10

    console.log(array);
    console.log(array1);
    console.log(array2);
    
}

/* String split() Method */

// split()

{
     let str = "I think Ruth's dog is cuter than your dog!";

     let str1 = str.split('')
     let str2 = str1.reverse()
     let str3 = str2.join('')

     console.log(str1);
     console.log(str2);
     console.log(str3);
     
}

/* String repeat() Method */

{
     let str = "o";
     console.log(str.repeat(10));
}

/* String toString and valueOf Method */

{
    let str = 10

    console.log(str.toString());
    console.log(str.valueOf());

} 
