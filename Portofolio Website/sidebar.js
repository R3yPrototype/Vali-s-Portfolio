function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block'; // Show the sidebar when user clicks or touches
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}


function addTouchAndClickListeners() {
    const menuButton = document.querySelector('.menuButton');
    const closeButtons = document.querySelectorAll('.sidebar li');

  
    menuButton.addEventListener('click', showSidebar);
    menuButton.addEventListener('touchstart', showSidebar);

   
    closeButtons.forEach(button => {
        button.addEventListener('click', closeSidebar);
        button.addEventListener('touchstart', closeSidebar);
    });
}

document.addEventListener('DOMContentLoaded', addTouchAndClickListeners);


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



