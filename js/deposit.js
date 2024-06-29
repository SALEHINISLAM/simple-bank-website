// console.log('deposit.js');
document.getElementById('btn-deposit').addEventListener('click',function(event){
    const depositField=document.getElementById('deposit-input');
    const newDepositAmount=depositField.value;
    // console.log(newDepositAmount);
    //get the current deposit total
    //for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement=document.getElementById('deposit-total');
    const pastDepositTotal=depositTotalElement.innerText;

    const currentDepositTotal=parseFloat(pastDepositTotal)+parseFloat(newDepositAmount);

    depositTotalElement.innerText=currentDepositTotal;
    const totalBalance=document.getElementById('total-balance');
    const pastTotalBalance=totalBalance.innerText;
    const currentTotalBalance=parseFloat(pastTotalBalance)+parseFloat(newDepositAmount);
    totalBalance.innerText=currentTotalBalance;
    depositField.value='';
})
document.getElementById('deposit-input').addEventListener('keyup',function(event){
    const currentDepositNumber=document.getElementById('current-deposit');
    // console.log(event.target.value);
    const depositField=document.getElementById('deposit-input');
    const depositAmount=depositField.value;
    currentDepositNumber.innerText=event.target.value;
})