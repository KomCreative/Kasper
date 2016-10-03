/*
Load ParticleGround
*/

document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        minSpeedX: 0.1,
        maxSpeedX: 0.4,
        minSpeedY: 0.01,
        maxSpeedY: 0.4,
        directionX: 'Center',
        directionY: 'Center',
        density: 10000,
        dotColor: '#FFFFFF',
        lineColor: '#FFFFFF',
        particleRadius: 5,
        lineWidth: 1,
        curvedLines: false,
        proximity: 100,
        parallax: true,
        parallaxMultiplier: 20
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);