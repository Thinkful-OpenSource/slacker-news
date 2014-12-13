// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  
var bug = {
  user : $("input[name='user']"),
  message : $("input[name='message']"),
  type : $("input[name='issue']")
}
 
$.ajax({
  url: '/bug',
  type: 'POST',
  data: bug
});
});