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
    obj.email = emailInput.value.trim();
    obj.message = messageInput.value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  });
}

function checkStorage(obj) {
  const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  obj.email = data.email ?? '';
  obj.message = data.message ?? '';

  emailInput.value = data.email ?? '';
  messageInput.value = data.message ?? '';
}

function validateForm(obj) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (Object.values(obj).some(item => item.trim() === '')) {
      alert('Fill please all fields');
      return;
    }

    console.log({ ...obj });

    obj.email = '';
    obj.message = '';

    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
}

addData(formData);
checkStorage(formData);
validateForm(formData);
