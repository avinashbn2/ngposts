import { Component, OnInit } from '@angular/core';
import {Comment }from '../interfaces/comment';
import {Author} from '../interfaces/author';
import {Post} from '../interfaces/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private post: Post) { }
  
  ngOnInit() {
    
  }

}
