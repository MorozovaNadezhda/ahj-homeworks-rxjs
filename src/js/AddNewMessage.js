function addNullToDate(value) {
  const newValue = value < 10 ? `0${value}` : value;
  return newValue;
}

function printDate(valueDate) {
  const newDate = new Date(valueDate);
  const date = addNullToDate(newDate.getDate());
  const months = addNullToDate(newDate.getMonth() + 1);
  const year = addNullToDate(newDate.getFullYear());
  const hours = addNullToDate(newDate.getHours());
  const minutes = addNullToDate(newDate.getMinutes());
  const printedDate = `${hours}:${minutes} ${date}.${months}.${year}`;
  return printedDate;
}

export default class AddNewMessage {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  addMessage(objectMessage) {
    const { from, subject, received } = objectMessage;
    const subjectMessage = subject.length > 15 ? `${subject.substr(0, 15)}...` : subject;
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `
      <div class='message-from'>${from}</div>
      <div class='message-subject'>${subjectMessage}</div>
      <div class='message-received'>${printDate(received)}</div>
    `;
    this.parentElement.prepend(message);
  }

  addIncomingMessages(arrayMessages) {
    if (arrayMessages.length > 0) {
      for (const message of arrayMessages) {
        this.addMessage(message);
      }
    }
  }
}