/* JS FOR RESISTOR COLOR CALCULATOR APP - GNU GENERAL PUBLIC LICENSE */

// Localizable color names, indexed like the CSS `color` array below, so each
// band can carry a text label for screen readers and colour-blind users.
const colorName = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white",
];

// Paint a band and expose its colour name as an accessible label + tooltip.
function paintBand(id, cssColor, nameKey) {
  const el = document.getElementById(id);
  el.style.backgroundColor = cssColor;
  const label = document.webL10n.get("color_" + nameKey) || nameKey;
  el.setAttribute("role", "img");
  el.title = label;
  el.setAttribute("aria-label", label);
}

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
    3900, 4700, 5600, 6800, 8200, 10000,
  ];
  U = document.getElementById("U").value;
  I = document.getElementById("I").value;
  const check = checkForm(U, I);
  if (!check) {
    P = calcWatt(U, I);
    R = calcOhm(U, I);
    let z = 0;
    while (z < E12.length) {
      if (E12[z] >= R) {
        R2 = E12[z];
        break;
      }
      z++;
    }
    if (R2 === undefined) {
      document.getElementById("errorMsg").innerHTML =
        document.webL10n.get("outofrange") ||
        "Value out of range (10 – 10000 Ohm)!";
      return;
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
    paintBand("r1", c[0], colorName[Number(R2[0])]);
    paintBand("r2", c[1], colorName[Number(R2[1])]);
    paintBand("r3", color[E], colorName[E]);
    paintBand("r4", "gold", "gold");
  }
};
document.getElementById("clear").onclick = function () {
  ["r1", "r2", "r3", "r4"].forEach(function (id) {
    const el = document.getElementById(id);
    el.style.backgroundColor = "transparent";
    el.removeAttribute("role");
    el.removeAttribute("title");
    el.removeAttribute("aria-label");
  });
};