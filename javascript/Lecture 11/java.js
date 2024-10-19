// java scripte set object


{
    let set = new Set();

    set.add(40);
    set.add(45);
    set.add(50);

console.log(set);

}


{
    let set = new Set();

    set.add(40);
    set.add(45);
    set.add(50);

    set.clear();

console.log(set);


}

{
    let set = new Set();

    set.add(40);
    set.add(45);
    set.add(50);

console.log(set.delete);


}


{
    let set1 = new Set([ 5 , 4 , 6 , 9 , 7])
    let set2 = new Set([ 5 , 4 , 6 ])

    console.log(set1.difference(set2));
    
}

{

    
    let set1 = new Set([ 5 , 4 , 6 , 9 , 7])
    let set2 = new Set([ 5 , 4 , 6 ])

    console.log(set1.intersection(set2));

}
// isDisjointFrom
{

    
    let set1 = new Set([ 5 , 4 , 6 , 9 , 7])
    let set2 = new Set([ 18 , 15 , 11 ])

    console.log(set1.isDisjointFrom(set2));

        

}
{

    
    let set1 = new Set([ 5 , 4 , 6 , 9 , 7])
    let set2 = new Set([ 5 , 15 , 11 ])

    console.log(set1.isDisjointFrom(set2));

        

}
// isSubsetOf
{

    
    let set1 = new Set([ 5 , 4 , 22])
    let set2 = new Set([ 5 , 4 , 6 ,9  , 7 , 15 ,20])

    console.log(set1.isSubsetOf(set2));

        

}
{

    
    let set1 = new Set([ 5 , 4 , 6])
    let set2 = new Set([ 5 , 4 , 6 ,9  , 7 , 15 ,20])

    console.log(set1.isSubsetOf(set2));

        

}

// isSupersetOf

{

    
    let set2 = new Set([ 5 , 4 , 6 ,9  , 7 , 15 ,20])
    let set1 = new Set([ 5 , 4 , 22])

    console.log(set2.isSubsetOf(set1));

        

}
{

    
    let set2 = new Set([ 5 , 4 , 6 ,9  , 7 , 15 ,20])
    let set1 = new Set([ 5 , 4 , 6])

    console.log(set2.isSubsetOf(set1));

        

}
