function validation(text) {
  if (!text) {
    throw new Error('Enter text')
  }
}

function checkToken(login) {
  if (login && login !== "") {
    let decod = window.atob(login.split('.')[1])
    if (decod) {
      let pars = JSON.parse(decod)
      document.body.innerHTML = `You have successfully logged in, ${pars.userName}`
      return true
    }
  }
}

export {
  validation, checkToken
}