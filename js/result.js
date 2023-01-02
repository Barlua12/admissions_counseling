

const OpenPopup=()=>{
    popup.classList.add('open-popup')
}

const ClosePopup=()=>{
    popup.classList.remove('open-popup')
}

var toggleModal=document.querySelectorAll('[data-toggle="modal"]');
console.log(toggleModal);

toggleModal.forEach((modal)=>{
        modal.addEventListener('click',OpenPopup)
})
document.addEventListener('keyup', function(e){
    if (e.key === 'Escape'){
        ClosePopup();
    }
});
