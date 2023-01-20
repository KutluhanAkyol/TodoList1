let addBTN= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let txtText=document.getElementById('txtText')
let clearBtn=document.getElementById('clearToDo')

addBTN.addEventListener('click', function(){
    let parag = document.createElement('p')
    parag.classList.add('parag-style')
    toDoContainer.appendChild(parag);
    parag.innerHTML=txtText.value;
    txtText.value="";

    parag.addEventListener('click', function(){
        parag.style.textDecoration = 'line-through';
    })
    parag.addEventListener('dblclick', function(){
        toDoContainer.removeChild(parag)
    })

    clearBtn.addEventListener('click', function(){
        parag.remove()
    })
})