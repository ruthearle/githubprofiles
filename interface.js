$(document).ready(function(){
  $('#username').on('submit', function(e){
    e.preventDefault();
    var url = 'https://api.github.com/users/' +$('#username').val() + '?access_token=8b05c7ab94348109649d260785b0b939731179a9';
    var template = $('#profile-template').html();
    $.get(url, function(user) {
      $('.profile-container').append(Mustache.render(template, user));
    });
  });
  });
