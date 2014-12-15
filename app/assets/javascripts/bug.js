// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  $("#bugButton").click(function(){
      var bug = {
         user : $("input[name='user']").val(),
         message : $("#bugMessage").val(),
        type : $("input[name='issue']:checked").val()
      }
 
      $.ajax({
        url: '/bug',
        type: 'POST',
        data: {bug: bug}
      });
   });
});