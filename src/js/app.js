import { ajax } from 'rxjs/ajax';
import { catchError, take, concatMap } from 'rxjs/operators';
import { of, interval } from 'rxjs';
import AddNewMessage from './AddNewMessage';

const incomingMessages = document.querySelector('.incoming-messages');
const addMewMessage = new AddNewMessage(incomingMessages);
const url = 'https://ahj-homeworks-rxjs-server.herokuapp.com/messages/unread';

(() => {
  const numQuery = interval(5000);
  const takeFourNumbers = numQuery.pipe(take(5));
  const Aj = ajax.getJSON(url);

  takeFourNumbers
    .pipe(concatMap(() => Aj.pipe(catchError(() => of({ messages: [] })))))
    .subscribe((result) => {
      addMewMessage.addIncomingMessages(result.messages);
    });
})();