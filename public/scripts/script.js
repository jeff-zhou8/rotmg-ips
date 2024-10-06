document.getElementById('checkStatus').addEventListener('click', function() {
    fetch('/api/server-info')
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').textContent = `Server Status: ${data.status}`;
        })
        .catch(err => {
            document.getElementById('status').textContent = 'Error fetching server status.';
            console.error(err);
        });
});
