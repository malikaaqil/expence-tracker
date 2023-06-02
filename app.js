// Get DOM elements
let setBudgetBtn = document.getElementById("set-budget-value");
let addExpenseBtn = document.getElementById("add-exp-value");
let budgetValueInput = document.getElementById("budget-value");
let expenseValueInput = document.getElementById("exp-value");
let descriptionValueInput = document.getElementById("des-value");
let dateValueInput = document.getElementById("date-value");
let totalBudgetDisplay = document.getElementById("total-budget");
let remainingBudgetDisplay = document.getElementById("remain-budget");
let table1 = document.querySelector("#dom-table-1 table");
let table2 = document.getElementById("dom-last-container");

let totalBudget = 0;
let remainingBudget = 0;
let expenses = [];



// Event listener for setting the budget

setBudgetBtn.addEventListener("click", function() {
  totalBudget = parseFloat(budgetValueInput.value);
  remainingBudget = totalBudget;
  totalBudgetDisplay.textContent = totalBudget.toFixed(2);
  remainingBudgetDisplay.textContent = remainingBudget.toFixed(2);
});


// Event listener for adding an expense

addExpenseBtn.addEventListener("click", function() {
  const expenseValue = parseFloat(expenseValueInput.value);
  const descriptionValue = descriptionValueInput.value;
  const dateValue = dateValueInput.value;

  if (expenseValue > remainingBudget) {
    alert("Expense Exceeds The Remaining Budget!");
  }

  // Subtract expense from remaining budget

  remainingBudget -= expenseValue;

  // Update remaining budget display

  remainingBudgetDisplay.textContent = remainingBudget.toFixed(2);

  // Create expense object
  const expense = {
    description: descriptionValue,
    expense: expenseValue.toFixed(2),
    date: dateValue
  };

  
  // Add expense to expenses array
  expenses.push(expense);


  // Create a new row in table 1 to display the expense

  const newRow = table1.insertRow(-1);
  
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  cell1.textContent = descriptionValue;
  cell2.textContent = expenseValue.toFixed(2);
  cell3.textContent = dateValue;


  // Create a new row in table 2 to display the expense

  const newRow2 = table2.insertRow(-1);
  const cell4 = newRow2.insertCell(0);
  const cell5 = newRow2.insertCell(1);
  const cell6 = newRow2.insertCell(2);
  cell4.textContent = descriptionValue;
  cell5.textContent = expenseValue.toFixed(2);
  cell6.textContent = dateValue;

  // Log expenses array for testing purposes

  
  console.log(expenses);
});
