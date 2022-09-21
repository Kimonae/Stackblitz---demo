import { Component, VERSION } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  posts;

  //injecte service dans composant

  constructor(private postsService: PostService) {
    console.log(this.postsService.SumUp(1, 8));

    this.postsService.getData().subscribe((data) => {
      console.log(data);
      this.posts = data;
      console.log(this.posts);
    });
  }
}
