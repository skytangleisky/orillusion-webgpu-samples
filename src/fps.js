import Stats from './stats.module.js';
let stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = 'unset';
stats.domElement.style.top = 'unset';
stats.domElement.style.right = '0px';
stats.domElement.style.bottom = '0px';
stats.domElement.style.opacity = '.7';
stats.setMode(0);
document.querySelector('body').appendChild(stats.domElement)
function loop(){
    stats&&stats.update();
    requestAnimationFrame(loop)
}
loop()