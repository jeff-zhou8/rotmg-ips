// script.js

// Function to fetch server data from the backend API
async function fetchServerData() {
    try {
        const response = await fetch('/api/servers');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const servers = await response.json();
        displayServers(servers);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display server data on the webpage
function displayServers(servers) {
    const serverContainer = document.getElementById('server-container');
    serverContainer.innerHTML = ''; // Clear existing content

    // Loop through server categories
    for (const [region, serverList] of Object.entries(servers)) {
        const regionDiv = document.createElement('div');
        regionDiv.className = 'region';
        regionDiv.innerHTML = `<h3>${region} Servers</h3>`;

        // Loop through individual servers
        serverList.forEach(server => {
            const serverButton = document.createElement('button');
            serverButton.className = 'server-button';
            serverButton.innerHTML = `
                <strong>${server.id}</strong><br>
                IP: ${server.ip}<br>
                Realms: ${server.realms.join(', ')}`;
            serverButton.onclick = () => alert(`Connecting to ${server.id} (${server.ip})...`);
            regionDiv.appendChild(serverButton);
        });

        serverContainer.appendChild(regionDiv);
    }
}

// Call the fetchServerData function on page load
document.addEventListener('DOMContentLoaded', fetchServerData);
