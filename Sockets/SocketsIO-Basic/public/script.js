const socket = io();

const inpMsg = document.getElementById('inpMsg');
const messages = document.getElementById('messages');
const sendBtn = document.getElementById('sendMsg');
const chatForm = document.getElementById('chatform');
const chat = document.getElementById('chat');
const login = document.getElementById('login');
const loginForm = document.getElementById('loginform');
const usernameInput = document.getElementById('username');
const userPassInput = document.getElementById('password');
const sendToUser = document.getElementById('toUser');
const defaultList = document.getElementById('default_list');
chat.style.display = "none";

let ROOTUSER;

loginForm.onsubmit = (e) => {
  e.preventDefault();
  if(!usernameInput.value) return;
  ROOTUSER = usernameInput.value;
  socket.emit('user_login', {
    username: usernameInput.value,
    password: userPassInput.value, 
  });
}

socket.on('logged_in', () => {
  document.getElementById('myname').innerText = ROOTUSER;
  login.style.display = "none";
  chat.style.display = "block";
});

socket.on('login_failed', () => {
  window.alert("Wrong Username or Password");
  // usernameInput.value = "";
  userPassInput.value = '';
});

chatForm.onsubmit = (e) => {
  e.preventDefault();
  socket.emit("chat_message", {
    to: sendToUser.value,
    msg: inpMsg.value,
    from: ROOTUSER,
  });
  inpMsg.value = "";

}
socket.on('sent_ack', (data) => {
  // window.msgdata = data.msg;
  // console.log(data.msg);
  let nli = document.createElement('li');
  nli.innerText = data.msg;
  nli.style.color = 'black';
  let listToPut = document.getElementById(((data.to || "default") + "_list"));
  if (!listToPut) {
    let newDiv = document.createElement('div');
    newDiv.innerText = data.to;
    let newList = document.createElement('ul');
    newList.setAttribute('id', (data.to + "_list"));
    newDiv.appendChild(newList);
    messages.appendChild(newDiv)
    listToPut = newList;
  }
  listToPut.appendChild(nli);
});

socket.on('received_message', (data) => {
  let nli = document.createElement('li');
  nli.innerText = data.msg;
  nli.style.color = 'red';
  let listToPut = document.getElementById((data.from + "_list"));
  if (!listToPut) {
    let newDiv = document.createElement('div');
    newDiv.innerText = data.from;
    let newList = document.createElement('ul');
    newList.setAttribute('id', (data.from + "_list"));
    newDiv.appendChild(newList);
    messages.appendChild(newDiv)
    listToPut = newList;
  }
  listToPut.appendChild(nli);
})