console.log("Script Added");
document.getElementById('sbmt-btn').addEventListener('click', function(){
    
    const emailvalue = document.getElementById('user-email');
    const email = emailvalue.value;
    
    const passvalue = document.getElementById('user-pass');
    const pass = passvalue.value;

    if(email === 'son@bap.com' && pass === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert("Invalid User!!!");}
})
