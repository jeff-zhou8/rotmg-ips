function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Copied ${text} to clipboard!`);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function filterServers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById("serverList");
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const button = li[i].getElementsByTagName("button")[0];
        if (button) {
            const txtValue = button.textContent || button.innerText;
            li[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}
