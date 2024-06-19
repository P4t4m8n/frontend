import { Injectable } from '@angular/core';
import { MessagesToCreate } from '../../interface/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getEmptyMessage(): MessagesToCreate {
    return {
      text: '',
      userId: '',
      chatId: '',
      senderUserName: '',
    };
  }
}
