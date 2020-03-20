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
    crtSpan.id = new Date().getTime();
    crtSpan.classList.add('SpanWithArrValue')


    let checkingButton = document.createElement('input');
    checkingButton.type = "checkbox";
    checkingButton.value = false;
    checkingButton.id = new Date().getTime();
    checkingButton.classList.add('button-cheaker');
    checkingButton.onclick = () => overlineCheck(checkingButton, crtSpan)


    let buttTrash = document.createElement('button');
    buttTrash.onclick = () => deleteListOfToDo(todoObj.id)
    buttTrash.classList.add('buttonForTrash')


    let editButton = document.createElement('button');
    editButton.textContent = "Edit"
    editButton.classList.add('buttonForEdit')
    editButton.onclick = () => showEditInput(hiddenIpuntForEdit, hiddenChangeButton)

    let hiddenIpuntForEdit = document.createElement('input');
    hiddenIpuntForEdit.classList.add('hiddenInput');


    let hiddenChangeButton = document.createElement('button');
    hiddenChangeButton.classList.add('changeButtonLine');
    hiddenChangeButton.textContent = "Change";
    hiddenChangeButton.onclick = () => workWithInputChange(hiddenIpuntForEdit, hiddenChangeButton, crtSpan)



    element.appendChild(checkingButton)
    element.appendChild(buttTrash)
    element.appendChild(editButton);
    element.appendChild(hiddenIpuntForEdit);
    element.appendChild(hiddenChangeButton);



}
let deleteListOfToDo = (id) => {
    arr = arr.filter(elem => elem.id !== id);
    let divForDelete = document.getElementById(`todo-id-${id}`);
    divForDelete.parentNode.removeChild(divForDelete);
};


function overlineCheck(e, span) {
    if (e.checked !== false) {
        span.style.textDecorationLine = "line-through";
    }
    else {
        span.style.textDecorationLine = 'none';
    }
}
function showEditInput(input, button) {
    //  console.log(input);
    //  console.log(button);
    input.style.display = 'block';
    button.style.display = "block";


}
function workWithInputChange(hidenInput, button, oldinputValue) {
    // console.log(hidenInput);
    // console.log(button);
    // console.log(oldinputValue);
    oldinputValue.innerHTML = hidenInput.value;
    button.onclick = () => varnish(hidenInput, button);
}
function varnish(a, b) {
    a.style.display = 'none';
    b.style.display = 'none';

}