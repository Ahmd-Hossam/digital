import { Component, OnInit } from '@angular/core';
import { SidePanelService } from 'src/app/shared/components/side-panel/side-panel.service';
import { WidgetsService } from '../components/widgets-modal/modal-service/widgets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showOthers:boolean=false;
  darkMode:boolean=true;

  //shard
  actionItems;
  coins;
  meetings;
  feeds;
  pages;
  prayers;
  weathers;
  constructor(private sidePanel:SidePanelService,
              private widgetService:WidgetsService) { }
  ngOnInit(): void {
    this.getActionItems();
    this.getCoins();
    this.getMeetings();
    this.getFeeds();
    this.getPages();
    this.getPrayers();
    this.getWeathers();
  }
  
  //show side panel
  onView() {
    this.sidePanel.show();
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

  //get weathers
    getWeathers(){
      this.weathers=this.widgetService.weathers()
    }


}
