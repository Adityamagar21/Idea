

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");


yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too !! ❤️";
    gif.src = "https://media.tenor.com/hmYv6-dCkGgAAAAi/bubu-dudu-bubu.gif";
    yesBtn.style.transform = "scale(1.1)";
    yesBtn.style.boxShadow = "0px 5px 15px rgba(233, 77, 88, 0.5)";
    noBtn.style.display = "none"; 
});


noBtn.addEventListener("mouseover", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.transition = "left 0.4s ease-in-out, top 0.4s ease-in-out"; // Smooth movement
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
