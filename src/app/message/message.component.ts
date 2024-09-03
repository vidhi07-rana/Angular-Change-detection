import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewMessageComponent } from "./new-message/new-message.component";
import { MessageListComponent } from "./message-list/message-list.component";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NewMessageComponent, MessageListComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
message = signal<string[]>([])


  get debugOutput(){
    console.log('[Messages] "debugOutput" binding re-evaluated.')
    return 'Messages Component Debug Output';
  }

  onAddMessage(message: string){
this.message.update((oldMessages)=>[...oldMessages, message]);
  }
  
}
