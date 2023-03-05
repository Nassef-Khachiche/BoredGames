const navlink = document.querySelectorAll('.nav-link')

function activeLink() {
    navlink.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}

navlink.forEach((item) => item.addEventListener('click', activeLink))