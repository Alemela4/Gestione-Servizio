// (PASSAGGIO 2) QUESTO FILE CONTIENE LA DESCRIZIONE DEI POST E DELLE CATEGORIE
// export interface PostCategory {}
export type PostCategory = {
    id: string;
    title: string;
}

// export interface Post {}
export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    date: number;
    category: string;
}

// creo un tipo Blog che contiene un array di Post e un array di PostCategory
export type Blog = {
    posts: Post[];
    postCategories: PostCategory[];
}