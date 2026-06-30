'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
  email: '',
  message: '',
};

function addData(obj) {
  form.addEventListener('input', () => {
    obj.email = emailInput.value ?? '';
    obj.message = messageInput.value ?? '';

    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  });
}

function checkStorage() {
  const data = localStorage.getItem('feedback-form-state');
  const validData = JSON.parse(data);
  emailInput.value = validData.email;
  messageInput.value = validData.message;
}

function validateForm(obj) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (Object.values(obj).some(item => item.trim() === '')) {
      alert('Fill please all fields');
      return;
    }

    console.log(obj);

    Object.keys(obj).forEach(key => {
      obj[key] = '';
    });

    localStorage.clear();
    form.reset();
  });
}

addData(formData);
checkStorage();
validateForm(formData);
