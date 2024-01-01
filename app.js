const list = document.querySelector('#list');
const note = document.querySelector('#note').value;



eventListeners()
function eventListeners(){
    document.querySelector('#form').addEventListener('submit', newNote)

    document.querySelector('#list').addEventListener('click', removeNote)
}

function newNote(e){
    e.preventDefault()    
    const remNote = document.createElement('a');
    
    remNote.textContent = 'remove';
    remNote.classList = 'remove-this'
    
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(note))

    li.appendChild(remNote)

    list.appendChild(li)
}
function removeNote(e){
    if(e.target.classList.contains('remove-this')){
        e.target.parentElement.remove()

    }
}