import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
refs = {
  timerBtn: document.querySelector('.timer-button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.timerBtn.disabled = true;

let chosenDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenDate = selectedDates[0];
    if (chosenDate < new Date()) {
      refs.timerBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
      return;
    } else {
      refs.timerBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

refs.timerBtn.addEventListener('click', changeTimer);
 
function changeTimer() {
       refs.timerBtn.disabled = true;
    const intervalId = setInterval(() => {
    const currentDate = Date.now();
    let alfaDate = chosenDate - currentDate;
    refs.days.textContent = convertMs(alfaDate).days;
    refs.hours.textContent = convertMs(alfaDate).hours;
    refs.minutes.textContent = convertMs(alfaDate).minutes;
    refs.seconds.textContent = convertMs(alfaDate).seconds;
  }, 1000);
};

    

function addLeadingZero (value){
  return String(value).padStart(2, "0");
};


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
const days = Math.floor(ms / day);
const hours = addLeadingZero(Math.floor((ms % day) / hour));
const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
};


