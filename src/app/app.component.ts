import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { MessageComponent } from "./message/message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-Detection';

  get debugOutput(){
    console.log('[Component] "debugOutput" binding re-evaluated. ')
    return 'Component Debug Output'
  }
}
