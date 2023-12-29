// Time countdown
let time = 10; // time in minutes
let promotime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown () {
  let promoTimer = setInterval(() => {
    if(promotime <= 0){
      clearInterval(promoTimer);
      counting.innerHTML = "Promo has ended"
    } else {
      promotime--;
      const days = Math.floor(promotime / 3600 / 24);
      const hours = Math.floor(promotime / 3600) % 24;
      const minutes = Math.floor(promotime / 60 ) % 60;
      const seconds = Math.floor(promotime) % 60;


      counting.innerHTML = `Time: ${hours} hr : ${format(minutes)} min : ${format(seconds)} sec`
    }
  }, 1000)
}

function format (t){
  return t < 10 ? `0${t}` : t;
}

startCountdown();






















  

  