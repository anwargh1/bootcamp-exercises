const { handleComplaint } = require('./complaintsHandler');
const complaints = require('./consts');

let complaint1 = {
  text: "I'm not getting enough money",
  type: complaints.FINANCE, 
};

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: complaints.FINANCE, 
};

let complaint3 = {
  text: "I'm always full of energy",
  type: complaints.EMOTIONS, 
};

handleComplaint(complaint1); 
handleComplaint(complaint2); 
handleComplaint(complaint3); 
