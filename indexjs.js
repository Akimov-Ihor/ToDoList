let arr = []
let containerToDo = document.getElementById('listCreate');
let listButton = document.getElementById('button-cheaker');
let linesOfTodolist = document.getElementsByClassName('todoItem');

const addToDo = () => {
    let todoObj = {
        value: document.getElementById("in").value,
        done: false,
        id: new Date().getTime(),
    }

    arr.push(todoObj);

    let element = document.createElement("DIV");
    element.id = `todo-id-${todoObj.id}`
    element.classList.add("todoItem");
    containerToDo.appendChild(element)

    let crtSpan = document.createElement("Span");
    crtSpan.innerHTML = arr[arr.length - 1].value;
    element.appendChild(crtSpan);
    
    let checkingButton = document.createElement('input');
    checkingButton.type = "checkbox";
    checkingButton.value = false;
    checkingButton.classList.add('button-cheaker');

    let buttTrash = document.createElement('button');
    buttTrash.onclick = () => deleteListOfToDo(todoObj.id)
    buttTrash.classList.add('buttonForTrash')

    crtSpan.appendChild(checkingButton)
    crtSpan.appendChild(buttTrash)

}

let deleteListOfToDo = (id) => {
    arr = arr.filter(elem => elem.id!==id );
    let divForDelete = document.getElementById(`todo-id-${id}`);
    divForDelete.parentNode.removeChild(divForDelete);
};