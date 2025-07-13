'use strict';
const input = document.querySelector('.input');
const personal = document.querySelector('.personal');
const submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
    const email = document.querySelector('.email').value;
    const isValidEmail = function (email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    if (isValidEmail(email)) {
        input.classList.add('hidden');
        personal.classList.remove('hidden');
    } else {
        alert('Please enter the email again with correct syntax');
    }
});

document.querySelectorAll('.job-container').forEach(jobContainer => {
    const skillDetails = jobContainer.querySelector('.details');
    const toggleButton = jobContainer.querySelector('.button');
    const buttonText = toggleButton ? toggleButton.querySelector('.button-text') : null;
    const buttonIcon = toggleButton ? toggleButton.querySelector('i') : null;

    jobContainer.addEventListener('mouseover', function () {
        toggleButton.classList.remove('hidden');
    });
    jobContainer.addEventListener('mouseout', function () {
        toggleButton.classList.add('hidden');
    });
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            if (skillDetails.classList.contains('hidden')) {
                skillDetails.classList.remove('hidden');
                if (buttonText) buttonText.textContent = 'VIEW LESS';
                if (buttonIcon) buttonIcon.className = 'bi bi-caret-up-fill text-dark fs-5 col-md-3';
            } else {
                skillDetails.classList.add('hidden');
                if (buttonText) buttonText.textContent = 'VIEW MORE';
                if (buttonIcon) buttonIcon.className = 'bi bi-caret-down-fill text-dark fs-5 col-md-3';
            }
        })
    }
});