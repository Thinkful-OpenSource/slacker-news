// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){
  $("#suggestEdit").click(function(){
    $("#linkEdit").show(); 
  });
  $("#linkEditSubmit").click(function(){ 
    var changes = {
      title: $("input[name='title']").val(),
      keywords: $("input[name='tags']").val()
    }
    
    $.ajax({
        url: '/link',
        type: 'POST',
        data: {link: changes}
      });
  });
});