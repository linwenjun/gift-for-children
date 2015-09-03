var data = [];
for (var i = 1; i <= 10; i++) {
  data.push({
    title: "Module " + i + " Unit 1",
    path: "2012-english-mp3/m" + i + "_unit1.mp3"
  });
  data.push({
    title: "Module " + i + " Unit 2",
    path: "2012-english-mp3/m" + i + "_unit2.mp3"
  });
  data.push({
    title: "Module " + i + " Words",
    path: "2012-english-mp3/m" + i + "_words.mp3"
  });
}

$(function() {
  data.forEach(function(item) {
    var container = $('<a>').addClass('col-md-4');
    $('<div/>').addClass('media-button').html(item.title).data('src', item.path).appendTo(container)
    container.appendTo('#media-list');
  })

  $('#media-list').on('click', '.media-button', function() {
    $('#player').attr('src', $(this).data('src'));
    $('#player').get(0).play();
    console.log($(this).data('src'));
  })
})
