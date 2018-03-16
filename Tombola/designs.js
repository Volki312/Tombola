var input_rows;
var input_cols;

function makeGrid() {
  var table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  while(table.rows.length > 0)
    table.deleteRow(0);
  input_rows = 9;
  input_cols = 10;
  for (var i = 0; i < input_rows; i++) {
    var row_elem = table.insertRow(i);
    row_elem.setAttribute("class", "row");
    for (var j = 0; j < input_cols; j++) {
      var cell= row_elem.insertCell(j);
      cell.innerHTML = (i*10)+j+1;
      cell.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = "#f46810";
      });
      // cell.addEventListener('click', function(evt) {
      //   evt.target.style.backgroundColor = "#f46820";
      // });
    }
  }
  return false;
}
  makeGrid();
