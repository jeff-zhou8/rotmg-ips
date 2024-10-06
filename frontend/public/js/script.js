window.onload = function () {
  fetch('/api/servers')
    .then(response => response.json())
    .then(data => {
      const serverList = document.querySelector('.server-list');
      const servers = data.servers;
      for (let region in servers) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'server-group';
        const heading = document.createElement('h3');
        heading.textContent = region;
        groupDiv.appendChild(heading);

        servers[region].forEach(server => {
          const button = document.createElement('button');
          button.textContent = `${server.name} - ${server.ip}`;
          button.onclick = () => copyToClipboard(server.ip);
          groupDiv.appendChild(button);
        });

        serverList.appendChild(groupDiv);
      }
    });
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification();
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

function showNotification() {
  const notification = document.getElementById("notification");
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}
