const pl = planck, Vec2 = pl.Vec2;

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

function updateUI(elemendid, value){
    document.getElementById(elemendid).innerHTML = value;
}