const buttons = document.querySelectorAll('button');
const popUp = document.querySelector('.pop-up');

const people = [
    {
        name: "Brian Muntean",
        about: "Brian Muntean is a cool guy",
        imageSrc: "https://wallpapercave.com/wp/vy5rSWa.jpg", 
    },
    {
        name: "Douglas Sloan",
        about: "Doug is a cool guy",
        imageSrc: "https://www.readersdigest.ca/wp-content/uploads/2020/02/GettyImages-1093535188.jpg",
    },
]

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        popUp.innerHTML = 
        `<h3>${people[event.target.id].name}</h3>
        <p>${people[event.target.id].about}</p>
        <img src="${people[event.target.id].imageSrc}">
        <button onClick="togglePopUp()">Close Window</button>`;
        popUp.classList.toggle('visible');
    })
});

function togglePopUp() {
    popUp.classList.toggle('visible');
}