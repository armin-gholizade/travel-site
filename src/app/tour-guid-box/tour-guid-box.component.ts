import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-guid-box',
  templateUrl: './tour-guid-box.component.html',
  styleUrls: ['./tour-guid-box.component.scss']
})
export class TourGuidBoxComponent implements OnInit {
@Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
