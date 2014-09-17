$(document).ready(function(){
  $('#add-profile').on('submit', function(e){
    e.preventDefault();
    var url = 'https://api.github.com/users/' +$('#username').val() + '?access_token=8b05c7ab94348109649d260785b0b939731179a9';

    $.get(url, function(user) {
      var template = $('template').html();
      var html = Mustache.render(template, user);
      $('#profile-container').append(html);
      console.log(html);
    }).fail(function(){
      alert('Could not find user.');
    }).always(function() {
      $('#username').val(' ');
    })
  })
})
