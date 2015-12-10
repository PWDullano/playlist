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

})
