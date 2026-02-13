const form = document.querySelector('[data-js="form"]');
const questions = document.querySelector('[data-js="questions"]');

const questionInput = document.querySelector('[data-js="question-input"]');
const questionRemainingCharacters = document.querySelector(
    '[data-js="question-remaining-characters"]',
);

const answerInput = document.querySelector('[data-js="answer-input"]');
const answerRemainingCharacters = document.querySelector(
    '[data-js="answer-remaining-characters"]',
);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const article = document.createElement("article");
    article.classList.add("question-card");
    questions.append(article);

    const h2 = document.createElement("h2");
    h2.textContent = data.question;
    article.append(h2);

    const bookmarkButton = document.createElement("button");
    bookmarkButton.type = "button";
    bookmarkButton.classList.add("bookmark");
    bookmarkButton.setAttribute("data-js", "bookmark");
    article.append(bookmarkButton);

    const img = document.createElement("img");
    img.setAttribute("src", "./assets/images/bookmark.svg");
    img.classList.add("bookmark-icon");
    img.setAttribute("data-js", "bookmark-icon");
    bookmarkButton.append(img);

    bookmarkButton.addEventListener("click", () => {
        img.classList.toggle("checked");

        if (img.classList.contains("checked")) {
            img.src = "./assets/images/bookmark-check.svg";
        } else {
            img.src = "./assets/images/bookmark.svg";
        }
    });

    bookmarkButton.addEventListener("mouseenter", () => {
        if (img.classList.contains("checked")) {
            img.src = "./assets/images/bookmark-minus.svg";
        } else {
            img.src = "./assets/images/bookmark-plus.svg";
        }
    });

    bookmarkButton.addEventListener("mouseleave", () => {
        if (img.classList.contains("checked")) {
            img.src = "./assets/images/bookmark-check.svg";
        } else {
            img.src = "./assets/images/bookmark.svg";
        }
    });

    const p = document.createElement("p");
    p.setAttribute("data-js", "answer");
    p.setAttribute("hidden", "");
    p.textContent = data.answer;
    article.append(p);

    const answerButton = document.createElement("button");
    answerButton.classList.add("answer");
    answerButton.setAttribute("data-js", "show-answer");
    answerButton.textContent = "Show Answer";
    article.append(answerButton);

    answerButton.addEventListener("click", () => {
        p.toggleAttribute("hidden");

        if (p.hasAttribute("hidden")) {
            answerButton.textContent = "Show Answer";
        } else {
            answerButton.textContent = "Hide Answer";
        }
    });

    const div = document.createElement("div");
    div.classList.add("categories");
    article.append(div);

    const categoryButton = document.createElement("button");
    categoryButton.classList.add("category");
    categoryButton.textContent = data.tag;
    div.append(categoryButton);
});

questionInput.addEventListener("input", (event) => {
    questionRemainingCharacters.textContent = `${questionInput.maxLength - event.target.value.length} characters left`;
});

answerInput.addEventListener("input", (event) => {
    answerRemainingCharacters.textContent = `${answerInput.maxLength - event.target.value.length} characters left`;
});
