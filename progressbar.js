window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };


  // chat gpt code js
  let progressCircle = document.querySelector('.progress-circle');
let bgPath = progressCircle.querySelector('.bg');
let barPath = progressCircle.querySelector('.bar');
let percentage = progressCircle.querySelector('.progress-percentage');

let circleLength = bgPath.getTotalLength();

bgPath.style.strokeDasharray = `${circleLength} ${circleLength}`;
bgPath.style.strokeDashoffset = `${circleLength}`;

barPath.style.strokeDasharray = `${circleLength} ${circleLength}`;
barPath.style.strokeDashoffset = `${circleLength}`;

let setProgress = (percent) => {
  let offset = circleLength - percent / 100 * circleLength;
  barPath.style.strokeDashoffset = offset;
  percentage.innerHTML = `${percent}%`;
}
setProgress(75);



// ========================


