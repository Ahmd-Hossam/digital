import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(){
    let posts=[
      {
        name:'Ahmed Hossam',
        img:'assets/img/home/posts/Ellipse 36.png',
        status:'active',
        type:'added new post in',
        place:'Front-End Department',
        time:'Today at 8:30 AM',
        postImgs:[
          {img:'assets/img/home/posts/Mask Group 49@2x.png'}
        ],
        postQues:'What is the best resources to learn front-end for free?',
        postDescription:' simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since',
        likes:20,
        commentsNumber:16,
        views:50,
        comments:[
          {
            id:0,
            name:'Samir Mohanad',
            status:'lastSeen',
            img:'assets/img/home/posts/Ellipse 36.png',
            jobTitle:'Front end developer',
            time:'3 min ago',
            comment:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard ever',
            likes:52,
            isDeleted:true
          },
          {
            id:1,
            name:'Ahmed Hossam',
            status:'active',
            img:'assets/img/navbar/Rectangle@2x.png',
            jobTitle:'Front end developer',
            time:'10 min ago',
            comment:'simply dummy text of the printing the printing rd ever',
            likes:32,
            isDeleted:false
          },
        ]
      },
  
      {
        name:'Youness Zahir',
        img:'assets/img/navbar/Rectangle@2x.png',
        status:'lastSeen',
        type:'added new 3 photos',
        place:'',
        time:'Yesterday at 12:30 PM',
        postImgs:[
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
        ],
        postQues:'',
        postDescription:'',
        likes:20,
        commentsNumber:16,
        views:50,
        comments:[
        ]
      },
  
      {
        name:'Ahmed Hossam',
        img:'assets/img/home/posts/Ellipse 36.png',
        status:'lastSeen',
        type:'added new 3 photos',
        place:'',
        time:'Yesterday at 12:30 PM',
        postImgs:[
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
        ],
        postQues:'',
        postDescription:'',
        likes:20,
        commentsNumber:16,
        views:50,
        comments:[
        ]
      },
  
      {
        name:'Mohamed Salah',
        img:'assets/img/navbar/Rectangle@2x.png',
        status:'lastSeen',
        type:'added new 3 photos',
        place:'',
        time:'Yesterday at 12:30 PM',
        postImgs:[
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
          {img:'assets/img/home/posts/Mask Group 49@2x.png'},
        ],
        postQues:'',
        postDescription:'',
        likes:20,
        commentsNumber:16,
        views:50,
        comments:[
        ]
      },
  
      {
        name:'Nader Essam',
        special:true,
        img:'assets/img/navbar/Rectangle@2x.png',
        status:'lastSeen',
        type:'',
        place:'',
        time:'Yesterday at 12:30 PM',
        postImgs:[
          {img:'assets/img/home/posts/spicialPost.png'},
        ],
        postQues:'Employee Announcement :)))',
        postDescription:'Id like to introduce James Gonzalez who is starting at Johnson s as a product specialist on May 1. John will work in the marketing department where',
        likes:54,
        commentsNumber:0,
        views:25,
        comments:[
        ]
      }
    ]
    return posts
  }
}
