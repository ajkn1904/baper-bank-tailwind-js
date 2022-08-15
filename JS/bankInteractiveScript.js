//------------------------ deposit part ---------------------

document.getElementById('btn-deposit').addEventListener('click', function(){
    const amount = document.getElementById('deposit-amount');
    const newDeposit = parseFloat(amount.value);

// type 1 of getting and updating innertext
    const dpUpdate = document.getElementById('deposit-update');
    const previousDeposit = dpUpdate.innerText;
    const previousDepositTotal = parseFloat(previousDeposit)    
    const currentBalance = previousDepositTotal + newDeposit;
    dpUpdate.innerText = currentBalance;
  
// type 2 of getting and updating innertext
    const balance = document.getElementById('total-update');
    const previousBalance = parseFloat(balance.innerText);
    balance.innerText = previousBalance + newDeposit;
    


    amount.value = '';
});





//---------------------- withdraw part------------------------

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const amount = document.getElementById('withdraw-amount');
    const newWithdraw = parseFloat(amount.value);
  

    const wdUpdate = document.getElementById('withdraw-update');
    const previousWithdraw = parseFloat(wdUpdate.innerText);
    wdUpdate.innerText = previousWithdraw + newWithdraw;
   

    const balance = document.getElementById('total-update');
    const previousBalance = parseFloat(balance.innerText);
    balance.innerText = previousBalance - newWithdraw;

    amount.value = '';
})
