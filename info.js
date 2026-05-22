const listElement = document.querySelector("#list");

const arr = JSON.parse(localStorage.getItem("reservations")) || [];

function render() {
    listElement.innerHTML = "";

    arr.forEach((user, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${user.nick} <br> place: ${user.placeNum}th <br> time: ${user.playTime} hours  <br> accound type: ${user.accType}`;

        const span = document.createElement('span');
        span.innerHTML = user.paid ? "Paid" : "Unpaid";

        const payBtn = document.createElement('button');
        payBtn.innerHTML = "Pay";

        const editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";

        const delBtn = document.createElement('button');
        delBtn.innerHTML = "Delete";

        payBtn.addEventListener('click', () => {
            user.paid = true;

            localStorage.setItem("reservations", JSON.stringify(arr));
            render();
        });

        editBtn.addEventListener('click', () => {
            // const input = document.createElement('input');
            // listElement.appendChild(input);
            // input.addEventListener('input', () => {span.innerHTML = input.value;})
            const newNick = prompt("New nickname:");
            if(newNick && newNick.length >= 2){
                user.nick = newNick;

                localStorage.setItem("reservations", JSON.stringify(arr));
            }
            render();
        });

        delBtn.addEventListener('click', () => {
            arr.splice(index, 1);

            localStorage.setItem("reservations", JSON.stringify(arr));
            render();
        });

        listElement.appendChild(div);
        listElement.appendChild(span);
        listElement.appendChild(payBtn);
        listElement.appendChild(editBtn);
        listElement.appendChild(delBtn);
    });
}

render();
