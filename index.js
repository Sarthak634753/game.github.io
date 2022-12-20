const getRamdom = (min, max) => {
    let x = Math.floor(Math.random() * (max - min)) + min;
    return x;
}

let x = getRamdom(1, 1000);
let y = getRamdom(1, 1000);

document.getElementById("no1").innerHTML = x;
document.getElementById("no2").innerHTML = y;

const reloadpage = () => {
    window.location.reload();
}

document.getElementById("ans").value = "test";