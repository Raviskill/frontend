 /* Javascript Array And It's Methods */

// Array.prototype.copyWithin()

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// copyWithin(target, start)
// copyWithin(target, start, end)



{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

     let array1 = array.copyWithin(1 , 3)

     console.log(array1);

     let array3 = array.copyWithin(1 , 0 ,5)

     console.log(array3);
}

// Array.prototype.entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// entries()


{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let array1 = array.entries()

    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);


    


}



// Array.prototype.every()

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every(callbackFn)
// every(callbackFn, thisArg)


{
    let num =['10','20','30','40','50']

    let arr =num.every((item)=> item <=30)

    console.log(arr);
    

}


// Array.prototype.fill()

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)



{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let array1 = array.fill(1 , 3)

    console.log(array1);

    let array2 = array.fill('1' , 3 ,5)

    console.log(array2);
    

}


// Array.prototype.filter()

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function...

// filter(callbackFn)
// filter(callbackFn, thisArg)



{
    let num = [10 , 20 , 30 , 40 , 50]

    let arry1 = num.filter((num)=>num>20)

    console.log(arry1);

    let frught = ['mago','kivi','banana','orenge','apple']

    let array2 = frught.filter((Char)=>Char.length>=5)

    console.log(array2);

        let proffesion = [
        {
            name:'raj',
            occu:'doctor',
            type:'orthopedic',
            age:20
        },
        {
            name:'ram',
            occu:'doctor',
            type:'phycological',
            age:25
        },
        {
            name:'meet',
            occu:'gardener',
            type:'service',
            age:30
        },
        {
            name:'crunal',
            occu:'gardener',
            type:'cutting',
            age:32
        },
        {
            name:'rohan',
            occu:'developer',
            type:'frontend',
            age:18
        }
    ]

    let array3 = proffesion.filter((data) => data.age <= 30)

    let array4 = proffesion.filter((data) => data.occu === 'doctor')

    console.log(array3);

    console.log(array4);
    



    
}


// Array.prototype.find()

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)

{


    let num = [10 , 20 , 30 , 40 , 50]

    let arry1 = num.find((num)=>num<20)

    console.log(arry1);




}

// Array.prototype.findIndex()

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)



{

    let num = [10 , 20 , 30 , 40 , 50]

    let arry1 = num.filter((num)=>num  =  20)

    console.log(arry1);


    let arry2 = num.filter((num)=>num>20)

    console.log(arry1);


}


// Array.prototype.findLast()

// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

{
    const array1 = [1 , 12, 8, 130 , 45];

    let array2  = array1.findLast((data) => data > 4)

    console.log(array2);
    
} 



