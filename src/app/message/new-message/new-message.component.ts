import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from "../message-list/message-list.component";

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageListComponent],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css'
})
export class NewMessageComponent {

}
