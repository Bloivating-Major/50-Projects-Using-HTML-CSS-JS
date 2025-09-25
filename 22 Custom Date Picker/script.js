import {format, fromUnixTime, getUnixTime} from 'date-fns';

const datePickerButton = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const datePickerHeaderText = document.querySelector('.current-month')

datePickerButton.addEventListener("click", e=>{
    datePicker.classList.toggle('show');
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    setupDatePicker(selectedDate);
});


// Simple Function to Setup our Date Picker
function setupDatePicker(selectedDate){
    datePickerHeaderText.innerHTML = format(selectedDate, 'MMMM - yyyy');
}

// Simple Function to Set Date on the Button
function setDate(date){
    datePickerButton.innerHTML = format(date, '	MMMM do, yyyy')
    datePickerButton.dataset.selectedDate = getUnixTime(date);
    return;
}

setDate(new Date());
