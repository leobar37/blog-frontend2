import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-errors',
  templateUrl: './message-errors.component.html',
  styleUrls: ['./message-errors.component.css']
})
export class MessageErrorsComponent implements OnInit {
  @Input() data :any;
  @Input() nombre :any;
  constructor() { }

  ngOnInit() {
  }

}
