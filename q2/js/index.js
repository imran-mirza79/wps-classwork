let image = document.querySelectorAll('img');
console.log(image.length);

let rand = Math.floor(Math.random() * (image.length- 1));
console.log(rand);

for (var i = 0; i <2; i++) {
    image[Math.floor(Math.random() * (image.length- 1))].src = `../images/image-${rand}.jpg`;
}