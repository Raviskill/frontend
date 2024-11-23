
// Exercise - 1 - Check if jQuery is loaded


// if(jQuery === "undefined")
//         {
//         console.log("jQuery not add");
//         }
//     else{
//         console.log("jQuery add");
        
//     }

// Exercise - 2 - If Page is too long scroll to the Top


// $(function(){
//     $('#btn').click(function(){
//         $('html,body').animate({
//             scrollTop: 0
//         },2000)
//     })
// })


// Exercise - 3 - Animate width and height of a button


// $(function(){
//         $('.but').click(function(){
//             $('.box').animate({
//                 height: "300px",
//                 width: "300px",
//             },1000);
//         })
//     })

// Exercise - 4 - FadeIn your boxes


// $(function(){
//             $('.tog').click(function(){
//                 $('.tox1').fadeToggle(1000);
//                 $('.tox2').fadeToggle(2000); 
//                 $('.tox3').fadeToggle(3000);  
//             })
//         })

// / <!-- Exercise - 5 - Clickable button after checking the box -->

// $(document).click(function() {
//     $('#checkbox').change(function() {
//       if($(this).is(':checked')) {
//         $('#submit').prop('disabled', false); 
//       } else {
//         $('#submit').prop('disabled', true);
//       }
//     });
//   });

  

// <!-- Exercise - 6 - Letting Users to print some documents -->

// {
//     $(function () {
//         $("#print").click(function () {
//            window.print();
//            return false;
//         });
//     });
// }



// <!-- Exercise - 7 - Don't let username to be too long -->

// $(document).click(function() {
//     const mlength = 15; 
  
//     $('#username').on('input', function() {
//       const username = $(this).val();
  
//       if (username.length > mlength) {
//         $('#usernameError').show(); 
//       } else {
//         $('#usernameError').hide(); 
//       }
//     });
//   });


// <!-- Exercise - 8 - Forget to bold words -->
{
    // $('#btn').click(function() {
    //   let text = $('#text').html();
    //   let boldText = text.replace(/bold/g, '<strong>bold</strong>');
    //   $('#text').html(boldText);
    // });
}
    
// Exercise - 9 - Adding new division


// $(function(){
//     $("#addDiv").click(function(){
//         $("#container").append("<div>New Division</div>");
//     });
// });

// Exercise - 11 - Add element within ul list


// $(function(){
//     $("#bbut").click(function(){
//         $("#tp").prepend("<li>naside</li>")
//     })
// })


// <!-- Exercise - 10 - Select values from a JSON object using jQuery -->

// $(document).click(function() {
//     const user = {
//       "name": "John Wick",
//       "age": 29,
//       "email": "ravichavda@gmail.com"
//     };
  

//     $('#data').click(function() {
//       $('#name').text("Name: " + user.name);
//       $('#age').text("Age: " + user.age);
//       $('#email').text("Email: " + user.email);
//     });
//   });
