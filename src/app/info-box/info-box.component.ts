import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  // topTitle]="item.topTitle" [subTitle]="item.subTitle" [text]="item.text"
  @Input() img:string=''
  @Input() topTitle:string=''
  @Input() subTitle:string=''
  @Input() text:string=''
  @Input() color:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
