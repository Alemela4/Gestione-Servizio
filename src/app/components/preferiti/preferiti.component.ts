import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-preferiti',
  imports: [],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {
  ps: PostsService = inject(PostsService);
}
