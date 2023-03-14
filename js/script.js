/* Farbcode Web-App - Version 1.0.0 - Copyright © 2022 by Andersen Art Visual - All rights reserved */
document.getElementById("calc").onclick = function () {
  let U, I, P, R, R2, ziffern;
  const color = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "blueviolet",
    "grey",
    "white",
  ];
  const E12 = [
    10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 120, 150, 180, 220,
    270, 330, 390, 470, 560, 680, 820, 1000, 1200, 1500, 1800, 2200, 2700, 3300,
    4700, 5600, 6800, 8200, 10000,
  ];
  U = document.getElementById("U").value;
  I = document.getElementById("I").value;
  const ceck = ceckForm(U, I);
  if (!ceck) {
    P = calcWatt(U, I);
    R = calcOhm(U, I);
    let z = 0;
    while (z < E12[z]) {
      if (E12[z] >= R) {
        R2 = E12[z];
        break;
      }
      z++;
    }
    R2 = R2.toString();
    ziffern = R2.length;
    let E = 0;
    let c = new Array(2);
    for (let i = 0; i <= ziffern; i++) {
      if (i < 2) {
        c[i] = color[R2[i]];
      } else {
        if (i > 2) {
          E++;
        }
      }
    }
    document.getElementById("R").value = R.toFixed(2);
    document.getElementById("R2").value = R2;
    document.getElementById("P").value = P.toFixed(2);
    document.getElementById("r1").style.backgroundColor = c[0];
    document.getElementById("r2").style.backgroundColor = c[1];
    document.getElementById("r3").style.backgroundColor = color[E];
    document.getElementById("r4").style.backgroundColor = "gold";
  }
};
document.getElementById("clear").onclick = function () {
  const clearBG = "transparent";
  document.getElementById("r1").style.backgroundColor = clearBG;
  document.getElementById("r2").style.backgroundColor = clearBG;
  document.getElementById("r3").style.backgroundColor = clearBG;
  document.getElementById("r4").style.backgroundColor = clearBG;
};