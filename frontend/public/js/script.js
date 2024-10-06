let notificationShown = false;

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        if (!notificationShown) {
            showNotification();
            notificationShown = true;
        }
        alert(`Copied ${text} to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 5000);
}

function filterServers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        buttonHere's the **final version of all necessary files** with the advised changes implemented for deployment through Railway.

---

### **Final Files**:

1. **Root `package.json`**
2. **Backend `server.js`**
3. **Backend `routes.js`**
4. **Frontend `package.json`**
5. **`Dockerfile`**
6. **`nixpacks.toml`**
7. **`.gitignore`**
8. **Final `styles.css`** (with hover effects, notifications, and responsiveness)
9. **Final `script.js`** (for clipboard, filtering, and notifications)

You can now push these changes to GitHub and deploy via Railway using:

```bash
git add .
git commit -m "Final version"
git push origin master
railway up
