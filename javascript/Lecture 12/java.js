// java script string mathode

{
    let str = "This is the string method in javascript"

    console.log(str);
    console.log(str.length);


}

// string atob() methde

// at(index)
{

    let str = "this is a new string!"

    let ans = str.at(5);
    console.log(ans);

    let ans1 = str.at(10);
    console.log(ans1);


    let ans3 = str.at(-2);
    console.log(ans3);

}

// charAt(index)

{
    str = "this is a charat mathode!"

    let ans = str.charAt(5)
    console.log(ans);

    let ans1 = str.charAt(-5)
    console.log(ans1);

}

// // charCodeAt(index)

{

    str = "this is a charCodeAt mhoted"


    console.log(str.charCodeAt(10));
    console.log(str.charCodeAt(-10));

}



// /* String codePointAt() Method */

// // codePointAt(index)

{
    str = "this is a codepoinAt methode"

    console.log(str.codePointAt(10));
    console.log(str.codePointAt(-10));


}



// /* String concat() Method */

// // concat()
// // concat(str1)
// // concat(str1, str2)
// // concat(str1, str2, /* …, */ strN)



{

    let str1 = "hello"
    let str2 = "javascriept"

    console.log(str2.concat(str1));

    console.log(str1.concat(str2));


}


/* String StartWith() / EndWith() Method */

// startsWith(searchString)
// startsWith(searchString, position)

// endsWith(searchString)
// endsWith(searchString, endPosition)


{
    let str = "This is a StratWithe methode"

    console.log(str.startsWith("T"));
    console.log(str.startsWith('h'));
    console.log(str.startsWith('i', 2));
    console.log(str.endsWith('!'));
    console.log(str.endsWith('t'));
    console.log(str.endsWith('t', -1));


}


/* String includes() Method */

// includes(searchString)
// includes(searchString, position)
// case-sensitive 


{
    let str ="this is include methodd"

    console.log(str.includes('this'));
    console.log(str.includes('z'));
    console.log(str.includes('is',3));
    console.log(str.includes('is',5));
    console.log(str.includes('is',6));
    console.log(str.includes('is',-20));

}

// * String indexOf() And lastIndexOf() Method */

// indexOf(searchString)
// indexOf(searchString, position)
// case-sensitive 


// lastIndexOf(searchString)
// lastIndexOf(searchString, position)
// case-sensitive 


{
       let str = 'Dog is very cute but dog is danger and Cat is very cute but cat is very dirty!'


       console.log(str.indexOf("dog"));
       console.log(str.indexOf("Dog"));
       console.log(str.indexOf("is"));
       console.log(str.indexOf("is",5));
       console.log(str.indexOf("is",61))       

}
