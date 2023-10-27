const toggler = document.querySelector("#content-toggler")
const wrapper = document.querySelector("#content-wrapper")

toggler.addEventListener("click", () => {
    wrapper.classList.toggle("hide")
})