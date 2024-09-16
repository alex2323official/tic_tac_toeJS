// Player
export function Player() {
  // private here
  const player1NameDiv = document.querySelector("#player1");
  const player2NameDiv = document.querySelector("#player2");
  const form = document.querySelector(".form");
  let username1 = "Player 1";
  let username2 = "Player 2";
  let player1Score = 0;
  let player2Score = 0;
  // public here
  return {
    test: "player test",
    updateUserName: function () {
      player1NameDiv.textContent = `${username1} score: ${player1Score}`;
      player2NameDiv.textContent = `${username2} score: ${player2Score}`;
    },
    changeUserNamesOnClick: function () {
      formBtn.addEventListener("click", (item) => {
        let tempUsername1 = document.querySelector("#name1").value;
        let tempUsername2 = document.querySelector("#name2").value;

        if (tempUsername1 != "" && tempUsername2 == "") {
          username1 = tempUsername1;
        }

        if (tempUsername1 == "" && tempUsername2 != "") {
          username2 = tempUsername2;
        }

        if (tempUsername1 != "" && tempUsername2 != "") {
          username1 = tempUsername1;
          username2 = tempUsername2;
          form.innerHTML = "";
          form.style.backgroundColor = "white";
        }

        this.updateUserName();
      });
    },
  };
}
