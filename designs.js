

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//Select color input
const color = document.querySelector('#colorPicker');

//Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const grid = document.querySelector('#pixelCanvas');

function makeGrid() {

    //To clear the old grid first
    grid.innerHTML = '';
    let tr, td;

    //create table:create tr(table row) and td(table cell)and add td to tr and tr to table
    for (let row= 0; row < gridHeight.value; row++) {
        tr = document.createElement('tr');
        grid.appendChild(tr);
        for (let column = 0; column < gridWidth.value; column++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    grid.addEventListener('click', function(event) {
        event.preventDefault();
        // When canvas is being clicked, check that event.target element’s .nodeName to see if it’s TD，if yes, then change color.
        //'TD' capitalized because element.tagName returns upper case for DOM trees that represent HTML elements
        if (event.target.nodeName === 'TD') {
            event.target.style.backgroundColor = color.value;
        }
        
    })
}
//When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
})