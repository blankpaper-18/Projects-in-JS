function addExpense() {
  let descriptionInput = document.querySelector("#expenseDescription");
  let amountInput = document.querySelector("#expenseAmount");

  let description = descriptionInput.value.trim();
  let amount = amountInput.value.trim();

  if (description === "" || amount === "") {
    alert("Please fill in both fields");
    return;
  }

  if (isNaN(amount) || parseFloat(amount) <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = `${description} - Rs${parseFloat(amount).toFixed(2)}`;
  li.appendChild(span);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateTotal();
  });
  li.appendChild(deleteBtn);

  document.querySelector("#expenseList").appendChild(li);

  descriptionInput.value = "";
  amountInput.value = "";

  updateTotal();
}

function updateTotal() {
  let expenseList = document.querySelectorAll("#expenseList li");
  let total = 0;

  expenseList.forEach((li) => {
    let text = li.querySelector("span").innerText;
    let amount = parseFloat(text.split("- Rs")[1]);
    total += amount;
  });

  document.querySelector("#totalAmount").innerText = "Rs" + total.toFixed(2);
}

document
  .querySelector("#addExpenseButton")
  .addEventListener("click", function () {
    addExpense();
  });

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addExpense();
  }
});
