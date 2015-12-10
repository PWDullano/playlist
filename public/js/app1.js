$(document).ready(function(){
    comet = $.ajax({
      url: 'https://lit-fortress-6467.herokuapp.com/object',
      method: 'GET',
      dataType: 'json'
    });

    comet.done(function(payload){
      console.log(payload)
    })
  })
