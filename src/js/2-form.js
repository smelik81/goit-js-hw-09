const LS_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input[type="email"]');
const textareaForm = document.querySelector('textarea');

feedbackForm.addEventListener('input', event => {
  if (event.target === inputForm || event.target === textareaForm) {
    const email = inputForm.value.trim();
    const message = textareaForm.value.trim();

    if (email !== "" && message !== "") {
      const objInfo = { email, message };
      localStorage.setItem(LS_KEY, JSON.stringify(objInfo));
    } 
  }
});

const storageFormGetData = localStorage.getItem(LS_KEY);
if (storageFormGetData) {
  const { email, message } = JSON.parse(storageFormGetData);

  if (email !== "" && message !== "") {
    inputForm.value = email.trim();
    textareaForm.value = message.trim();
  }
};

feedbackForm.addEventListener('submit', clearForm);
function clearForm(event) {
  event.preventDefault();

  const element = event.target.elements;
  const email = element.email.value.trim();
  const message = element.message.value.trim();
  const objInfo = { email, message };

  if (email && message) {
    console.log({ email, message });
  } else {
    alert('заповніть будь ласка поле');
  }

  event.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
}

