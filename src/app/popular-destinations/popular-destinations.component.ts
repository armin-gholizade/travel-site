import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-destinations',
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.scss']
})
export class PopularDestinationsComponent implements OnInit {
  data:any=[
    {img:'/assets/img/destination-egypt-2-400x400.jpg',text:'egypt'},
    {img:'/assets/img/destination-usa-2-400x400.jpg',text:'usa'},
    {img:'/assets/img/destination-pakistan-3-400x400.jpg',text:'pakistan'},
    {img:'/assets/img/destination-france-400x400.jpg',text:'france'},
    {img:'/assets/img/destination-australia-400x400.jpg',text:'australia'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
