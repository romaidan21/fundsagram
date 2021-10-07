document.addEventListener('DOMContentLoaded', e => {
    const body = document.querySelector('body');
    openPopUp(body, '.toggle-main', 'openMain', false)
    openPopUp(body, '.open-form', 'openForm', 'openMain')

    //зробити через об"єкт
});


function openPopUp(body, button, classAdd, classRemove) {
    const buttons = document.querySelectorAll(button);

    [...buttons].forEach(button =>{
        button.addEventListener('click', openPP)
    })

    function openPP() {
        if(classRemove) body.classList.remove(classRemove);
        body.classList.toggle(classAdd);
    }
    
}