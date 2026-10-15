document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const err = document.getElementById('errorMsg');

  // Деректер қорынсыз — қарапайым тексеру
  if (user === 'student' && pass === '1234') {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', user);
    window.location.href = 'schedule.html';
  } else {
    err.textContent = 'Қате логин немесе құпия сөз!';
  }
});

// Қорғау: кірмеген қолданушыны login бетіне қайтару
function checkAuth() {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}
