import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [{
    "_id": "1",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  },
  {
    "_id": "2",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  },
  {
    "_id": "3",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  },
  {
    "_id": "4",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  },
  {
    "_id": "5",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  },
  {
    "_id": "6",
    "name": "Auto Expo",
    "description": "lorem ipsum",
    "date": "2012-04-23T18:25:43.511Z"
  }]
  constructor() { }

  ngOnInit() {}

}

