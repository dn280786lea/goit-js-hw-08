import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'selectedFilters';
const formEl = document.querySelector('.feedback-form');


function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log(value, name));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(evt) {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
}

function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initForm();
});

const onFormInputThrottled = throttle(onFormInput, 1000); //  throttle з інтервалом 1000 мс
formEl.addEventListener('input', onFormInputThrottled);
  formEl.addEventListener('submit', onFormInputThrottled);