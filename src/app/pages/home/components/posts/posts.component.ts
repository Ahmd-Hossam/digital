import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts=[];
  postImgs:any;
  
  loading:boolean=false;
  showParagraph:boolean=false;
  toggleClass:boolean=false;
  count:10;

  
  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getPosts();

    setTimeout(()=>{
      this.loading=true
    },2000)
  }

  //send imgs to slider popup
  sendImgs(imgs){
    this.postImgs=imgs
  }


  //see more and see less comment
  seeMore(){
    this.showParagraph=true;
  }
  seeLess(){
    this.showParagraph=false;
  }


  //get all posts
  getPosts(){
   this.posts = this.postsService.getPosts()
  }
}
