let menu = document.querySelector("#menu-bar");
let sidebar = document.querySelector('.sidebar');

menu.onclick = () => {
  
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

function openLink(url) {
  window.open(url, '_blank');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  sidebar.classList.remove('active');
}


