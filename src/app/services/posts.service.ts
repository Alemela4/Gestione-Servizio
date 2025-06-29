// (PASSAGGIO 1) QUESTO FILE E' PER I SERVIZI CHE GESTISCONO I POST
import { Injectable } from '@angular/core';
import { Blog, Post, PostCategory } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // creo un oggetto (data) che contiene i dati dei post e delle categorie
  // in un'applicazione reale questi dati verrebbero recuperati da un server
  // data: Blog -> è un oggetto che contiene due proprietà: posts e postCategories (che trovo nel file models/posts.ts)
  // metto private per indicare che questa proprietà non deve essere accessibile dall'esterno del servizio (non è pubblica)
  private data: Blog = {
  "posts": [
    {
      "id": 1,
      "title": "Voluptas incidunt illum nihil quia.",
      "body": "Debitis et voluptatem. Perspiciatis veniam qui qui dolores quasi exercitationem sed. Velit a dolorem omnis fugit mollitia sit.\n \rBeatae ut cupiditate. Voluptas animi et cumque et veniam. Animi rerum illum. Vero optio voluptatem dolores dolorem iusto sunt optio omnis.",
      "userId": 1,
      "date": 1647023468444,
      "category": "travel"
    },
    {
      "id": 2,
      "title": "Earum et temporibus.",
      "body": "In accusamus aut deleniti. Voluptatem et est velit ex soluta debitis. Placeat mollitia fuga molestiae sint corporis quibusdam.\n \rConsequatur maiores quod et aut nemo cupiditate ipsum et. Molestias architecto animi magnam numquam deleniti magnam tempore molestias optio. Aut dolore quia nihil mollitia minima perspiciatis dolor non. Quas nemo ut.",
      "userId": 1,
      "date": 1647013022775,
      "category": "food"
    },
    {
      "id": 3,
      "title": "Quas officiis est commodi.",
      "body": "Quae blanditiis porro. Hic eligendi in fuga iure id vero officia dolore ipsa. Nobis inventore alias incidunt eos dolores quia. Libero cumque voluptate temporibus aut. Labore magni a.\n \rNesciunt voluptatem qui ipsa veritatis. Ad dolorem consectetur sit non. Quod eligendi molestiae. Enim velit reiciendis est maxime.",
      "userId": 1,
      "date": 1647050191360,
      "category": "food"
    },
    {
      "id": 4,
      "title": "Et et iste perferendis.",
      "body": "Et rerum quae consequatur. Et voluptatem aliquam unde eius. In iusto ut sunt fuga sit assumenda omnis. Quis unde dolorum reiciendis non dolorem laboriosam. Dolores molestias vero qui sunt est veniam voluptate cumque.\n \rRerum debitis dolores eius saepe. Ipsum molestias rerum ut aut eum voluptatem distinctio. Neque officiis sunt nam nihil.",
      "userId": 1,
      "date": 1647008156129,
      "category": "fashion"
    },
    {
      "id": 5,
      "title": "Pariatur ipsum quia iste qui natus.",
      "body": "Assumenda velit aliquid. Rem error aut inventore vero sunt eum ipsam sunt fugiat. Soluta alias voluptatem harum modi voluptates architecto quaerat qui voluptatem. Magnam consequuntur pariatur harum deleniti velit provident.\n \rPerspiciatis qui et dicta atque vitae reprehenderit minus et ut. Sed pariatur eaque et similique sed unde dolorem corporis voluptatem. Aspernatur est quisquam distinctio impedit.",
      "userId": 1,
      "date": 1647067623467,
      "category": "fashion"
    },
    {
      "id": 6,
      "title": "Et beatae harum dolorem beatae aut qui.",
      "body": "Dolores expedita dolor accusantium. Qui quisquam reiciendis neque et voluptate ut id nisi est. Suscipit voluptatibus quo molestiae quas at unde veritatis.\n \rSaepe quia quia aut ut omnis. Velit mollitia pariatur dicta saepe. Aut nobis omnis dolores qui amet laboriosam hic earum. Quibusdam nihil aliquam et tempora adipisci sapiente dolor exercitationem facere.",
      "userId": 1,
      "date": 1647012570998,
      "category": "fashion"
    },
    {
      "id": 7,
      "title": "Dignissimos dolores consequatur.",
      "body": "Quos assumenda et. Officia nesciunt qui. Et est atque necessitatibus. Aperiam rem id odit accusantium.\n \rLabore est eligendi. Culpa quis ea molestiae et rerum quod non rerum. Aut id quasi asperiores laudantium sunt qui velit.",
      "userId": 1,
      "date": 1647048625849,
      "category": "fashion"
    },
    {
      "id": 8,
      "title": "Earum eveniet ipsum id est vel facilis.",
      "body": "Cum eaque fugiat nostrum. Qui veniam quaerat eos numquam iure. Illum reiciendis voluptas.\n \rHarum et id in voluptas harum in nihil. Voluptates earum laborum fugiat eaque reiciendis minima repellat modi voluptate. Atque quam architecto totam consequatur dolorem. Eum nam sit qui.",
      "userId": 1,
      "date": 1647049084387,
      "category": "food"
    },
    {
      "id": 9,
      "title": "Quia dolores debitis voluptas sunt voluptatum aperiam perferendis.",
      "body": "Perspiciatis eveniet nihil voluptate accusantium. Quo architecto temporibus doloribus voluptatem. Aut dolore sit iste.\n \rEt corporis sed veniam praesentium et vero asperiores. Excepturi aut sunt quod eum dolor magnam eius. Et at est ipsam ut omnis minus molestias. Autem quam temporibus dolor ullam necessitatibus asperiores laborum sint autem. Nesciunt sunt adipisci libero magni ea mollitia eligendi delectus nihil. Nisi impedit repudiandae itaque.",
      "userId": 1,
      "date": 1647003849329,
      "category": "food"
    },
    {
      "id": 10,
      "title": "Neque officia est quia laudantium dolor.",
      "body": "Quam minus iste. Deleniti aut voluptatem aut similique suscipit repellat. Maiores ab a iste. Voluptatibus eum saepe sequi. Repellat quisquam odio totam ipsum.\n \rNam dolor molestias eum quod impedit amet quaerat quas. Vel iste nihil sint odio. Sequi ad sed quis consequatur. Ut maxime est dolorem deleniti nulla et ex et. Aut est enim nemo deserunt. Nemo molestias et sunt doloribus quaerat autem.",
      "userId": 1,
      "date": 1647041960848,
      "category": "travel"
    }
  ],
  "postCategories": [
    {
      "id": "travel",
      "title": "Viaggi"
    },
    {
      "id": "food",
      "title": "Cucina"
    },
    {
      "id": "fashion",
      "title": "Moda"
    }
  ]
  };

  // (PASSAGGIO 17) GESTISCO LA LOGICA DELLA SELEZIONE DELLA CATEGORIA
  selectedCategory?: PostCategory; // proprietà che mi serve per tenere traccia della categoria selezionata

  // (PASSAGGIO 19) GESTISCO LA LOGICA DEI PREFERITI
  preferiti: Post[] = []; // proprietà che mi serve per tenere traccia dei post preferiti

  constructor() { }

  // (PASSAGGIO 3) CREO UN METODO CHE RESTITUISCE I POST
  // Questo metodo restituisce un array di Post
  getPosts(): Post[] {
    // qui normalmente ci sarebbe una richiesta ajax per recuperare i dati da un server
    this.selectedCategory = undefined; // resetto la categoria selezionata quando recupero i post
    return this.data.posts; 
  }

  // Questo metodo restituisce un array di Post filtrati per categoria
  getCategories(): PostCategory[] {
    return this.data.postCategories;
  }

  // (PASSAGGIO 10) CREO UNA FUNZIONE CHE MI RITORNA I DATI FILTRATI PER CATEGORIA
  getPostsByCategory(category: PostCategory){
    this.selectedCategory = category; // imposto la categoria selezionata
    return this.data.posts.filter(x => x.category === category.id); // x è un post, x.category è la categoria del post, category.id è l'id della categoria passata come parametro
  }

  // (PASSAGGIO 19) CREO UNA FUNZIONE CHE MI PERMETTE DI AGGIUNGERE UN POST AI PREFERITI
  aggiungiAPreferiti(post: Post) {
    if (!this.preferiti.includes(post)) { // controllo se il post non è già nei preferiti
      this.preferiti.push(post); // aggiungo il post ai preferiti
    }
  }

  // (PASSAGGIO 19) CREO UNA FUNZIONE CHE MI PERMETTE DI RIMUOVERE UN POST DAI PREFERITI
  rimuoviDaPreferiti(post: Post) {
    // alternativa 1 con find:
    // let p = this.preferiti.find(x => x.id == post.id);
    // if (p) {
    //   this.preferiti.splice(this.preferiti.indexOf(p), 1);
    // }

    // alternativa 2 con filter:
    this.preferiti = this.preferiti.filter(p => p != post); // rimuovo il post dai preferiti
  }

  svuotaPreferiti() {
    this.preferiti = []; // svuoto l'array dei preferiti
  }
}
