// modal

const mainBtn = document.querySelectorAll('.mainBtn');

const modal = document.getElementById('modal');

const modalContent = document.getElementById('simpleModal');

const exitModal = document.getElementById('endModal');

const video = document.querySelector('.body-video')

const form = document.getElementById('form');

const formValues = form.querySelectorAll('#form input');

console.log(formValues[0])

const openModal = () =>{
 modal.style.display = 'block';
 video.style.display = 'none';
}

const endModal = () => {
 modal.style.display = 'none';
 video.style.display = 'flex';
}

const closeModal = (e) => {
 if(e.target == modal){
  modal.style.display = 'none';
  video.style.display = 'flex';
 }
}

const submitForm = () => {
formValues[0].value = '';
formValues[1].value = '';
}


mainBtn.forEach(btn => {
 btn.addEventListener('click', openModal);
})

exitModal.addEventListener('click', endModal);

document.addEventListener('click', closeModal);

form.addEventListener('submit', submitForm);