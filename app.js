const btn = document.querySelector(".btn");
const spanEl = document.querySelector(".id");
const adviceEl = document.querySelector(".advice");

// API verilerini saklamak için bir değişken
let apiData = null;

// API'yi çağıran işlev
async function fetchData() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
            throw new Error("HTTP hata: " + response.status);
        }
        const data = await response.json();
        console.log(data.slip.advice);
        const advice = data.slip.advice;
        const idA = data.slip.id;

        adviceEl.innerHTML = advice;
        spanEl.innerHTML = `#${idA}`;

        // API verilerini sakla
        apiData = data;
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    }
}

// Sayfa yüklendiğinde ve düğmeye tıklandığında API'yi çağır
window.onload = fetchData;

btn.addEventListener("click", fetchData);
