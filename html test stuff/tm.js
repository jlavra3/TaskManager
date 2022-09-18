
  function fn1() {
    var cls = document.getElementById("class").value;
    var str = document.getElementById("text1").value;
    var str1 = document.getElementById("text2").value;
    var year = str1.substring(0,4);
    var month = str1.substring(5,7);
    var day = str1.substring(8,10);
    var date = month + "/" + day + "/" + year;
    var select = document.getElementById("text3");
    var option = select.options[select.selectedIndex];
    var task = "Adding assignment " + str + " from the class: " + cls + ". Due: " + date + ". This has " + option.id + " priority.";
    alert(task);
  }
