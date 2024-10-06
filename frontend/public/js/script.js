document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const ip = button.parentElement.dataset.ip;
        navigator.clipboard.writeText(ip)
            .then(() => {
                const notification = document.getElementById('notification');
                notification.innerText = `${ip} copied to clipboard!`;
                notification.classList.remove('hidden');
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});

// Copy all IPs functionality
document.getElementById('copy-all-btn').addEventListener('click', () => {
    const allIps = Array.from(document.querySelectorAll('.server'))
                        .map(server => server.dataset.ip)
                        .join(', ');
    
    navigator.clipboard.writeText(allIps)
        .then(() => {
            const notification = document.getElementById('notification');
            notification.innerText = `All IPs copied to clipboard!`;
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});
