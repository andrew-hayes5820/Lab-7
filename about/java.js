// Execute this function when DOM ready
$(function(){

  /*when clicking listed item, change background colour*/
      $('li').click(function() {
          $(this).css('background-color', '#456FFF').html('Roadhouse!');
      });
});
