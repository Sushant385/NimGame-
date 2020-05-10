function func() {
  var name1 = document.getElementById("pname1").value;
  var name2 = document.getElementById("pname2").value;
  localStorage.setItem("p1name",name1); 
  localStorage.setItem("p2name",name2);
  return false;
}
