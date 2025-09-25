import {addMonths, format, fromUnixTime, getUnixTime, subMonths} from 'date-fns';

const datePickerButton = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButton = document.querySelector('.prev-month-button');
const nextMonthButton = document.querySelector('.next-month-button');
let currentDate = new Date();

datePickerButton.addEventListener("click", e=>{
    datePicker.classList.toggle('show');
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = selectedDate;
    setupDatePicker(selectedDate);
});


// Simple Function to Setup our Date Picker
function setupDatePicker(selectedDate){
    datePickerHeaderText.innerHTML = format(currentDate, 'MMMM - yyyy');
}

// Simple Function to Set Date on the Button
function setDate(date){
    datePickerButton.innerHTML = format(date, '	MMMM do, yyyy')
    datePickerButton.dataset.selectedDate = getUnixTime(date);
    return;
}

// Next Click
nextMonthButton.addEventListener('click', ()=>{
    currentDate = addMonths(currentDate, 1);
    setupDatePicker();
})

// On Previous Click
previousMonthButton.addEventListener('click', ()=>{
    currentDate = subMonths(currentDate, 1);
    setupDatePicker();
})

setDate(new Date());
