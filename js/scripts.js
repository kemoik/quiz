//BUSINESS LOGIC
$(document).ready(function() {
    $("form#names").submit(function(event) {
    event.preventDefault();
//UI LOGIC
    var names= $("input#name1").val();
    $("#name").text(names);
    $(".names").show();
  });
//BUSINESS LOGIC
    $("form#font").submit(function(event) {
      event.preventDefault();
      var qst1 = parseInt($("input:radio[name=question1]:checked").val());
      var qst2 = parseInt($("input:radio[name=question2]:checked").val());
      var qst3 = parseInt($("input:radio[name=question3]:checked").val());
      var qst4 = parseInt($("input:radio[name=question4]:checked").val());
      var qst5 = parseInt($("input:radio[name=question5]:checked").val());
      var results =(qst1 + qst2 + qst3 + qst4 + qst5 );
//UI LOGIC
      $("#display").text(results)
      var exam = (results);
      if (exam >= 80) {
        alert("EXCELLENTLY PASSED");
      }else if (exam >= 50 && exam <= 80) {
        alert("FAIRLY PASSED")
      }else {
        alert("POORLY DONE NEED TO RETAKE")
      }
    });
});
