function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied ${text} to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function filterServers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('#serverList button');
    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        button.style.display = text.includes(input) ? '' : 'none';
    });
}
