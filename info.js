const listElement = document.querySelector("#list");

const arr = JSON.parse(localStorage.getItem("reservations")) || [];

function render() {
    arr.forEach(user => {
        const div = document.createElement('div');
        div.innerHTML = `${user.nick} <br> place: ${user.placeNum}th <br> time: ${user.playTime} hours  <br> accound type: ${user.accType}`;

        listElement.appendChild(div);
    });
}

render();
