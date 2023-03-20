import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-journeyboard',
  templateUrl: './journeyboard.component.html',
  styleUrls: ['./journeyboard.component.scss']
})
export class JourneyboardComponent implements OnInit {
   toggle: boolean = true;
   @Input()  task:any | undefined ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.task.task_title);
  }
  toggleSidebar() {
    this.toggle = !this.toggle;
  }

}
