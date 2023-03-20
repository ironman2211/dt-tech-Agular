import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {

 toggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggle = !this.toggle;
  }

}
