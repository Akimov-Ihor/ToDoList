let arr=[]
let containerToDo=document.getElementById('listCreate');
let listButton=document.getElementById('button-cheaker');
let linesOfTodolist=document.getElementsByClassName('todoItem');


   
function pushArr (){
    let valueInput={
        value:document.getElementById("in").value,
        done:false,
        id:new Date(),
    }
    let idForDiv=valueInput.id
    // console.log(idForDiv);
     arr.push(valueInput.value);
         let element=document.createElement("DIV");
        element.id=`todo-id-${idForDiv.getTime()}`
        // console.log(element);
         containerToDo.appendChild(element).classList.add("todoItem");
         let crtSpan=document.createElement("Span");
        crtSpan.innerHTML=arr[arr.length -1];
        containerToDo.appendChild(element).appendChild(crtSpan);
        let checkingButton=document.createElement('input');
        // console.log(deleteListOfToDo);
        checkingButton.type="checkbox";
        checkingButton.value=false;
        let buttTrash=document.createElement('button');
        buttTrash.onclick = () => deleteListOfToDo(idForDiv.getTime())

        //      console.log(id);
        containerToDo.appendChild(element).appendChild(crtSpan).appendChild(checkingButton).classList.add('button-cheaker');
        containerToDo.appendChild(element).appendChild(crtSpan).appendChild(buttTrash).classList.add('buttonForTrash')
        
        // console.log(valueInput)  
        
    }
    
    let deleteListOfToDo=(id)=>{
        console.log("id", id)
            
            console.log(arr);
            let divForDelete=document.getElementById(`todo-id-${id}`);
            console.log(`todo-id-${id}`)
            console.log("DIV", divForDelete);
             divForDelete.parentNode.removeChild(divForDelete);
             arr.splice(this,1);
             console.log(this);
             console.log(arr);
             
              };
    
        
                 
    
