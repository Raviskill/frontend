 /* Javascript Object() / Object() Method */

 {

 let NewObjecte1 = new Object()
 let NewObjecte2 = {}
 console.log(NewObjecte1);
 console.log(NewObjecte2);
 console.log(NewObjecte1 == NewObjecte2);
 }


 {

    let NewObjecte1 = {obj1:"value 1", obj2: "value 2",obj3:"value 2"};
    console.log(NewObjecte1);
    console.log(NewObjecte1.obj1);
    console.log(NewObjecte1["obj2"]);
    console.log(NewObjecte1["obj3"]);
 }


 {
    let NewObjecte1 = {obj1:"value 1", obj2: "value 2",obj3:"value 3"};
    console.log(NewObjecte1);
    delete NewObjecte1.obj2;
    console.log(NewObjecte1);


 }


  // Object.assign()
{

    let NewObjecte1 = {obj1:"value 1", obj2: "value 2",obj3:"value 2"};
    let NewObjecte2 = {obj1:"value 4", obj2: "value 5",obj3:"value 6"};
    let NewObjecte3 = {obj1:"value 7", obj2: "value 8",obj3:"value 9"};

    let NewObjecte4 = Object.assign(NewObjecte1,NewObjecte2,NewObjecte3);

    console.log(NewObjecte4);
    console.log(NewObjecte1);
    console.log(NewObjecte2);
console.log(NewObjecte3);

}


  //Object.create()

  {
    const profile =
    {
       name: "jone",
       age : function()
       {
      console.log(`I am ${this.ages} years old and name is ${this.name}`);
       }

    };

    const profile3 = Object.create(profile);

    profile3.ages = 20;

    console.log(profile3);

    console.log(profile3.age());
    
    
  }


  // Object.defineProperties()

  {
    const object1 = {};

    Object.defineProperties(object1, {
      property1: {
        value: 42,
        writable: true,
      },
      property2: {
        value: 50,
        writable: true,
      },
    });
  
    console.log(object1.property2);
    
  }

    // Object.defineProperty()
    {
        const object1 = {};

        Object.defineProperty(object1,'property1',{ 
            value: 70,
            writable: false,
          }),
        
        console.log(object1.property1)
    }


    // Object.entries()
    {
        let object1 = {
            name: "John",
            age: 30,
            city: "New York",
        }
    
        for(const[key , value] of Object.entries(object1)){
            console.log(`${key} : ${value}`);
        }
    }


    // Object.freeze()
    {
    

        let object1 = {
            name: "raj",
            age: 30,
            city: "New York",
        }
    
        let freeze = Object.freeze(object1);
    
        console.log(Object.isFrozen(freeze));
    
        object1.name = "Peter";
        console.log(object1);
    }

    // Object.getOwnPropertyDescriptor()
{
    const object1 ={
        property1
    }

    const discripesan1 = Object.getOwnPropertyDescriptor (object1,property1)
    

}



