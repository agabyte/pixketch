$(document).ready(function(){
  var size = 16;
  var table = $("<table></table>");
  function generate_table(size){
    var tblBody = $("<tbody></tbody>");

    //creating all cells
    for(var i = 0; i < size; i++){
      var row = $("<tr></tr>");
      for(var j = 0; j < size; j++){
        //create a <td> element and a text node, make the text
        //node the contentns of the <td>, and put the <td> at
        //the end of the table row
        var cell = $("<td> </td>");
        row.append(cell);
      }
      //add the row to the end of the table body
      tblBody.append(row);
    }
    //put the <tbody> in <table>
    table.append(tblBody);
    //appends <table> into <body>
    $("body").append(table);
    //sets the border attribute of table to 2
    // $("table").attr("border","2");
  }
  //generate the table
  generate_table(size);


  $("td").hover(function(){
    $(this).css("background","#6A50A7");
  });

  $(".button1").click(function(){
    $("td").hover(function(){
      $(this).css("background","#6A50A7");
    });
  });

  $(".button2").click(function(){
    location.reload();
  });

  $(".button3").click(function(){
    location.reload();
  });

});
