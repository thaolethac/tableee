const button = document.getElementById("button");
function myFunctionSearch() {
  var td, text, i;
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var list = document.getElementById("addtable");
  var tr = list.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      text = td.textContent || td.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  console.log(filter);
}
