const slides = document.getElementsByClassName('slide');
let startingPoint = 1;

const sliderHandler = (initialVal) => {
    // console.log(initialVal);

    if (initialVal > slides.length) startingPoint = 1;
    else if (initialVal < 1) startingPoint = slides.length;

    for (let i = 0; i < slides.length; i++) {
        // console.log(slides[i]);
        slides[i].style.display = 'none';
    };

    slides[startingPoint - 1].style.display = 'block';
};

sliderHandler(startingPoint);

setInterval(() => {
    startingPoint++;
    sliderHandler(startingPoint);
}, 2000);