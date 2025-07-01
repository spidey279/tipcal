
const calculate = document.querySelector(".submit");



calculate.addEventListener("click", ()=>{


const bill = document.querySelector(".kharcha");
const tip = document.querySelector(".gift");
const totalStat = document.querySelector(".total");




const billValue = parseFloat(bill.value)
const tipValue = parseFloat(tip.value) / 100;
const x = billValue * tipValue
const totalValue = x + billValue
totalStat.textContent =`Total amount u need to pay is: ${totalValue}`

})
