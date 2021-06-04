let d = new Date();
let year = d.getFullYear();
document.querySelector("#currentYear").textContent = year;

let update = document.lastModified;
document.querySelector("#lastUpdate").textContent = update;


//lazyload js
const imagesToLoad = document.querySelectorAll("img[data-src]");
const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"

}
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(items =>{
        items.forEach(item => {
            if(item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    },options);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}