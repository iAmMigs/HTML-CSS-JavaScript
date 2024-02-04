document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttonsContainer = document.getElementById("buttons-container");

    buttonsContainer.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            handleButtonClick(event.target.innerText);
        }
    });

    function handleButtonClick(value) {
        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "C") {
            display.value = "";
        } else {
            display.value += value;
        }
    }
});
