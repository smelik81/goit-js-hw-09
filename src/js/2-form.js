const LS_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input[type="email"]');
const textareaForm = document.querySelector('textarea');

feedbackForm.addEventListener('input', event => {
  if (event.target === inputForm || event.target === textareaForm) {
    const email = inputForm.value.trim();
    const msg = textareaForm.value.trim();
    const objInfo = { email, msg };

    localStorage.setItem(LS_KEY, JSON.stringify(objInfo));
  }
});

const storageFormGetData = localStorage.getItem(LS_KEY);
if (storageFormGetData) {
  const { email, msg } = JSON.parse(storageFormGetData);
  inputForm.value = email || '';
  textareaForm.value = msg || '';
}

feedbackForm.addEventListener('submit', clearForm);
function clearForm(event) {
  event.preventDefault();

  const element = event.target.elements;
  const email = element.email.value.trim();
  const msg = element.message.value.trim();
  const objInfo = { email, msg };

  if (email && msg) {
    console.log({ email, msg });
  } else {
    alert('заповніть будь ласка поле');
  }

  event.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
}

