import Notiflix from 'notiflix';
const formEl = document.querySelector(".form");
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject)=>{
    setInterval(()=>{
      if (shouldResolve) {
    // Fulfill
    resolve({position,delay});
  } else {
    // Reject
    reject({position,delay});
  }
    },delay);
    
  })
  
}
const handelForm = el =>{
  el.preventDefault();
  const {target} = el;
  const step = Number(target.elements.step.value);
  let delay = Number(target.elements.delay.value);
  const amount = target.elements.amount.value;
  for (let i = 0; i < amount; i++) {
    
    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  }
}
formEl.addEventListener('submit', handelForm)
