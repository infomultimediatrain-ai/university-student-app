checkAuth();

const defaultProfile = {
  fullName: 'Асқар Нұрлан',
  email: 'askar@university.kz',
  phone: '+7 700 123 4567',
  group: 'IT-21'
};

const saved = JSON.parse(localStorage.getItem('profile') || 'null') || defaultProfile;

document.getElementById('fullName').value = saved.fullName;
document.getElementById('email').value = saved.email;
document.getElementById('phone').value = saved.phone;
document.getElementById('group').value = saved.group;

document.getElementById('profileForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    group: document.getElementById('group').value
  };
  localStorage.setItem('profile', JSON.stringify(data));
  document.getElementById('saveMsg').textContent = '✅ Мәліметтер сақталды!';
  setTimeout(() => document.getElementById('saveMsg').textContent = '', 2000);
});
