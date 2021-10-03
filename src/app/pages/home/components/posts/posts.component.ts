import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts=[
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
      name:'Ahmed Hossam',
      img:'assets/img/home/posts/Ellipse 36.png',
      status:'lastSeen',
      type:'added new 3 photos',
      place:'',
      time:'Yesterday at 12:30 PM',
      postImgs:[
        { img:'assets/img/home/posts/postTwo/Mask Group 51.png' },
        { img:'assets/img/home/posts/postTwo/Mask Group 51.png' },
        { img:'assets/img/home/posts/postTwo/Mask Group 51.png' },
  
      ],
      postQues:'',
      postDescription:'',
      likes:20,
      commentsNumber:16,
      views:50,
      comments:[
      ]
    }
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
