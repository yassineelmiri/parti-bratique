function ajouter() {
//   let tr = document.createElement("tr");
//   tr.class = "linge";

//   document.getElementById("table").appendChild(tr);

//   var case1 = document.createElement("td");
//   case1.innerHTML = prompt("id:");
//   tr.appendChild(case1);
//   var case2 = document.createElement("td");
//   case2.innerHTML = prompt("nome:");
//   tr.appendChild(case2);
//   var case3 = document.createElement("td");
//   case3.innerHTML = prompt("date:");
//   tr.appendChild(case3);

var i = prompt("id :");
var nome = prompt("nome :");
var date = prompt("date :");

document.getElementById("tab").insertAdjacentHTML("afterend",'<tr><th>'+i+'</th><th>'+nome+'</th><th>'+date+'</th></tr>')

}
