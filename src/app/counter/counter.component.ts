import { Component, OnInit } from '@angular/core';
import { InfoMessageComponent } from "../info-message/info-message.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

count=0;
counter(item:string){
  item === 'add' ? this.count++ : this.count--;
}
get debugOutput(){
  console.log('[counter]"debugOutput" binding re-evaluated. ')
  return 'Counter Component Debug Output'
}
ngOnInit() {

  setTimeout(()=>{
    this.count=0
  },4000)
  }
}
