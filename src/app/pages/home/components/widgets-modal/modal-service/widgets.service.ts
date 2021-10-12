import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor() { }

/*******************  end action items **********************/
  actionItems(){
      let items=[
        { 
          img:'assets/img/home/action list/group.png',
          small:'Jira',
          title:'-Task from jira needs your attention!',
          description:'Here we can add some details about the … ',
          actions:false,
        },
    
        { 
          img:'assets/img/home/action list/seal.png',
          small:'TAS',
          title:'-Sample received from customer!',
          description:'Here we can add some details about the … ',
          actions:true,
        },
    
        { 
          img:'assets/img/home/action list/lamp.png',
          small:'TAs',
          title:'-Sample received from customer...',
          description:'Here we can add some details about the … ',
          actions:true,
        }
      ]
    return items
  }

/*******************  end action items **********************/

/*******************  start coins       **********************/
  coins(){
     let coins=[
      {
        price:500,
        img:'assets/img/home/coins/us.png',
        type:'usd'
      },
      {
        price:1836,
        img:'assets/img/home/coins/aed.png',
        type:'1 aed'
      },
    ]
    return coins
  }

/*******************     end coins         **********************/

/*******************   start meetings      **********************/
  meetings(){
    let  meetings=[
      {
        status:'assets/img/home/meeting/red dot.png',
        time:'9:30 AM - 10:30 AM',
        appIcon:'assets/img/home/meeting/zoom.png',
        body:'EPPM Orientation',
        stuff:[
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'}
        ],
        total:'+215'
      },

      {
        status:'assets/img/home/meeting/red dot.png',
        time:'9:30 AM - 10:30 AM',
        appIcon:'assets/img/home/meeting/zoom.png',
        body:'EPPM Orientation',
        stuff:[
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'}
        ],
        total:'15'
      },

      {
        status:'assets/img/home/meeting/red dot.png',
        time:'9:30 AM - 10:30 AM',
        appIcon:'assets/img/home/meeting/zoom.png',
        body:'EPPM Orientation',
        stuff:[
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'},
          {img:'assets/img/home/trips/Ellipse 27.jpg'}
        ],
        total:'12'
      }
    ]
    return meetings;
  }
/*******************    end meetings      **********************/

/*******************     start feeds      **********************/
  feeds(){
    let  feeds=[
      {
        number:50,
        name:'Followers'
      },
      {
        number:70,
        name:'Posts'
      },
      {
        number:120,
        name:'Groups'
      },
      {
        number:150,
        name:'Likes'
      },
    ]
    return feeds;
  }
/*******************     end feeds      **********************/

/*******************     start pages      **********************/
  pages(){
    let  pages=[
      {
        img:'assets/img/home/pages/Mask Group 55.png',
        title:'Blackstone Memes',
        description:'120 Members'
      },
      {
        img:'assets/img/home/pages/Mask Group 55.png',
        title:'Blackstone Memes',
        description:'120 Members'
      },
      {
        img:'assets/img/home/pages/Mask Group 55.png',
        title:'Blackstone Memes',
        description:'120 Members'
      },
      {
        img:'assets/img/home/pages/Mask Group 55.png',
        title:'Blackstone Memes',
        description:'120 Members'
      },
      {
        img:'assets/img/home/pages/Mask Group 55.png',
        title:'Blackstone Memes',
        description:'120 Members'
      },
    ]
    return pages
  }
/*******************     end   pages      **********************/

/*******************     start   prayers      **********************/
  prayers(){
    let prayers=[
      {
        img:'assets/img/home/calendar/fajr.png',
        name:'fajr',
        time:'04:17 am '
      },
      {
        img:'assets/img/home/calendar/sunrise.png',
        name:'sunrise',
        time:'05:30 am '
      },
      {
        img:'assets/img/home/calendar/dhuhr.png',
        name:'dhuhr',
        time:'11:45 pm '
      },
      {
        img:'assets/img/home/calendar/asr.png',
        name:'asr',
        time:'03:20 pm '
      },
      {
        img:'assets/img/home/calendar/asr.png',
        name:'maghrib',
        time:'05:17 pm '
      },
      {
        img:'assets/img/home/calendar/isha.png',
        name:'isha',
        time:'06:50 pm '
      }
    ]
    return prayers;
  }
/*******************     end    prayers      **********************/

/*********************** start Weather ***************************/
  weathers(){
    let   weathers=[
      {
        todayImg:"assets/img/home/weater/sun.png",
        todayWeather:"Sun",
        todayCelsius:"31°C",
        todayDistance:"Wind: 8 km/h",
        week:[
          {
            name:"Sun",
            Celsius:"31°C",
            distance:"8 km/h",
            img:"assets/img/home/weater/sun.png",
          },
          {
            name:"Sun",
            Celsius:"31°C",
            distance:"8 km/h",
            img:"assets/img/home/weater/sun.png",
          },
          {
            name:"Sun",
            Celsius:"31°C",
            distance:"8 km/h",
            img:"assets/img/home/weater/sun.png",
          },
          {
            name:"Sun",
            Celsius:"31°C",
            distance:"8 km/h",
            img:"assets/img/home/weater/sun.png",
          }
        ]
      }
    ]
    return weathers;
  }
/*********************** End Weather ***************************/

}
