import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PreferitiComponent } from "./components/preferiti/preferiti.component";

@Component({
  selector: 'app-root',
  imports: [PostsListComponent, PreferitiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestione-Servizio';
}
