// Default password - يمكن تغييرها من الإعدادات
let currentPassword = "admin123";
let isLoggedIn = false;

// Check if user is already logged in
window.addEventListener('load', () => {
    const savedSession = localStorage.getItem('dashboardSession');
    if (savedSession && savedSession === 'true') {
        isLoggedIn = true;
        showDashboard();
    }
});

function handleLogin(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password === currentPassword) {
        isLoggedIn = true;
        localStorage.setItem('dashboardSession', 'true');
        document.getElementById('password').value = '';
        showDashboard();
    } else {
        errorMessage.textContent = '❌ كلمة المرور غير صحيحة!';
        errorMessage.classList.add('show');
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
}

function showDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').classList.add('show');
}

function handleLogout() {
    isLoggedIn = false;
    localStorage.removeItem('dashboardSession');
    document.getElementById('dashboardContainer').classList.remove('show');
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('password').value = '';
}

function switchSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked menu item
    event.target.classList.add('active');
}

function addHosting(event) {
    event.preventDefault();
    const name = document.getElementById('hostingName').value;
    const url = document.getElementById('hostingUrl').value;
    const type = document.getElementById('hostingType').value;
    const renewal = document.getElementById('hostingRenewal').value;

    const table = document.getElementById('hostingTable');
    const row = table.insertRow(0);
    row.innerHTML = `
        <td>${name}</td>
        <td>${url}</td>
        <td>${type}</td>
        <td>${renewal}</td>
        <td><button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;" onclick="this.parentElement.parentElement.remove()">حذف</button></td>
    `;

    // Show success message
    const successMsg = document.getElementById('hostingSuccess');
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);

    // Reset form
    event.target.reset();
}

function addDesign(event) {
    event.preventDefault();
    const name = document.getElementById('designName').value;
    const type = document.getElementById('designType').value;
    const date = document.getElementById('designDate').value;

    const table = document.getElementById('designsTable');
    const row = table.insertRow(0);
    row.innerHTML = `
        <td>${name}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td><span style="color: #28a745; font-weight: 600;">✓ مكتمل</span></td>
        <td><button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;" onclick="this.parentElement.parentElement.remove()">حذف</button></td>
    `;

    const successMsg = document.getElementById('designSuccess');
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);

    event.target.reset();
}

function addReport(event) {
    event.preventDefault();
    const title = document.getElementById('reportTitle').value;
    const type = document.getElementById('reportType').value;
    const date = document.getElementById('reportDate').value;

    const table = document.getElementById('reportsTable');
    const row = table.insertRow(0);
    row.innerHTML = `
        <td>${title}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td><span style="color: #28a745; font-weight: 600;">✓ مكتمل</span></td>
        <td><button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;" onclick="this.parentElement.parentElement.remove()">حذف</button></td>
    `;

    const successMsg = document.getElementById('reportSuccess');
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);

    event.target.reset();
}

function saveSettings(event) {
    event.preventDefault();
    const successMsg = document.getElementById('settingsSuccess');
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);
}

function changePassword(event) {
    event.preventDefault();
    const currentPass = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (currentPass !== currentPassword) {
        alert('❌ كلمة المرور الحالية غير صحيحة!');
        return;
    }

    if (newPass !== confirmPass) {
        alert('❌ كلمات المرور الجديدة غير متطابقة!');
        return;
    }

    if (newPass.length < 6) {
        alert('❌ كلمة المرور يجب أن تكون 6 أحرف على الأقل!');
        return;
    }

    currentPassword = newPass;
    const successMsg = document.getElementById('passwordSuccess');
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);

    event.target.reset();
}
