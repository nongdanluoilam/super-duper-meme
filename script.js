const form = document.getElementById("love-form");
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name1 = form.name1.value;
    const name2 = form.name2.value;
    const percentage = Math.floor(Math.random() * 101);

    resultText.innerText = `Chúc cậu 20/10 vui vẻ nhaaaaaa! Và tỉ lệ  ${name1} và ${name2} đến với nhau là: ${percentage}%.`;
    resultContainer.style.display = "block";
});
