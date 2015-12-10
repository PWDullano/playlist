var getter;

$(document).ready(function(){
      comet = $.ajax({
        url: 'https://lit-fortress-6467.herokuapp.com/post',
        method: 'POST',
      });

      comet.done(function(payload){
        console.log(payload)
      })
    })

$(document).ready(function(){
  comet = $.ajax({
    url: 'https://lit-fortress-6467.herokuapp.com/object',
    method: 'GET',
    dataType: 'json'
  })

  comet.done(function(payload){
  var gett = payload['results']
  for (var i = 0; i < 3; i++) {
  var randd = Math.random()
    if(randd <= .2){
      $('#container').append('<img src="images/' + gett[0]['cover_art'] + ' " />')
    } else if (randd <= .4){
      $('#container').append('<img src="images/' + gett[1]['cover_art'] + ' " />')
    } else if (randd <= .6){
      $('#container').append('<img src="images/' + gett[2]['cover_art'] + ' " />')
    } else if (randd <= .8){
      $('#container').append('<img src="images/' + gett[3]['cover_art'] + ' " />')
    } else {
      $('#container').append('<img src="images/' + gett[4]['cover_art'] + ' " />')
    }

  }
})
})
