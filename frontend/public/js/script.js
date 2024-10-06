function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        const copyMessage = document.getElementById("copy-message");
        copyMessage.classList.remove("hidden");
        setTimeout(() => {
            copyMessage.classList.add("hidden");
        }, 2000);
    });
}
