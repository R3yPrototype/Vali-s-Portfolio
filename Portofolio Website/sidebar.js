function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');

    sidebar.style.display = 'flex';  // Show the sidebar
    body.classList.add('no-scroll'); // Prevent scrolling
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');

    sidebar.style.display = 'none';  // Hide the sidebar
    body.classList.remove('no-scroll'); // Allow scrolling again
}

// Add event listeners for clicks only (which works on both touch and click devices)
function addClickListeners() {
    const menuButton = document.querySelector('.menuButton');
    const closeButtons = document.querySelectorAll('.sidebar li');

    // Open sidebar on click/tap
    menuButton.addEventListener('click', showSidebar);

    // Close sidebar when any item in the sidebar is clicked/tapped
    closeButtons.forEach(button => {
        button.addEventListener('click', closeSidebar);
    });
}

// Initialize event listeners on DOM content load
document.addEventListener('DOMContentLoaded', addClickListeners);


let overlayContainer = document.getElementById('overlayPage');
overlayContainer.classList.add('overlayStyle');

let overlayButton = document.getElementById('overlayButton');
overlayButton.addEventListener('click', switchPage);

function switchPage(){
    var x = document.getElementById('mainPage');

    if (x.style.display === "block") {
        x.style.display = "none";
        overlayContainer.style.display = "block";
    } else {
        x.style.display = "block";
        overlayContainer.style.display = "none";
    }
      
}



