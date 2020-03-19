let arr = []
let containerToDo = document.getElementById('listCreate');
let listButton = document.getElementById('button-cheaker');
let linesOfTodolist = document.getElementsByClassName('todoItem');
// let SpanTest=document.getElementsByClassName("SpanWithArrValue")

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
    crtSpan.id=new Date().getTime();
    crtSpan.classList.add('SpanWithArrValue')
    
    
    let checkingButton = document.createElement('input');
    checkingButton.type = "checkbox";
    checkingButton.value = false;
    checkingButton.id=new Date().getTime();
    checkingButton.classList.add('button-cheaker');
    checkingButton.onclick = () => overlineCheck(checkingButton,crtSpan)
    

    let buttTrash = document.createElement('button');
    buttTrash.onclick = () => deleteListOfToDo(todoObj.id)
    buttTrash.classList.add('buttonForTrash')
    
    element.appendChild(checkingButton)
    element.appendChild(buttTrash)

}

let deleteListOfToDo = (id) => {
    arr = arr.filter(elem => elem.id!==id );
    let divForDelete = document.getElementById(`todo-id-${id}`);
    divForDelete.parentNode.removeChild(divForDelete);
};


function overlineCheck(e,span){
    if( e.checked !== false){
        span.style.textDecorationLine="line-through";
    }
    else{
        span.style.textDecorationLine='none';
    }
}

