console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('h1')[0])
console.log(document.getElementsByTagName('h1')[0].innerHTML)

// document.getElementsByTagName('h1')[0].innerHTML = "Give me some of your tots"

function color_change() {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    let header_el = document.getElementsByTagName('h1')[0]

    if (header_text == 'Hello World'){
        // add the class attribute of "color-change"
        // className because class is a reserved word
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        document.getElementsByTagName('h1')[0].className = 'different-color'
    }

}

let color_button = document.getElementById('color-button')

// console.log(color_button)

color_button.addEventListener('click', color_change)



let button = document.createElement('button')
let button_display= document.createElement('h2')

console.log(button)
console.log(button_display)


button.innerHTML = "I AM ALLLLIIIIIVEEE!!!!!"
document.body.append(button)
button.id = "someId"
button.className = "color-change"

console.log(button)

button.addEventListener('click', function (){
    if (button_display.innerHTML == ''){
        button_display.innerHTML = "Don't talk crap about JavaScript, until you've worked with it!"
    } else {
        button_display.innerHTML = ''
    }
    
    document.body.append(button_display)
})


const source = document.querySelector('div.source')
// console.log(source)
source.addEventListener('copy', (event)=> {
    const selection = document.getSelection()
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault()
})

const form = document.querySelector('#testDataForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')
    let first_name = event.target[0].value
    let last_name = event.target[1].value
    console.log(first_name)
    console.log(last_name)
    console.log(`This came from the query selector: ${query_first.value}, ${query_last.value}`)
})
