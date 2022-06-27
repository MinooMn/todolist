let list = document.getElementById('list');
let add = document.getElementById('add-btn');

add.addEventListener('click', addItem);

function addItem () {
    var newItem = document.createElement("li");
    var check = document.createElement("input");
    var text = document.createElement("span");
    var edit = document.createElement("i");
    var remove = document.createElement("i");

    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkbox");
    check.addEventListener("click", function(){
        if (text.style.textDecoration == "line-through")
            text.style.textDecoration = "none";
        else
            text.style.textDecoration = "line-through";
    });

    text.innerHTML = document.getElementById('task').value;
    text.setAttribute("vertical-align", "middle");

    edit.setAttribute("class", "fas fa-pen");
    edit.addEventListener("click", function() {
        editItem(newItem, text, edit);
    });
   
    remove.setAttribute("class", "fas fa-trash-alt");
    remove.addEventListener("click", function(){
        list.removeChild(newItem);
    });

    newItem.append(check, text, edit, remove);

    list.appendChild(newItem);
    task.value = "";
    task.placeholder = "New Item";
}

function editItem(li, text, editIcon) {
    var textEdit = document.createElement("input");
    textEdit.setAttribute("type", "text");
    textEdit.setAttribute("class", "editBox");
    textEdit.value = text.innerHTML;

    var check = document.createElement("i");
    check.setAttribute("class", "fas fa-check");
    check.addEventListener("click", function(){
        li.replaceChild(editIcon, check);
        li.replaceChild(text, textEdit);
        text.innerHTML = textEdit.value;
    });

    li.replaceChild(textEdit, text);
    li.replaceChild(check, editIcon);
}
