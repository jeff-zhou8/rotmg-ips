// Fetch server data from the API
fetch('/api/servers')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('server-container');

        Object.keys(data).forEach(region => {
            const regionDiv = document.createElement('div');
            regionDiv.classList.add('region');
            regionDiv.innerHTML = `<h2>${region} Servers</h2>`;

            data[region].forEach(server => {
                const serverDiv = document.createElement('div');
                serverDiv.classList.add('server');
                serverDiv.innerHTML = `<h3>${server.name}</h3>`;

                // Add realms for each server
                server.realms.forEach(realm => {
                    const realmDiv = document.createElement('div');
                    realmDiv.classList.add('realm');
                    realmDiv.innerHTML = `
                        <p>${realm.name} - IP: ${realm.ip} - Status: ${realm.status}</p>
                    `;
                    serverDiv.appendChild(realmDiv);
                });

                regionDiv.appendChild(serverDiv);
            });

            container.appendChild(regionDiv);
        });
    })
    .catch(error => console.error('Error fetching server data:', error));
