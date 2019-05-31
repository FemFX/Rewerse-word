let inp  = document.querySelector('input')
let span1 = document.querySelector('#first')
let span2 = document.querySelector('#second')

inp.oninput = (event) =>{
    span1.innerHTML = event.target.value
    let val = event.target.value;
    val = val.split('').reverse().join('')
    span2.innerHTML = val
    
}
