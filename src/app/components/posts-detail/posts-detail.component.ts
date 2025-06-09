// (PASSAGGIO 6) QUESTO FILE DEVE FAR VEDERE I DETTAGLI DI UN POST SELEZIONATO
import { Component, Input } from '@angular/core';
import { Post } from '../../models/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-detail',
  imports: [CommonModule],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.css'
})
export class PostsDetailComponent {
  // proprietà su cui mi baserò per creare l'html
  @Input()  // uso @Input per indicare che questa proprietà può essere passata dal componente genitore
  post?: Post; // questo è un post che verrà visualizzato nei dettagli, ha il punto interrogativo perché potrebbe non essere definito (undefined) se non viene selezionato un post

}
