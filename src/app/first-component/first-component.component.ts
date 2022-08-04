import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  @Output() sendName = new EventEmitter<string>();
  @Input() fromParent = null;
  name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendToAppComponent(name: string) {

    this.sendName.emit(name)
  }

}
