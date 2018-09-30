var newItem = document.getElementById("newItem");
var add = document.getElementById("add");
var itemList = document.getElementById("itemList");

add.onclick = function(){addItem()};

function addItem(){
  if (newItem.value.length > 0){
    var button = document.createElement("button");
    var li = document.createElement("li");
    button.appendChild(document.createTextNode("X"));
    li.appendChild(button);
    li.appendChild(document.createTextNode("  "));
    li.appendChild(document.createTextNode(newItem.value));
    itemList.appendChild(li);
    newItem.value = "";

    button.onclick = function(){
      itemList.removeChild(li);
    }
  }
}

