"use strict";

const ok = document.getElementById('ok');
const field = document.getElementById('field');
const todoList = document.getElementsByClassName('todo-list')[0];

const Addtodo = () => {
    const newImg3 = document.createElement('img');
    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newSpan = document.createElement('span');
    const newImg = document.createElement('img');
    const newImg2 = document.createElement('img');
    const text = field.value
    newSpan.textContent = text;
    newImg.src='./assets/icons/trash-icon.svg';
    newImg2.src='./assets/icons/edit-icon.svg';
    newImg3.src='./assets/icons/mobile-ellipse.svg';
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(newImg);
    newDiv2.appendChild(newImg2);
    newDiv2.appendChild(newImg3);
    todoList.appendChild(newDiv);
    newDiv.classList.add('todo-item');
    newDiv2.classList.add('todo-item__icons');
    newImg.classList.add('todo-item__icon');
    newImg.classList.add('delete');
    newImg2.classList.add('todo-item__icon');
    newImg2.classList.add('edit');
    newImg3.classList.add('todo-item__icon-mobile');
};

const deleteE = (event) =>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.parentElement.remove()
    }
    if(event.target.classList.contains('edit')){
        console.log(event);
        const textField = event.target.parentElement.previousElementSibling;
        // console.log(text);
        if(textField.localName === 'textarea'){
            const textSpan = document.createElement('textSpan');
            const text = textField.value;
            textSpan.innerText = text;
            console.log(text);
            textField.replaceWith(textSpan);
         } else {
            const text = textField.textContent;
            console.log(text);
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textField.replaceWith(textarea);
        }
    }
};

ok.addEventListener('click',Addtodo);
todoList.addEventListener('click', deleteE);



















