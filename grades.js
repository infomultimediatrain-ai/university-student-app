checkAuth();

const grades = [
  { subject: 'Математика', r1: 85, r2: 90, exam: 88, total: 'A-' },
  { subject: 'Физика',     r1: 78, r2: 82, exam: 80, total: 'B+' },
  { subject: 'IT',         r1: 95, r2: 98, exam: 96, total: 'A' },
  { subject: 'Ағылшын',    r1: 88, r2: 90, exam: 92, total: 'A-' }
];

const tbody = document.getElementById('gradesBody');
grades.forEach(g => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${g.subject}</td>
    <td>${g.r1}</td>
    <td>${g.r2}</td>
    <td>${g.exam}</td>
    <td><b>${g.total}</b></td>`;
  tbody.appendChild(tr);
});

// Push-хабарламаны имитациялау (Story 5)
setTimeout(() => {
  const n = document.getElementById('notification');
  n.textContent = '🔔 Жаңа хабарлама: Емтихан бағасы жарияланды! (Математика: A-)';
  n.classList.remove('hidden');
}, 2000);
