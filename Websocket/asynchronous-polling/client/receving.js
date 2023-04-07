const oMessageList = document.querySelector('.js-message-list'),
  oCountDown = document.querySelector('.js-count-down');


function handleCountDown() {
  let count = 10;
  function handler() {
      oCountDown.textContent = count;
      count--;
      if (count === 0) {
        count = 10;
      }
  }
  handler();
  return setInterval(handler, 1000);
}

function createMessageItem(messageObj) {
  const oMessageItem = document.createElement('li');
  oMessageItem.classList.add('message-item');
  oMessageItem.innerHTML = `
    <span>username: ${ messageObj.username || ' default' }</span>
    <span>content: ${ messageObj.message || 'empty' }</span>
  `
  return oMessageItem;
}

function renderMessageList(messageList) {
  const oFrag = document.createDocumentFragment();
  messageList.forEach(messageObj => {
    const oMessageItem = createMessageItem(messageObj);
    oFrag.appendChild(oMessageItem);
  });
  oMessageList.innerHTML = '';
  oMessageList.appendChild(oFrag);
}

function intervalFetch() {
  return setInterval(() => {
    fetch('http://localhost:8000/message')
      .then(res => res.json())
      .then(data => {
        renderMessageList(data.messages);
      });
  }, 10000);
}

function init() {
  intervalFetch();
  handleCountDown();
}

init();