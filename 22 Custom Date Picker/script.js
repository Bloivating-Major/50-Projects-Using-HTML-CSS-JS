import {format} from 'date-fns';

const datePickerButton = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');

datePickerButton.addEventListener("click", e=>{
    datePicker.classList.toggle('show');
});

setDate(new Date());

function setDate(date){
    datePickerButton.innerHTML = format(date, '	MMMM Mo, yyyy')
    return;
}