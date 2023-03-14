/* JS FOR RESISTOR COLOR CALCULATOR APP - VERSION 1.0.0 - GNU GENERAL PUBLIC LICENSE */
function calcOhm(U, I) {
  let R;
  R = U / I;
  isNaN(R) ? (R = 0) : R;
  isFinite(R) ? R : (R = 0);
  return R;
}
function calcWatt(U, I) {
  let P;
  P = U * I;
  return P;
}
function ceckForm(V, A) {
  let error = false;
  let msg = "",
    msgV,
    msgA;
  const numPat = /\d/;
  const testV = numPat.test(V);
  const testA = numPat.test(A);
  if (V === "" || testV === false) {
    if (V === "") {
      msgV = document.webL10n.get("entervalue");
    } else if (testV === false) {
      msgV = document.webL10n.get("enternumber");
    }
    msg = document.webL10n.get("errvoltage") + msgV;
    error = true;
  }
  if (A === "" || testA === false) {
    if (A === "") {
      msgA = document.webL10n.get("entervalue");
    } else if (testA === false) {
      msgA = document.webL10n.get("enternumber");
    }
    msg += document.webL10n.get("errcurrent") + msgA;
    error = true;
  }
  if (error) {
    document.getElementById("errorMsg").innerHTML = msg;
    return error;
  } else {
    document.getElementById("errorMsg").innerHTML = msg;
    return error;
  }
}