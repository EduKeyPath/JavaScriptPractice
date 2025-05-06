/* Access by tag, class, ID */
document.getElementById('demo').innerHTML = 'Hello Javascript!! I am Id';
document.getElementsByClassName('demo1')[0].innerHTML = 'Hello, I am a class';
document.getElementsByTagName('div')[1].innerHTML = 'Hello i am a div';
// const paragraph = document.querySelector("p");
// setTimeout(() => {
//     paragraph.innerHTML = 'Hello this is change to query selector';
//     paragraph.style.backgroundColor = 'red';
// }, 2000)


/**** Attribite ****/
// const attributes = paragraph.attributes;
// console.log(attributes[1])
// let link = document.getElementById('hrefLink');
// link.removeAttribute("target");
// link.setAttribute('href', 'https://www.gmail.com');
// console.log(link.getAttribute('href'))
// let x = document.getElementById('hrefLink');
// x.href = 'https://www.gmail.com';


/**** Custom Tag creation ****/
let sec = document.createElement('section');
sec.setAttribute('id', 'secId');
let secP = document.createElement('p');
let secPTxt = document.createTextNode('Custom p tag text node');
secP.appendChild(secPTxt);
let secDiv = document.createElement('div');
let secDivNode = document.createTextNode('Custom div tag text node')
secDiv.appendChild(secDivNode);
sec.appendChild(secP);
sec.appendChild(secDiv);
document.body.append(sec);

/**** Remove child node ****/
// let pId = document.getElementById('demo');
// pId.parentNode.removeChild(pId);
// let prId = document.getElementById('parntId');
// let chId = document.getElementById('chldId');
// let btnClick = document.getElementById('clickId');
// btnClick.addEventListener('click', function(){
//     prId.removeChild(chId);
// })


/**** Replace node ****/
// let getParntId = document.getElementById('parntId');
// let getChild = document.getElementById('chldId');
// let getNewChild = document.getElementById('newChldId');
// let btnClick = document.getElementById('clickId');
// btnClick.addEventListener('click', function(){
//     getParntId.replaceChild(getChild, getNewChild);
// })


/**** Event handler ****/
let btnClick = document.getElementById('clickId');
// btnClick.onclick = function(){
//     console.log('Onclick event call')
// }
btnClick.style.backgroundColor = 'red';
btnClick.style.color = 'white';
btnClick.style.padding = '10px';
btnClick.style.border = 'none';
// btnClick.onmouseover = function(){
//     this.innerHTML = 'Remove Tests';
//     btnClick.style.backgroundColor = 'green';
// }
// btnClick.onmouseout = function(){
//     this.innerHTML = 'Remove Node';
//     btnClick.style.backgroundColor = 'red';
// }
// btnClick.addEventListener('click', function(){
//     let xtrTxt = document.createTextNode(' Submit')
//     btnClick.appendChild(xtrTxt);
// // })
// btnClick.addEventListener('mousedown', function(){
//     btnClick.style.backgroundColor = 'green';
// })
// btnClick.addEventListener('mouseup', function(){
//     btnClick.style.backgroundColor = 'red';
// })

btnClick.addEventListener('focusin', function(){
    btnClick.style.border = '1px solid #000';
})
btnClick.addEventListener('focusout', function(){
    btnClick.style.border = 'none';
})



/**** Query selector ****/
// let x = document.querySelectorAll('p')[0].outerHTML;
// const x = document.forms["frm1"];
// console.log(x);

// let btnClick = document.getElementById('clickId');
// btnClick.onclick = function(){
//     let x = document.scripts[0];
//     x.setAttribute('src', 'https://www.gmail.com');
// }


/**** Form Validation ****/
// let btnClick = document.getElementById('submitForm');
// btnClick.onclick = function(){
//     let x = document.forms['frm1']['fname'].value;
//     if(!!!x){
//         alert('please enter value')
//     }
//     return false;
// }








