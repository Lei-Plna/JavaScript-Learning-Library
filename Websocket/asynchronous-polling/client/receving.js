const oMessageList = document.querySelector('.js-message-list'),
  oCountDown = document.querySelector('.js-count-down');

// the count down from 10 to 0 and restore to 10
function handleCountDown() {
  let count = 10;
  function handler() {
      oCountDown.textContent = count;
      count--;
      if (count === 0) {
        count = 10;
      }
  }
  // immediately invoke the handler
  handler();
  return setInterval(handler, 1000);
}

function createMessageItem(messageObj) {
  const oMessageItem = document.createElement('li');
  oMessageItem.classList.add('message-item');
  oMessageItem.innerHTML = `
    <span>username: ${ messageObj.username || 'default' }</span>
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
      // fetch getting the data need to be parsed with res.json()
      .then(res => res.json())
      // here the data is the data from the server
      .then(data => {
        renderMessageList(data.messages);
      });
  }, 10000);
}

// init function to manage the whole process
function init() {
  intervalFetch();
  handleCountDown();
}

init();