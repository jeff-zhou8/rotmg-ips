document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const notification = document.getElementById('notification');

    copyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ip = e.target.closest('.server').getAttribute('data-ip');
            navigator.clipboard.writeText(ip).then(() => {
                notification.textContent = `IP ${ip} copied to clipboard!`;
                notification.classList.remove('hidden');

                // Hide the notification after 2 seconds
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});
