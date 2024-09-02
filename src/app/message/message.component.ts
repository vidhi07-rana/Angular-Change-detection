import { Component } from '@angular/core';
import { NewMessageComponent } from "./new-message/new-message.component";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NewMessageComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

}
