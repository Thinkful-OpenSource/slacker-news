// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){
  $('input').keyup(function(){
    if ($(this).val().length > 2){
      var term = $(this).val();
      $.get('/search.json', {term:term}, function (data) {
        console.log(data);
      });
   };
  });
});