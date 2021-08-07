const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const err = document.getElementById('error');

form.addEventListener('submit',(e)=>{
    const fn = fname.value.trim();
    const ln = lname.nodevalue.trim();
    const em = email.nodevalue.trim();
    const ms = message.nodeValue.trim();
    const messages = [];
    if(fn>=2){
        messages.push('first name required');
    }
    if(ln >=2){
        messages.push('last name is required');
    }
    if(em===''){
        messages.push('email is required');
    }
    if(ms===''){
        messages.push('messages is required');
    }

    if(messages.length > 0){
        e.preventDefault()
        err.innerText = messages.join(',');
    }
    if(messages.length === 0){
        
    }
});
