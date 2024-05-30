// AOS Settings

const processNums = document.querySelectorAll(".process-num");
processNums.forEach((processNum) => {
    if (screen.width < 586) {
        processNum.setAttribute("data-aos", "fade-down")
    }
    else {
        processNum.setAttribute("data-aos", "slide-down")
    }
})





// booking card animations (home page, booking section)
function displayBookingCard(bookCol) {
    // display card below booking-section text
    if (screen.width < 767 && screen.width > 585) {
        const cardText = bookCol.querySelector(".book-col-text-hor");
        const bookingCard = document.querySelector(".booking-card");

        bookingCard.innerHTML = cardText.innerHTML;
        bookingCard.style.display = "block";
    }
}

// Filling heart red on clock (blog-post)
function heartClicked(faHeart) {
    faHeart.classList.toggle("fa-regular");
    faHeart.classList.toggle("fa-solid");
    if (faHeart.classList.contains("fa-regular")) {
        faHeart.style.color = `var(--dark-gray)`
    }
    else {
        faHeart.style.color = `red`
    }
}


// counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.innerText);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});



