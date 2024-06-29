// console.log('withdraw.js');
document.getElementById('btn-withdraw').addEventListener('click',function(event){
    const withdrawField=document.getElementById('withdraw-input');
    const newWithdrawAmount=withdrawField.value;
    // console.log(newWithdrawAmount);
    //get the current withdraw total
    //for non-input (element other than input, textarea) use innerText to get the text
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const pastWithdrawTotal=withdrawTotalElement.innerText;

    const currentWithdrawTotal=parseFloat(pastWithdrawTotal)+parseFloat(newWithdrawAmount);

    
    const totalBalance=document.getElementById('total-balance');
    const pastTotalBalance=totalBalance.innerText;
    
    const currentTotalBalance=parseFloat(pastTotalBalance)-parseFloat(newWithdrawAmount);

    if (currentTotalBalance<0) {
        alert('Sorry!!! There is no sufficient balance.')
    }else{
        totalBalance.innerText=currentTotalBalance;
        withdrawTotalElement.innerText=currentWithdrawTotal;
    }
    
    withdrawField.value='';
})
document.getElementById('withdraw-input').addEventListener('keyup',function(event){
    const currentWithdrawNumber=document.getElementById('current-withdraw');
    // console.log(event.target.value);
    const withdrawField=document.getElementById('withdraw-input');
    const withdrawAmount=withdrawField.value;
    currentWithdrawNumber.innerText=event.target.value;
    const totalBalance=document.getElementById('total-balance');
    const pastTotalBalance=totalBalance.innerText;
    if (parseFloat(withdrawAmount)>parseFloat(pastTotalBalance)) {
        currentWithdrawNumber.innerText='00';
    }
})