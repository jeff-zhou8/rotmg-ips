
let notificationShown = false;

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        if (!notificationShown) {
            showNotification();
            notificationShown = true;
        }
        alert(`Copied ${text} to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 5000);
}

function filterServers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        button.style.display = text.includes(input) ? '' : 'none';
    });
}
