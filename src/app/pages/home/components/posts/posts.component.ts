import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts=[];
  loading:boolean=false;
  showParagraph:boolean=false;
  toggleClass:boolean=false;
  count:10;
  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getPosts();
    setTimeout(()=>{
      this.loading=true
    },20000)
  }

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
