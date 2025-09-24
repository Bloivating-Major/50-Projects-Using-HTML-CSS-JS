// This is how i could approach
// const buttons = document.querySelectorAll('.expand-button');

// buttons.forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         const parent = e.target.closest(".card");
//         let cardBody = parent.querySelector('.card-body')
//         if(button.textContent === 'Expand'){
//             cardBody.classList.add('show');
//             button.textContent = "Collapse"
//         }else{
//             cardBody.classList.remove('show');
//             button.textContent = "Expand"
//         }
//     })
// })

// Real Developer wrote optimised code
document.addEventListener("click", e=>{
    if(!e.target.matches('.expand-button')) return;

    const card = e.target.closest('.card');
    const cardBody = card.querySelector('.card-body');

    cardBody.classList.toggle('show');

    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' :  'Expand';
})