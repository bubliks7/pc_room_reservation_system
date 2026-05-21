const nicknameInput = document.querySelector('#nick');
const placeNumberInput = document.querySelector('#placeNumber');
const playingTimeInput = document.querySelector('#time');
const accoundTypeSelect = document.querySelector('#accoundType');

const reserveBtn = document.querySelector('#reserve');

const arr = JSON.parse(localStorage.getItem("reservations")) || [];

class User  {
    constructor(nick, placeNum, playTime, accType) {
        this.nick = nick;
        this.placeNum = placeNum;
        this.playTime = playTime;
        this.accType = accType;
    }
}

function addUser(){
    if(nicknameInput.value !== "" && placeNumberInput.value !== "" && playingTimeInput.value !== ""){
        if(nicknameInput.value.length >= 2 && nicknameInput.value.length <= 30){
            if(Number(placeNumberInput.value) <= 100 && Number(placeNumberInput.value) >= 1){
                if(Number(playingTimeInput.value) <= 8 && Number(playingTimeInput.value) > 0){
                    const newUser = new User(nicknameInput.value, Number(placeNumberInput.value), Number(playingTimeInput.value), accoundTypeSelect.value);

                    const isReserved = arr.some(user => user.placeNum === newUser.placeNum);
                    if(isReserved) console.log("This place to play games is already reserved");
                    else{
                        arr.push(newUser);
                        nicknameInput.value = "";
                        placeNumberInput.value = "";
                        playingTimeInput.value = "";

                        localStorage.setItem("reservations", JSON.stringify(arr));
                        window.location.href = "info.html";
                        
                        console.log("Well done");
                    }
                }
            }
        }
    }
}

reserveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addUser();
});
