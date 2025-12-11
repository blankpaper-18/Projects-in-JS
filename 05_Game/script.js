$(function () {
    let score = 0;

    function moveBox() {
        let x = Math.random() * (window.innerWidth-100);
        let y = Math.random() * (window.innerHeight-100);
        $('#box').css({ left: x + 'px', top: y + 'px' });
    }
    setInterval(moveBox, 10000);
    $('#box').click(function () {
        score++;
        $('#score').text( score);
        moveBox();
    });
    moveBox();
});