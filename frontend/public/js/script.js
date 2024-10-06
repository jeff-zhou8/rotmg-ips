function copyToClipboard(ip) {
    const el = document.createElement('textarea');
    el.value = ip;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(`Copied IP: ${ip}`);
}

function filterServers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('#serverList button');

    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        button.parentElement.style.display = text.includes(input) ? 'list-item' : 'none';
    });
}
