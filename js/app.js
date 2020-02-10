// declaration
const inputDescription = document.querySelector('#input-description')
const inputAmount = document.querySelector('#input-amount')
const selectIncomeExpences = document.querySelector('#select-income-expences')
const btnAdd = document.querySelector('#btn_add')
const acIncome = document.querySelector('#ac-income')
const acExpenses = document.querySelector('#ac-expenses')
const totalBalance = document.querySelector('#total-balance')

// table declaration 
const tableIncome = document.querySelector('#table-income')
const tableExpences = document.querySelector('#table-expences')

/* ================ all the function ===============*/
// Add Income function to display
const addIncome = () => {
    let getDescription = inputDescription.value
    let getAmount = inputAmount.value

    const tableRow = document.createElement('tr')
    const description = document.createElement('td')
    const amount = document.createElement('td')

    tableRow.setAttribute('class', 'table-row')
    description.style.borderBottom = '1px solid #ccc'
    amount.style.borderBottom = '1px solid #ccc'

    description.textContent = getDescription
    amount.textContent = getAmount

    tableRow.appendChild(description)
    tableRow.appendChild(amount)
    tableIncome.appendChild(tableRow)
}

// add expences function to display
const addExpences = () => {
    let getDescription = inputDescription.value
    let getAmount = inputAmount.value

    const tableRow = document.createElement('tr')
    const description = document.createElement('td')
    const amount = document.createElement('td')

    tableRow.setAttribute('class', 'table-row')
    description.style.borderBottom = '1px solid #ccc'
    amount.style.borderBottom = '1px solid #ccc'

    description.textContent = getDescription
    amount.textContent = getAmount

    tableRow.appendChild(description)
    tableRow.appendChild(amount)
    tableExpences.appendChild(tableRow)
}

// income amount in arry
const incomes = []
const expences = []
let totalincome;
let totalExpences;
let acBalance;

/* ==== Add eventlistner ===== */
// submit the input
btnAdd.addEventListener('click', function () {
    if (selectIncomeExpences.value == 'income') {
        addIncome() // call addIncome (append) function
        personTotalIncome()

    } else {
        addExpences() // call addExpences (append) function
        personTotalExpences()
    }
    const personAcBalance = () => {
        if (totalExpences == null) {
            totalBalance.innerHTML = ''
            let myBalance = document.createElement('p')
            acBalance = totalincome
            myBalance.textContent = acBalance
            totalBalance.append(myBalance)
        } else if (totalincome == null) {
            totalBalance.innerHTML = ''
            let myBalance = document.createElement('p')
            acBalance = -totalExpences
            myBalance.textContent = acBalance
            totalBalance.append(myBalance)
        } else {
            totalBalance.innerHTML = ''
            let myBalance = document.createElement('p')
            acBalance = totalincome - totalExpences
            myBalance.textContent = acBalance
            totalBalance.append(myBalance)
        }
    }
    personAcBalance()
})

// person toatal Income
const personTotalIncome = () => {
    let getAmount = inputAmount.value
    incomes.push(Number(getAmount))
    const personIncome = () => {
        acIncome.innerHTML = ''
        totalincome = incomes.reduce((sum, income) => sum + income, 0)
        let balance = document.createElement('p')
        balance.textContent = totalincome
        acIncome.append(balance)
    }
    personIncome()
}

// person total expences
const personTotalExpences = () => {
    let getAmount = inputAmount.value
    expences.push(Number(getAmount))
    const expencesInput = () => {
        acExpenses.innerHTML = ''
        totalExpences = expences.reduce((sum, exp) => sum + exp, 0)
        let exBalance = document.createElement('p')
        exBalance.textContent = totalExpences
        acExpenses.append(exBalance)
    }
    expencesInput()
}