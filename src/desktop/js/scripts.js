document.addEventListener('DOMContentLoaded', e => {
    const body = document.querySelector('body');
    openPopUp(body, '.toggle-main', 'openMain', false);
    openPopUp(body, '.open-form', 'openForm', 'openMain');
    closeSendPopUp(body)
});

// Open form pop-up or main
function openPopUp(body, button, classAdd, classRemove) {
    const buttons = document.querySelectorAll(button);

    [...buttons].forEach(button =>{
        button.addEventListener('click', openPP)
    })

    //Close pop-up on Esc
    document.addEventListener('keydown', e => {
        if(e.keyCode === 27)  body.classList.remove(classAdd);
    });

    function openPP() {
        if(classRemove) body.classList.remove(classRemove);
        body.classList.toggle(classAdd);
    }
    
}

function closeSendPopUp(b) {
    const closePopUp = document.querySelector('.send_pop-up .close');
    const openPopUp = document.querySelector('form button.button');

    openPopUp.addEventListener('click', e=>{
        e.preventDefault;
        b.classList.remove('openForm');
        b.classList.add('openSendPopUp');
    })
    closePopUp.addEventListener('click', e=>{
        e.preventDefault;
        b.classList.remove('openSendPopUp');
    })
    
}