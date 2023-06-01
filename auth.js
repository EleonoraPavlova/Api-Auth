import { validation } from "./validation.js"
import { request, requestWithToken } from "./request.js"

async function all() {
  return request('/messages.php', { method: "GET" })
}

async function login(login, password, deviceID) {

  const body = new FormData()
  body.append('login', login);
  body.append('password', password);
  body.append('deviceID', deviceID);

  const token = await request('/auth/login.php', { method: "POST", body })
  return token.accessToken
}


async function check() {
  return requestWithToken('/auth/check.php', { method: "GET" })
}


async function addMessages(text) {
  const body = new FormData();

  validation(text)
  body.append('text', text);
  return requestWithToken("/messages.php", {
    method: "POST", body
  })
}


export {
  login, all, addMessages, check,
}