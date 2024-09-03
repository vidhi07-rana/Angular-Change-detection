import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit } from '@angular/core';
import { InfoMessageComponent } from "../info-message/info-message.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit{

private zone = inject(NgZone) 
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
  this.zone.runOutsideAngular(()=>{
  setTimeout(()=>{
console.log("Timer Expire")
  },5000)
  })
}
}
