import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-state-box',
  templateUrl: './travel-state-box.component.html',
  styleUrls: ['./travel-state-box.component.scss']
})
export class TravelStateBoxComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
