/* Javascript DateObject() Method */


{
    let today = new Date ()

    console.log(today);

    let todaymili = Date.now()

    console.log(todaymili);


    let days = Date.parse('01 Jan 1970 00:00:01 GMT')

    console.log(days);
    
    
}




{

    let today = new Date ()

    console.log(today);


    let getdata = today.getDate()

    console.log(getdata);
    

    let getmonth = today.getMonth()

    console.log(getmonth);

    let getday = today.getDay()

    console.log(getday);

    let getyear = today.getFullYear()

    console.log(getyear);

    let gethoure = today.getHours()

    console.log(gethoure);

    let getmintes = today.getMinutes()

    console.log(getmintes);

    let getsecond =today.getSeconds()

    console.log(getsecond);
    
    let getmilisconde = today.getMilliseconds()

    console.log(getmilisconde);


    let setdate = today.setDate(15)

   console.log(setdate);

   console.log(today);

   let setmethode = today.setMonth(10)

   console.log(today);

   let sethoure = today.setHours(15)

   console.log(today);

   let setminite = today.setMinutes(15)

   console.log(today);


   let setseconde = today.setSeconds(20)

   console.log(today);


   let setminisecond = today.setMilliseconds(20)

   console.log(today);

   let setfullyer = today.setFullYear(2002)

   console.log(today);

   let datestring = today.toDateString()

   console.log(datestring);

   let isoString = today.toISOString()

   console.log(isoString);

   let jsonstring = today.toJSON()

   console.log(jsonstring);
   
   let tostring = today.toString()

   console.log(tostring);

   let totimestring = today.toTimeString()

   console.log(totimestring);
       
   let toutcsstring = today.toUTCString()

   console.log(toutcsstring);

   let valueof = today.valueOf()

   console.log(valueof);
   

   







   
   

    


    
    
    



    





}