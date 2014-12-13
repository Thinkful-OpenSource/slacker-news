// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){
  function commifyKeywords(keywords){
    var words=[],i=0;
    for(i=0;i<keywords.length;i++){
      words.push(keywords[i].name);
    }
    return words.join(', ');
  }
  
  $('input').keyup(function(){
    if ($(this).val().length > 2){
      var term = $(this).val();
      $.get('/search.json', {term:term}, function (data) {
        var $list = $('#searchResults > ul'), i=0, links = data.links;
        $list.empty();
        for(i=0;i<links.length;i++){
          $list.append(
            $('<li/>').attr('class', 'result').append(
              $('<a/>').attr('href', links[i].url).html(links[i].title),
              $('<br>'),
              $('<p/>').html(commifyKeywords(links[i].keywords)),
              $('<a/>').attr('class', 'moreInfo').attr('href', '/link/' + links[i].id).html('Show More')
            )
          );
        }
      });
   }
  });
  var addLink = $('#addLink');
  
  addLink.mouseenter(function(){
    $(this).html("Add new Link");
  })
  addLink.mouseleave(function(){
    $(this).html("+");
  })
  addLink.click(function(){
    $('#addLinkForm').show();
  })
  $('#addLinkForm p').click(function(){
    $('#addLinkForm').hide();
  })
  $('#linkAddSubmit').click(function(){
    var newLink = {
      
    }
    $.ajax({
        url: '/link',
        type: 'POST',
        data: {link: newLink}
      });
  })
  
});