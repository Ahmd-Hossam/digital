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
          {img:'https://images.ctfassets.net/lzny33ho1g45/how-to-post-to-reddit-p-img/e1199d1cec4ddd74c5a9ef46a3890b8b/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760'}
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
          {img:'http://fannyroquette.fr/wp-content/uploads/2015/04/demo-img-2-3.png'},
          {img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/Share_Multiple_Photos_and_Vide.jpeg?unoTzeJwAg_xbBQ0tXg8pxV5A5sl1VEO&size=770:433'},
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
          {img:'https://img.freepik.com/free-psd/paper-cup-with-coffee-mock-up_23-2148884502.jpg?size=626&ext=jpg'},
          {img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F25%2FGettyImages-1140309695-2000.jpg&q=85'},
          {img:'https://cdn.britannica.com/83/138783-050-AB5CDAE4/Coffee-beans-roasting.jpg'},
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
          {img:'https://image.winudf.com/v2/image1/Y29tLk9sZC5DYXIuV2FsbHBhcGVyX3NjcmVlbl8wXzE1NTAzNzA1NjBfMDA5/screen-0.jpg?fakeurl=1&type=.jpg'},
          {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJwAptwLXfQN-pA3WicWzHDWi34bU6Zh43Q&usqp=CAU'},
          {img:'https://vistapointe.net/images/duesenberg-wallpaper-2.jpg'},
          {img:'https://img4.goodfon.com/wallpaper/nbig/e/98/1929-duesenberg-model-j-dual-cowl-phaeton-avtomobil-luzha.jpg'},
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
