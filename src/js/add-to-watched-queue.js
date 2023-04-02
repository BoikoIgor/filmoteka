import { WATCHED, QUEUE } from './storage-service';

const refs = {
  btnWatch: document.querySelector('[data-list="watched"]'),
  btnQueue: document.querySelector('[data-list="queue"]'),
};

refs.btnWatch.addEventListener('click', addToWached);
function addToWached(id) {
    Number(sessionStorage.getItem('current-film-id'));    
}

function onAddToWatched(id) {
  if (WATCHED.includes(id)) {
    return;
  }  
  setWatchedLocalStoradge(WATCHED);
}

function setWatchedLocalStoradge(arr) {
  localStorage.setItem(WATCHED, JSON.stringify(arr));
}

function setQueueLocalStoradge(arr) {
  localStorage.setItem(QUEUE, JSON.stringify(arr));
}