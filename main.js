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

  data.forEach(function(item, idx) {
    var tr = $('<tr/>');
    $('<td>').html(idx + 1).appendTo(tr);
    $('<td>').html(item.title).appendTo(tr);
    $('<td>').html('<a class="play" data-src="'+item.path+'">播放</a>').appendTo(tr);
    $('<td>').html('<a href="'+item.path+'">下载</a>').appendTo(tr);
    // tr.append('<td>').html(item.title);
    // tr.append('<td>').html('<a>');
    tr.appendTo('#media-list');
  })

  $('#media-list').on('click', '.play', function() {
    $('#player').attr('src', $(this).data('src'));
    $('#player').get(0).play();
    console.log($(this).data('src'));
  })
})
