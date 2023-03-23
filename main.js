let addToDoButtom = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let removeAllButton = document.getElementById('removeAll')



addToDoButtom.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

