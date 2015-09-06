var data = [];
var currentIdx = -1;
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



function play(i) {
  console.log(i);
  var i = i || 0;
  if (currentIdx === i) {
    return;
  }
  currentIdx = i;
  $('#media-list tr.success').removeClass('success');
  $('#media-list tr').eq(i).addClass('success');
  $('#player').attr('src', data[currentIdx].path);
  $('#player').get(0).play();
}

$(function() {
  data.forEach(function(item, idx) {
    var tr = $('<tr/>');
    $('<td>').html(idx + 1).appendTo(tr);
    $('<td>').html(item.title).appendTo(tr);
    $('<td>').html('<a class="play">播放</a>').appendTo(tr);
    $('<td>').html('<a href="' + item.path + '">下载</a>').appendTo(tr);
    tr.appendTo('#media-list');
  })

  $('#media-list').on('click', '.play', function() {
    play($(this).closest('tr').index());
  })

  var eventList = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waitin'
  ]

  eventList.forEach(function(item) {
    $('#player').on(item, function() {
      console.log(this.buffered.start(0));
      console.log(this.buffered.end(0));
    })
  })


})
