$(function(){
        $('#hide').click(function(){
            $('#heading').hide()
        })
    })


    $(function(){
        $('#show').click(function(){
            $('#heading').show()
        })
    })


    $(function(){
        $('#togel').click(function(){
            $('#heading').toggle()
        })
    })


    $(function(){
        $('#but').click(function(){
            $('#box').css({
                backgroundColor:'green',
                    height:'500px',
                     width:'500px'
            })
        })
    })

$(function(){
    $('#fade').click(function(){
        $('#div-1').fadeIn('slow')
        $('#div-2').fadeIn('fast')
        $('#div-3').fadeIn(2000)
        $('#div-4').fadeIn(6000)
        $('#div-5').fadeIn(10000)
    })
})



