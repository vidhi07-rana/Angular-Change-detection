import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from "../message-list/message-list.component";
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageListComponent],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  private messageService = inject(MessageService)
enteredText:string =''

OnAdd(){
  this.messageService.addMessage(this.enteredText);
  this.enteredText=''
}

get debugOutput(){
  console.log('[New-Message] "debugOutput" binding re-evaluated.')
  return 'New-Messages Component Debug Output'
}

}
