
function toggleClassName(){
    var sidebar = document.querySelector('.sidebar')
    var wholebody = document.querySelector('.wholeBody')
    var toggle = document.querySelector('.toggle')
    sidebar.classList.toggle('active')
    wholebody.classList.toggle('active')
    toggle.classList.toggle('active')
}
