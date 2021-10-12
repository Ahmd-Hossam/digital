import { Component, Input, OnInit } from '@angular/core';
import { WidgetsService } from './modal-service/widgets.service';


@Component({
  selector: 'widgets-modal',
  templateUrl: './widgets-modal.component.html',
  styleUrls: ['./widgets-modal.component.scss']
})
export class WidgetsModalComponent implements OnInit {
  actionItems;
  coins;
  meetings;
  feeds;
  pages;
  prayers;
  weathers;
  constructor(private widgetService:WidgetsService) { }
  darkMode:boolean=true;
  ngOnInit() {
    this.getActionItems();
    this.getCoins();
    this.getMeetings();
    this.getFeeds();
    this.getPages();
    this.getPrayers();
    this.getWeathers();
  }

  //get action items 
  getActionItems(){
    this.actionItems=this.widgetService.actionItems()
  }

  //get Coins
  getCoins(){
    this.coins=this.widgetService.coins()
  }

  //get action Meetings 
  getMeetings(){
    this.meetings=this.widgetService.meetings()
  }

  //get action Feeds 
  getFeeds(){
    this.feeds=this.widgetService.feeds()
  }

  //get action Pages 
  getPages(){
    this.pages=this.widgetService.pages()
  }

  //get prayers
  getPrayers(){
    this.prayers=this.widgetService.prayers()
  }

  //get weather
  getWeathers(){
    this.weathers=this.widgetService.weathers()
  }
}
