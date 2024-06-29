//step-1 add event handler
document.getElementById('btn-submit').addEventListener('click',function(event){
    // console.log('submit button clicked');
    //get the mail address from the input field
    //always remember to use .value to see the value
    const emailField=document.getElementById('user-email');
    // console.log(emailField.value);
    //get password
    const email=emailField.value;
    const passwordField=document.getElementById('user-password');
    // console.log(passwordField.value);
    //Denger: do not verify mail pass on the client side
    const password=passwordField.value
    if (email ==='ceo@salehinislam.com' && password == 'secret') {
        // console.log('valid user');
        window.location.href='bank.html';
    }else{
        // console.log('invalid user');
        alert('You are fraud , you are not my child');
    }
})