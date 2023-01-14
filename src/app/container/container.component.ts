import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  infoList:any[]=[
    {color:'color:#fd9d2a',img:'assets/img/ship-boat-svgrepo-com (1).svg',topTitle:' Luxury Tours & Travel',subTitle:'Tours & Holidays Specialists    ',text:'Tours & Holidays Specialists Nulla aliquet porttitor lacu luctus acmans tords posuere. Sapien faucibuse molestie acd feugiat sed quis blandit'},
    {color:'color:#8bca02',img:'assets/img/travel-svgrepo-com.svg',topTitle:' Reasonable Packages',subTitle:'Tours & Holidays Specialists    ',text:'Tours & Holidays Specialists Nulla aliquet porttitor lacu luctus acmans tords posuere. Sapien faucibuse molestie acd feugiat sed quis blandit.'},
    {color:'color:#0e76bc',img:'assets/img/travel-holiday-vacation-10-svgrepo-com.svg',topTitle:'Peaceful Destinations',subTitle:'Tours & Holidays Specialists    ',text:'Tours & Holidays Specialists Nulla aliquet porttitor lacu luctus acmans tords posuere. Sapien faucibuse molestie acd feugiat sed quis blandit.'}
  ]
  packageList:any[]=[
    {img:'/assets/img/maldives-tour-600x500.jpg',title:'Special Maldives Tour',features:{time:' 4 Days ',travelStatus:'Free Stay',travelInfo:'Road Trip'},text:'Non mollitia pora autem expedia delects usto qui dolor ipsum accusamus.',price:'$1,390.00'},
    {img:'/assets/img/dubai-tour-600x500.jpg',title:'Magical Dubai Tour',features:{time:'8 Days',travelStatus:' Road Trip',travelInfo:'Sightseeing'},text:'For traveling in mountains and full green valleys, Book your tour with us.',price:'$1,175.00'},
    {img:'/assets/img/northern-gateway-tour-600x500.jpg',title:'Northern Gateway Tour',features:{time:'10 Days',travelStatus:'Adventure ',travelInfo:'Hiking'},text:'Non mollitia pora autem expedia delects usto qui dolor ipsum accusamus.',price:'$1,580.00'},
    {img:'/assets/img/asia-tour-600x500.jpg',title:'Asia Extravaganza Tour',features:{time:'15 Days',travelStatus:'Air Trip',travelInfo:' Free Stay'},text:'For traveling in mountains and full green valleys, Book your tour with us.',price:'$1,450.00'},
    {img:'/assets/img/aonang-bangkok-tour-600x500.jpg',title:'Ao Nang & Bangkok Tour',features:{time:'4 Days',travelStatus:' Road Trip ',travelInfo:' Sightseeing'},text:'Non mollitia pora autem expedia delects usto qui dolor ipsum accusamus.',price:'$1,230.00'},
    {img:'/assets/img/swiss-tour-600x500.jpg',title:'Sensational Swiss Tour',features:{time:' 10 Days ',travelStatus:' Air Trip ',travelInfo:' Couples'},text:'For traveling in mountains and full green valleys, Book your tour with us.',price:'$1,315.00'},
  ]
  travelStateList:any=[
    {img:'/assets/img/briefcase-with-stickers-svgrepo-com.svg',number:'570',text:'Tour & Travels',color:'background:#0e76bc'},
    {img:'/assets/img/clothes-full-shirt-2-svgrepo-com.svg',number:'392',text:'Happy Customers',color:'background:#fd9d2a'},
    {img:'/assets/img/road-sign-svgrepo-com.svg',number:'40+',text:'Worldwide Destinaitions',color:'background:#8bca02'},
    {img:'/assets/img/tent-9-svgrepo-com (2).svg',number:'268',text:'Wild Camping',color:'background:purple'},
  ]

  guidesList:any=[
    {img:'/assets/img/products-for-travel-600x369.jpg',title:'Tours & Trips',text:'10 Products You Need To Pack For Your Luxury Summer Travel'},
    {img:'/assets/img/explore-national-parks-2-600x369.jpg',title:'Adventure ',text:'Explore The Wild & Wonderful USA National Parks With Experts'},
    {img:'/assets/img/autumn-season-touring-600x369.jpg',title:'Tours & Trips',text:'Reasons Of Why Autumn Is The Perfect Time For Touring'},
  ]

 
  constructor() { 

  }


  ngOnInit(): void {
  }

}
