const styleRadios = document.querySelectorAll('input[data-js="style"]');

styleRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        document.body.classList.remove(
            "gryffindor",
            "hufflepuff",
            "ravenclaw",
            "slytherin",
        );

        document.body.classList.add(radio.value);
    });
});
