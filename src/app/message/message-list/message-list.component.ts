import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {
private messageService = inject(MessageService)
messages$ = this.messageService.message$;
get debugOutput(){
  console.log('[Message-List] "debugOutput" binding re-evaluated.')
  return 'Messages-List Component Debug Output'
}
}
