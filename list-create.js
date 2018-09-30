var newItem = document.getElementById("newItem");
var add = document.getElementById("add");
var itemList = document.getElementById("itemList");

newItem.onclick = function() {addItem()};

function addItem(){
  var button = document.createElement("button");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("X"));
  li.appendChild(document.createTextNode(newItem.value));
  itemList.appendChild(button);
  itemList.appendChild(li);
  newItem.value = "";
}
