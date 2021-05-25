const weatherForm = document.querySelector("form");
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const messageError = document.querySelector('#message-error')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageError.innerHTML = ''
    message1.innerHTML = ''
    message2.innerHTML = ''
    
    fetch("weather?address=" + location)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            messageError.innerHTML = data.error
            // console.log(data.error)
        }
        else {
            message1.innerHTML = data.location
            message2.innerHTML = data.forecast
            // console.log(data.location)
            // console.log(data.forecast)
        }
    })
})