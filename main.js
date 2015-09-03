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
console.log(data);
$(function() {
  data.forEach(function(item) {
    $('#media-list').append('<tr><td>' + item.title + '</td><td><audio src="' + item.path + '" controls="true" /></td></tr>')
  })
})
