// Business logic://


$(document).ready(function() {
  $("form#names").submit(function(event) {
    event.preventDefault();
  var names= $("input#name1").val();
  $("#name").text(names);
  $(".names").show();
});
});
$(document).ready(function() {
  $("#font").submit(function(event) {
    event.preventDefault();
  var q1= parseInT(("input:[name=question1]:checked").val())$;
  $("#display").text(q1);
});
});
