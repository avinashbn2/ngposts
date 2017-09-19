import { Component, OnInit } from '@angular/core';
import {Post} from '../interfaces/post';
import {Comment }from '../interfaces/comment';
import {Author} from '../interfaces/author';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] =  [{
    "postTitle": "iphone X",
    "postDescription": "Launched by Apple in 2017",
    "comments": [],
    "postAuthor": {"name": "Avinash"}
},
{
    "postTitle": "Obama became president",
    "postDescription": "1st white prez",
    "comments": [],
    "postAuthor": {"name": "Donald"}
},
{
    "postTitle": "New Game of thrones episode",
    "postDescription": "Jon SNow dead",
    "comments": [],
    "postAuthor": {"name": "jamie"}
}];;

  constructor() { }

  ngOnInit() {
  }

}
