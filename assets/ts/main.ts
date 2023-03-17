$(".problem .arrow").on("click", function () {
    $(this).toggleClass("is-active");
    $(".solution").toggleClass("is-open");
});

var input = document.querySelector("#phone");
const test = window.intlTelInput(input, {});

console.log(test);
