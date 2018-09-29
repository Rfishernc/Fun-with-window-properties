let windowProps = 'innerheight=200,outerheight=200,innerwidth=200,outerwidth=200,menubar=no,locationbar=no,scrollbars=no,status=no,directories=no,toolbar=no,personalbar=no';
let screenX = '';
let screenY = '';

function makeWindow() {
    document.getElementById('body').addEventListener('mouseup', function() {
        screenX = ',screenX=' + event.clientX;
        screenY = ',screenY=' + event.clientY;
        window.open('page2.html', 'window2', windowProps + screenX + screenY);
    })
}

makeWindow();