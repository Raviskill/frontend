/* Javascript Array.copyWithin() Method */
{
    console.log("first element");
  
    console.log("second element");
  
    function print() {
      return console.log("third element");
    }
  
    let Intervalid = setInterval( () => {
      print()
    } , 5000)
  
//     // console.log(Intervalid);
  
//     // clearInterval(Intervalid)
    
  
//     // console.log("forth element");
//   }
  
  /* Javascript Callback Function */
  
  
   {
    function callback(){
      return console.log('callback function');
    }
    
    function sum(a , b) {
      // callback()
      return a + b
    }
  }
  
   // console.log(sum(10 , 10));
  
  {
    let callback = () =>{
      return console.log('callback function');
    }
    
    let sum = (a , b , callback) => {
      callback()
      return a + b
    }
    console.log(sum(10 , 10 , callback));
  }
  
  // IIFE Function [immidiately invoked Function Expression]
  
  {
    (
      function sum() {
        return console.log('IIFE Function');
        
      }
    )()
  }
  
  
  {
     const sum = (() =>  {return console.log('2nd IIFE Function');})()
  }