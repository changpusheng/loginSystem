const loginButton = document.querySelector('#loginButton')
const form = document.querySelector('#accountForm')
const userAccount = document.querySelector('#userAccount')
const userPassword = document.querySelector('#userPassword')

loginButton.addEventListener('click', () => {
  form.classList.add('was-validated')
})

form.addEventListener('submit', (event) => {
  if (!accountForm.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    alert("請確認是否有空欄位!!")
  }
})