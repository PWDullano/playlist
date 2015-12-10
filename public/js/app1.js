$(document).ready(function(){
    comet = $.ajax({
      url: 'https://lit-fortress-6467.herokuapp.com/object',
      method: 'GET',
      dataType: 'json'
    })

    comet.done(function(payload){
      var gett = payload['results']
      gett.forEach(function(e, i){
        var myId= 'cover_art' + i
        $('#albums').append('<div id='+myId+'> <img class="covers" src="images/' + gett[i]['cover_art'] + ' " />')+'</div';
      })
  })

    comet.done(function(list){
      var gets = list['results']
      $(document).on('click','#cover_art0',function(){
        $('.select').append("<option>" + gets[0]['artist'] + ': ' + gets[0]['title'] + "</option>")
      })
  })

    comet.done(function(list){
      var gets = list['results']
      $(document).on('click','#cover_art1',function(){
        $('.select').append("<option>" + gets[1]['artist'] + ': ' + gets[1]['title'] + "</option>")
      })
  })

    comet.done(function(list){
      var gets = list['results']
      $(document).on('click','#cover_art2',function(){
        $('.select').append("<option>" + gets[2]['artist'] + ': ' + gets[2]['title'] + "</option>")
      })
    })

    comet.done(function(list){
      var gets = list['results']
      $(document).on('click','#cover_art3',function(){
        $('.select').append("<option>" + gets[3]['artist'] + ': ' + gets[3]['title'] + "</option>")
      })
    })

    comet.done(function(list){
      var gets = list['results']
      $(document).on('click','#cover_art4',function(){
        $('.select').append("<option>" + gets[4]['artist'] + ': ' + gets[4]['title'] + "</option>")
      })
    })

})

$('#buttony').click(function(){
  $('option').remove();
})



$(document).ready(function(){
      comet = $.ajax({
        url: 'https://lit-fortress-6467.herokuapp.com/post',
        method: 'POST',
      });

      comet.done(function(payload){
        $('#buttone').click(function(picky){
          var picky = document.getElementsByClassName('select')[0].options;
          var submit = [];
          for (var i = 0; i < picky.length; i++) {
            if(picky[i].selected){
              submit += picky[i].value + ', ';
            }
          }
          console.log(payload)
          console.log(submit);
        })

      })
    })

// $(document).ready(function(){
//     comet = $.ajax({
//       url: 'https://lit-fortress-6467.herokuapp.com/object',
//       method: 'GET',
//       dataType: 'json'
//     })
//
//   comet.done(function(list){
//     var gets = list['results']
//     $(document).on('click','#cover_art0',function(){
//       $('.select').append("<option>" + gets[0]['artist'] + ': ' + gets[0]['title'] + "</option>")
//     })
//   })
// })
