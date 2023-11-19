function ajouter() {
  let tr = document.createElement("tr");
  tr.class = "linge";

  document.getElementById("table").appendChild(tr);

  var case1 = document.createElement("td");
  case1.innerHTML = prompt("id:");
  tr.appendChild(case1);
  var case2 = document.createElement("td");
  case2.innerHTML = prompt("nome:");
  tr.appendChild(case2);
  var case3 = document.createElement("td");
  case3.innerHTML = prompt("date:");
  tr.appendChild(case3);

}
