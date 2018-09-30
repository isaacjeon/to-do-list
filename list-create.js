var newItem = document.getElementById("newItem");
var add = document.getElementById("add");
var itemList = document.getElementById("itemList");

add.onclick = function(){addItem()};

function addItem(){
  if (newItem.value.length > 0){
    var button = document.createElement("button");
    var li = document.createElement("li");
    button.className = "delete";
    button.appendChild(document.createTextNode("X"));
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(button);
    itemList.appendChild(li);
    newItem.value = "";

    button.onclick = function(){
      itemList.removeChild(li);
    }
  }
}

