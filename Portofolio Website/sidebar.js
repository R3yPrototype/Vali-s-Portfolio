function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

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



