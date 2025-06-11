// (PASSAGGIO 4) QUESTO FILE CONTIENE LA LOGICA DEL COMPONENTE POSTS-LIST
import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post, PostCategory } from '../../models/posts';
import { PostsDetailComponent } from '../posts-detail/posts-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  imports: [PostsDetailComponent, CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  // proprietà su cui mi baserò per creare l'html 
  posts: Post[] = [];
  categories: PostCategory[] = [];

  // Inietto il servizio PostsService per poter accedere ai dati dei post
  // alternativa 1 con inject:
  ps: PostsService = inject(PostsService); // tramite inject posso accedere al servizio 

  // alternativa 2 con il costruttore:
  // constructor(public ps: PostsService) {}

  // (PASSAGGIO 5) RICHIAMO IL METODO getPosts() DEL SERVIZIO POSTSERVICE PER OTTENERE I POST. AGGIUNGO A EXPORT IMPLEMENTS ONINIT 
  // Appena il componente è pronto, recupero i dati che mi servono e li metto nelle proprietà che mi sono preparato (posts e categories)
  ngOnInit(): void {
    // Chiamo il metodo getPosts() del servizio PostsService per ottenere i post
    this.posts = this.ps.getPosts();
    // Chiamo il metodo getCategories() del servizio PostsService per ottenere le categorie
    this.categories = this.ps.getCategories();
  }

  // (PASSAGGIO 12) CREO UNA FUNZIONE CHE CLICCANDO SUI BOTTONI MI PERMETTE DI FILTRARE I POST IN BASE ALLA CATEGORIA SELEZIONATA. (PASSAGGIO 15) SE NON VIENE PASSATA UNA CATEGORIA, RECUPERO TUTTI I POST
  filter(cat?: PostCategory) {
    if (cat) {
      // Se viene passata una categoria, filtro i post per quella categoria
      this.posts = this.ps.getPostsByCategory(cat); // Chiamo il metodo getPostsByCategory() del servizio PostsService per ottenere i post filtrati per quella categoria
    } else {
      // Se non viene passata una categoria, recupero tutti i post
      this.posts = this.ps.getPosts(); // Chiamo il metodo getPosts() del servizio PostsService per ottenere tutti i post
    }
  }
}
