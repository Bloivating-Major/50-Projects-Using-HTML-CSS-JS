import {addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, fromUnixTime, getUnixTime, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths} from 'date-fns';

const datePickerButton = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButton = document.querySelector('.prev-month-button');
const nextMonthButton = document.querySelector('.next-month-button');
const dateGrid = document.querySelector('.date-picker-grid-dates');
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
    setupDates(selectedDate);
}

// This will setup all the dates between that particular month
function setupDates(selectedDate){
    const firstWeekStart = startOfWeek(startOfMonth(currentDate));
    const lastWeekEnd = endOfWeek(endOfMonth(currentDate));
    const dates = eachDayOfInterval({start : firstWeekStart, end : lastWeekEnd});
    dateGrid.innerHTML = "";
    dates.forEach(date =>{
        const dateElement = document.createElement('button');
        dateElement.innerHTML = date.getDate();
        dateElement.classList.add('date');

        if(!isSameMonth(date, currentDate)){
            dateElement.classList.add('date-picker-other-month-date');
        }

        if(isSameDay(date, selectedDate)){
            dateElement.classList.add('selected');
        }

        dateElement.addEventListener('click', ()=>{
            setDate(date);
            datePicker.classList.remove('show');
        })

        dateGrid.appendChild(dateElement);
    })
}

// Simple Function to Set Date on the Button
function setDate(date){
    datePickerButton.innerHTML = format(date, '	MMMM do, yyyy')
    datePickerButton.dataset.selectedDate = getUnixTime(date);
    return;
}

// Next Click
nextMonthButton.addEventListener('click', ()=>{
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = addMonths(currentDate, 1);
    setupDatePicker(selectedDate);
})

// On Previous Click
previousMonthButton.addEventListener('click', ()=>{
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = subMonths(currentDate, 1);
    setupDatePicker(selectedDate);
})

setDate(new Date());
