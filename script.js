const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const id = document.getElementById("id");
    const advice = document.getElementById("advice");
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            id.innerText = `ADVICE #${data.slip.id}`;
            advice.innerText = data.slip.advice;
        })
        .catch((error) => {
            id.innerText = `ERROR`;
            advice.innerText = error.message;
        });
});
