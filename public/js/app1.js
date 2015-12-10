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
