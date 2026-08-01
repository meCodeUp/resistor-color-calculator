/* JS FOR RESISTOR COLOR CALCULATOR APP - VERSION 1.0.1 - GNU GENERAL PUBLIC LICENSE */
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
function checkForm(V, A) {
  // Fallback strings in case a locale is missing a key, so validation
  // never silently passes an invalid value.
  const fallback = {
    entervalue: "Please enter a value!<br>",
    enternumber: "Please enter only numbers!<br>",
    enterpositive: "Please enter a value greater than 0!<br>",
  };
  function messageKey(value) {
    if (value === "") return "entervalue";
    const num = Number(value);
    if (Number.isNaN(num)) return "enternumber";
    if (num <= 0) return "enterpositive";
    return null;
  }
  function translate(key) {
    return document.webL10n.get(key) || fallback[key];
  }
  let error = false;
  let msg = "";
  const keyV = messageKey(V);
  if (keyV) {
    msg += document.webL10n.get("errvoltage") + translate(keyV);
    error = true;
  }
  const keyA = messageKey(A);
  if (keyA) {
    msg += document.webL10n.get("errcurrent") + translate(keyA);
    error = true;
  }
  document.getElementById("errorMsg").innerHTML = msg;
  return error;
}