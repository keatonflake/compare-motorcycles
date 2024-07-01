document.addEventListener('DOMContentLoaded', () => {

let detailsBtn = document.getElementById('detailsButton');
// if details button does not exist wait

detailsBtn.addEventListener('click', () => {
    let details = document.getElementById('motorcycleDetails');
    if (details.style.display === 'none') {
        
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});

});

// details = document.getElementById('motorcycleDetails');

// let detailsBtn = document.createElement('button');
// detailsBtn.id = 'detailsButton';

// let chevronUp = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// chevronUp.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
// chevronUp.setAttribute('width', '16');
// chevronUp.setAttribute('height', '16');
// chevronUp.setAttribute('fill', 'currentColor');
// chevronUp.setAttribute('class', 'bi bi-chevron-up');
// chevronUp.setAttribute('viewBox', '0 0 16 16');
// chevronUp.innerHTML = '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>';

// let chevronDown = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// chevronDown.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
// chevronDown.setAttribute('width', '16');
// chevronDown.setAttribute('height', '16');
// chevronDown.setAttribute('fill', 'currentColor');
// chevronDown.setAttribute('class', 'bi bi-chevron-down');
// chevronDown.setAttribute('viewBox', '0 0 16 16');
// chevronDown.innerHTML = '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>';
// chevronDown.style.display = 'none';

// detailsBtn.appendChild(chevronUp);
// detailsBtn.appendChild(chevronDown);

// document.body.appendChild(detailsContainer);
// document.body.appendChild(detailsBtn);

// detailsBtn.addEventListener('click', () => {
//     if (detailsContainer.style.display === 'none') {
//         detailsContainer.style.display = 'block';
//         chevronUp.style.display = 'none';
//         chevronDown.style.display = 'inline';
//     } else {
//         detailsContainer.style.display = 'none';
//         chevronUp.style.display = 'inline';
//         chevronDown.style.display = 'none';
//     }
// });
