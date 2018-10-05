function resizeWindow() {
    document.getElementById('resizer').addEventListener('click', function() {
        window.resizeBy(300, 300);
        console.log('hello');
    })
}

function fencePos() {
    document.getElementById('fence').addEventListener('click', function() {
        let fenceX = event.clientX - document.getElementById(event.target.id).offsetLeft;
        let fenceY = event.clientY - document.getElementById(event.target.id).offsetTop;
        console.log(fenceX, fenceY);
})
}

resizeWindow();
fencePos();