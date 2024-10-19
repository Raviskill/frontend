/* Javascript Reguler Expression */


let demo = function () {
    return console.log("Function Body");
  };



  demo();

  let con = new Function('a' , 'b' , `return console.log("Constructor Function")`)

  console.log(con());


  {
    let regEx = /[y]/
  let regEx1  = /[0-9]{2 , 4}/gm
  let regEx2 = /ma+n/
  let regEx3 = /2$/

  let result = regEx.test('hi ,  how are you')
  let result1 = regEx.test('00123')
  let result2 = regEx.test('man')
  let result3 = regEx.test(212)


  console.log(result);
  console.log(result1);
  console.log(result2);
  console.log(result3);




  }