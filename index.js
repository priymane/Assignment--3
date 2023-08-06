function calculate() {
    const input1 = parseFloat(document.getElementById("red2").value);
    const input2 = parseFloat(document.getElementById("red4").value);
    const operator = document.getElementById("red3").value;
    let result = 0;

    if (operator === "+") {
        result = input1 + input2;
    } else if (operator === "-") {
        result = input1 - input2;
    } else if (operator === "*") {
        result = input1 * input2;
    } else if (operator === "/") {
        result = input1 / input2;
    } else if (operator === "%") {
        result = input1 % input2;
    }
    document.getElementById("red5").textContent = "Result:" + result;
}

function clearfields() {
    document.getElementById("red2").value = "";
    document.getElementById("red4").value = "";
    document.getElementById("red3").value = "";
    document.getElementById("red5").textContent = "Result:";

}

