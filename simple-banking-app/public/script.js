// ========== Profile Sidebar Logic ==========
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "user@example.com";
  const accountType = localStorage.getItem("accountType") || "Savings";
  const balance = localStorage.getItem("balance") || "0";

  const profileLetter = document.getElementById("profileLetter");
  const sidebarUsername = document.getElementById("sidebarUsername");
  const sidebarEmail = document.getElementById("sidebarEmail");
  const sidebarType = document.getElementById("sidebarType");
  const balanceSpan = document.getElementById("balance");

  if (profileLetter) profileLetter.innerText = username.charAt(0).toUpperCase();
  if (sidebarUsername) sidebarUsername.innerText = username;
  if (sidebarEmail) sidebarEmail.innerText = email;
  if (sidebarType) sidebarType.innerText = accountType;
  if (balanceSpan) balanceSpan.innerText = balance;
});

// ========== Sign Up ==========
function handleSignup(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const accountType = document.getElementById('accountType').value;

  localStorage.setItem('username', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('accountType', accountType);
  localStorage.setItem('balance', "0");

  //  Show message and redirect to login
  alert("Signup successful. Please log in.");
  window.location.href = 'login.html';
}


// ========== Login ==========
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  localStorage.setItem('email', email);
  localStorage.setItem('username', email.split('@')[0]);
  window.location.href = 'dashboard.html';
}

// ========== Forgot Password ==========
function handleForgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (email) {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "flex";
    } else {
      alert("We will update you soon.");
    }
  }
}

// ========== Deposit ==========
function confirmDeposit() {
  const amount = parseFloat(document.getElementById("depositAmount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  let balance = parseFloat(localStorage.getItem("balance") || "0");
  balance += amount;
  localStorage.setItem("balance", balance);

  // Get user data
  const name = localStorage.getItem("username") || "User";
  const email = localStorage.getItem("email") || "user@example.com";
  const phone = localStorage.getItem("phone") || "N/A";
  const accountType = localStorage.getItem("accountType") || "Savings";

  // Set popup values
  document.getElementById("popupName").innerText = name;
  document.getElementById("popupEmail").innerText = email;
  document.getElementById("popupPhone").innerText = phone;
  document.getElementById("popupType").innerText = accountType;
  document.getElementById("popupAmount").innerText = amount;
  document.getElementById("popupBalance").innerText = balance;

  document.getElementById("popup").style.display = "flex";
  document.getElementById("depositAmount").value = "";
}

function goToDeposit() {
  window.location.href = "deposit.html";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const balanceSpan = document.getElementById("balance");
  const storedBalance = localStorage.getItem("balance") || "0";
  if (balanceSpan) balanceSpan.innerText = storedBalance;
});

// ========== Withdraw ==========
document.addEventListener("DOMContentLoaded", () => {
  const balanceSpan = document.getElementById("balance");
  const storedBalance = localStorage.getItem("balance") || "0";
  if (balanceSpan) balanceSpan.innerText = storedBalance;
});

function confirmWithdraw() {
  const amt = parseFloat(document.getElementById("withdrawAmount").value);
  let balance = parseFloat(localStorage.getItem("balance") || "0");
  if (isNaN(amt) || amt <= 0) return alert("Enter a valid amount.");

  if (amt > balance) {
    document.getElementById("insufficientBalance").innerText = balance.toFixed(2);
    document.getElementById("popup-error").style.display = "flex";
    return;
  }

  balance -= amt;
  localStorage.setItem("balance", balance.toString());

  document.getElementById("popupName").innerText = localStorage.getItem("username") || "User";
  document.getElementById("popupEmail").innerText = localStorage.getItem("email") || "N/A";
  document.getElementById("popupPhone").innerText = localStorage.getItem("phone") || "N/A";
  document.getElementById("popupType").innerText = localStorage.getItem("accountType") || "N/A";
  document.getElementById("popupAmount").innerText = amt.toFixed(2);
  document.getElementById("popupBalance").innerText = balance.toFixed(2);

  document.getElementById("popup-success").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup-error").style.display = "none";
}
function goToWithDraw() {
  window.location.href = "withdraw.html";
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}

// ========== Logout ==========
function logout() {
  window.location.href = 'index.html';
}