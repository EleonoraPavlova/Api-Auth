import * as auth from "./auth.js"
import { checkToken } from "./validation.js"

const login = document.getElementById('login')
const password = document.getElementById('password')
const deviceID = document.getElementById('deviceID')
const button = document.querySelector('button')
const div = document.getElementById('wrapForm');


button.addEventListener("click", () => {
  main()
})

async function main() {
  let all = await auth.all()
  console.log("all = ", all)

  let token = await auth.login(login.value, password.value, deviceID.value);
  console.log('token = ', token);
  if (checkToken(token)) {
    localStorage.setItem('accessToken', token)//токен живет 20 сек
  }

  if (token === undefined) {
    div.classList.remove('wrap-hidden')
    document.body.innerHTML = "You failed to login, no auth token"
    return false
  }

  let check = await auth.check(token);
  console.log('check = ', check);

  let added = await auth.addMessages("Mes")
  console.log('mes = ', added);

}