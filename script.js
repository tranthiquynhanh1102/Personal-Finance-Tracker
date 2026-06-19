let transactions = [];

const transactionForm = document.getElementById("transaction-form");
const transactionList = document.getElementById("transaction-list");
const totalBalanceEl = document.getElementById("total-balance");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const clearAllBtn = document.getElementById("clear-all");

// Load from localStorage
function loadTransactions() {
  const saved = localStorage.getItem("transactions");
  if (saved) {
    transactions = JSON.parse(saved);
  }
  renderTransactions();
  updateSummary();
}

// Save to localStorage
function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Update summary cards
function updateSummary() {
  let balance = 0;
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
      balance += t.amount;
    } else {
      expense += t.amount;
      balance -= t.amount;
    }
  });

  totalBalanceEl.textContent = balance.toLocaleString("en-US") + " ₫";
  totalIncomeEl.textContent = income.toLocaleString("en-US") + " ₫";
  totalExpenseEl.textContent = expense.toLocaleString("en-US") + " ₫";
}

// Render transaction list
function renderTransactions() {
  transactionList.innerHTML = "";

  if (transactions.length === 0) {
    transactionList.innerHTML = `
            <div style="text-align:center; padding: 3rem 1rem; color: #94a3b8;">
                <i class="fas fa-receipt" style="font-size: 3rem; opacity: 0.3; display: block; margin-bottom: 1rem;"></i>
                <p>No transactions yet</p>
            </div>
        `;
    return;
  }

  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  transactions.forEach((transaction, index) => {
    const item = document.createElement("div");
    item.className = "transaction-item";
    item.innerHTML = `
            <div class="transaction-info">
                <h4>${transaction.description}</h4>
                <small>${new Date(transaction.date).toLocaleDateString("en-US")}</small>
            </div>
            <div style="text-align: right;">
                <div class="transaction-amount ${transaction.type}">
                    ${transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString("en-US")} ₫
                </div>
                <button class="delete-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    transactionList.appendChild(item);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      transactions.splice(index, 1);
      saveTransactions();
      renderTransactions();
      updateSummary();
    });
  });
}

// Form submit
transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!description || !amount || !type) return;

  transactions.push({
    id: Date.now(),
    date: new Date().toISOString(),
    description,
    amount,
    type,
  });

  saveTransactions();
  renderTransactions();
  updateSummary();

  transactionForm.reset();
});

// Clear all
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all transactions?")) {
    transactions = [];
    saveTransactions();
    renderTransactions();
    updateSummary();
  }
});

// Initialize
loadTransactions();
