import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
// private messages = signal<string[]>([])
// allMessages = this.messages.asReadonly()
private messages: string[]=[];
message$ = new BehaviorSubject<string[]>([])

get allMessages(){
  return [...this.messages ]
}
  constructor() { }

  addMessage(message: string){
    this.messages = [...this.messages, message]
  this.message$.next(this.messages)
  }
}
