let expression = "";

function press(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function calculate() {
    fetch("http://localhost:4000/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("display").value = data.result;
        expression = data.result.toString(); 
    })
    .catch(err => {
        document.getElementById("display").value = "Error";
        expression = "";
    });
}
