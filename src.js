document.getElementById("start").addEventListener("click", function () {
  document.getElementById("start").style.display = "none";
  document.getElementById("road").style.animation =
    "roadanimation 20s linear infinite";

  setInterval(() => {
    num = Math.floor(Math.random() * (350 - 230 + 1) + 230);
    document.getElementById("enemycar1").style.left = `${num}px`;
  }, 3000);
  setInterval(() => {
    num = Math.floor(Math.random() * (150 - 50 + 1) + 50);
    document.getElementById("enemycar2").style.left = `${num}px`;
  }, 6000);
  setInterval(() => {
    num = Math.floor(Math.random() * (-50 + 140 + 1) - 140);
    document.getElementById("enemycar3").style.left = `${num}px`;
  }, 5000);
  setInterval(() => {
    num = Math.floor(Math.random() * (-220 + 330 + 1) - 330);
    document.getElementById("enemycar4").style.left = `${num}px`;
  }, 4000);

  document.getElementById("enemycar1").style.animation =
    "ecar1 3s linear infinite";
  document.getElementById("enemycar2").style.animation =
    "ecar2 6s linear infinite";
  document.getElementById("enemycar3").style.animation =
    "ecar3 5s linear infinite";
  document.getElementById("enemycar4").style.animation =
    "ecar4 4s linear infinite";

  let t = 15;
  let l = 0;

  window.addEventListener("keydown", function (x) {
    if (x.keyCode == 87) {
      t = t - 3;
      // alert("w")
    }
    if (x.keyCode == 65) {
      l = l - 1;
      // alert("w")
    }
    if (x.keyCode == 83) {
      t = t + 3;
      // alert("w")
    }
    if (x.keyCode == 68) {
      l = l + 1;
      // alert("w")
    }
    document.getElementById("mycar").style.top = `${t}vh`;
    document.getElementById("mycar").style.left = `${l}vw`;
  });

  n = 0;
  setInterval(() => {
    document.getElementById("score").innerText = `Score : ${n}`;
    n = n + 1;

    var ecar1_left = Math.abs(
      document.getElementById("ecarimg1").getBoundingClientRect().left
    );
    var ecar1_right = Math.abs(
      document.getElementById("ecarimg1").getBoundingClientRect().right
    );
    var ecar1_top = Math.abs(
      document.getElementById("ecarimg1").getBoundingClientRect().top
    );
    var ecar1_bottom = Math.abs(
      document.getElementById("ecarimg1").getBoundingClientRect().bottom
    );

    var ecar2_left = Math.abs(
      document.getElementById("ecarimg2").getBoundingClientRect().left
    );
    var ecar2_right = Math.abs(
      document.getElementById("ecarimg2").getBoundingClientRect().right
    );
    var ecar2_top = Math.abs(
      document.getElementById("ecarimg2").getBoundingClientRect().top
    );
    var ecar2_bottom = Math.abs(
      document.getElementById("ecarimg2").getBoundingClientRect().bottom
    );

    var ecar3_left = Math.abs(
      document.getElementById("ecarimg3").getBoundingClientRect().left
    );
    var ecar3_right = Math.abs(
      document.getElementById("ecarimg3").getBoundingClientRect().right
    );
    var ecar3_top = Math.abs(
      document.getElementById("ecarimg3").getBoundingClientRect().top
    );
    var ecar3_bottom = Math.abs(
      document.getElementById("ecarimg3").getBoundingClientRect().bottom
    );

    var ecar4_left = Math.abs(
      document.getElementById("ecarimg4").getBoundingClientRect().left
    );
    var ecar4_right = Math.abs(
      document.getElementById("ecarimg4").getBoundingClientRect().right
    );
    var ecar4_top = Math.abs(
      document.getElementById("ecarimg4").getBoundingClientRect().top
    );
    var ecar4_bottom = Math.abs(
      document.getElementById("ecarimg4").getBoundingClientRect().bottom
    );

    var mycar_left = Math.abs(
      document.getElementById("mycarimg").getBoundingClientRect().left
    );
    var mycar_right = Math.abs(
      document.getElementById("mycarimg").getBoundingClientRect().right
    );
    var mycar_top = Math.abs(
      document.getElementById("mycarimg").getBoundingClientRect().top
    );
    var mycar_bottom = Math.abs(
      document.getElementById("mycarimg").getBoundingClientRect().bottom
    );

    if (
      mycar_left < 450 ||
      mycar_right > 1130 ||
      mycar_top < 20 ||
      mycar_bottom > 690
    ) {
      setTimeout(() => {
        alert(`GAME OVER!`);
      });
      location.reload();
    }
    if (
      ((ecar1_left < mycar_left && mycar_left < ecar1_right) ||
        (ecar1_left < mycar_right && mycar_right < ecar1_right)) &&
      ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) ||
        (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom))
    ) {
      setTimeout(() => {
        alert(`GAME OVER!`);
      });
      location.reload();
    }
    if (
      ((ecar2_left < mycar_left && mycar_left < ecar2_right) ||
        (ecar2_left < mycar_right && mycar_right < ecar2_right)) &&
      ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) ||
        (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom))
    ) {
      setTimeout(() => {
        alert(`GAME OVER!`);
      });
      location.reload();
    }
    if (
      ((ecar3_left < mycar_left && mycar_left < ecar3_right) ||
        (ecar3_left < mycar_right && mycar_right < ecar3_right)) &&
      ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) ||
        (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom))
    ) {
      setTimeout(() => {
        alert(`GAME OVER!`);
      });
      location.reload();
    }
    if (
      ((ecar4_left < mycar_left && mycar_left < ecar4_right) ||
        (ecar4_left < mycar_right && mycar_right < ecar4_right)) &&
      ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) ||
        (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))
    ) {
      setTimeout(() => {
        alert(`GAME OVER!`);
      });
      location.reload();
    }
  }, 100);
});
