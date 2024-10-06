function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert(`Copied IP: ${ip}`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function filterServers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const serverList = document.getElementById('serverList');
    const buttons = serverList.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const text = buttons[i].textContent || buttons[i].innerText;
        buttons[i].style.display = text.toLowerCase().includes(filter) ? '' : 'none';
    }
}
