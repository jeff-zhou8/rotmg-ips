let firstCopy = false; // Track if the user has copied an IP for the first time

window.onload = function () {
  const buttons = document.querySelectorAll('.copy-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const ip = this.getAttribute('data-ip');
      copyToClipboard(ip);

      if (!firstCopy) {
        showNotification();
        firstCopy = true;
      }
    });
  });
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log(`Copied: ${text}`);
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
