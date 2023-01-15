import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-section',
  templateUrl: './reward-section.component.html',
  styleUrls: ['./reward-section.component.scss']
})
export class RewardSectionComponent implements OnInit {
  @Input() img:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
