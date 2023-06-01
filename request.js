const baseUrl = "/js-final-api"

async function request(url, options) {
  try {
    let response = await fetch(baseUrl + url, options)
    if ((response.status >= 400)) {
      throw { status: response.status }
    }

    let data = await response.json()

    if (data.length !== 0) {
      return data
    }

  } catch (e) {
    throw new Error(e.message)
  }
}


async function requestWithToken(url, options = {}) {
  const deviceID = document.getElementById('deviceID')

  const body = new FormData()
  body.append('deviceID', deviceID);

  options.headers ||= {};
  options.headers.authorization = 'Bearer ' + localStorage.getItem('accessToken'); //означает что всегда будет передан
  //присваивание {} будет совершено только тогда, когда options.headers ложь

  try {
    return await request(url, options)
  } catch (e) {
    // console.log(e)
    // if (e.status !== 401) {
    //   throw e
    // }
    let refreshResult = await request('/auth/refresh/refresh.php', { method: "PUT", body: deviceID },)


    console.log('refreshResult =', refreshResult)
    if (!refreshResult) {
      localStorage.removeItem('accessToken')
      throw e.text
    }

    localStorage.setItem('accessToken', refreshResult.accessToken)
    debugger
    return requestWithToken(url, options = {})
  }
}

export {
  requestWithToken, request
}