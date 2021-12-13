const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    let textBig = document.getElementsByClassName("text--big");
});