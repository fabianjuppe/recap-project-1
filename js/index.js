const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkButton.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("checked");

    if (bookmarkIcon.classList.contains("checked")) {
        bookmarkIcon.src = "./assets/images/bookmark-check.svg";
    } else {
        bookmarkIcon.src = "./assets/images/bookmark.svg";
    }
});

bookmarkButton.addEventListener("mouseenter", () => {
    if (bookmarkIcon.classList.contains("checked")) {
        bookmarkIcon.src = "./assets/images/bookmark-minus.svg";
    } else {
        bookmarkIcon.src = "./assets/images/bookmark-plus.svg";
    }
});

bookmarkButton.addEventListener("mouseleave", () => {
    if (bookmarkIcon.classList.contains("checked")) {
        bookmarkIcon.src = "./assets/images/bookmark-check.svg";
    } else {
        bookmarkIcon.src = "./assets/images/bookmark.svg";
    }
});

answerButton.addEventListener("click", () => {
    answer.toggleAttribute("hidden");

    if (answer.hasAttribute("hidden")) {
        answerButton.textContent = "Show Answer";
    } else {
        answerButton.textContent = "Hide Answer";
    }
});