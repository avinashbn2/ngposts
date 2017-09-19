import {Comment} from './comment';
import {Author} from './author';
export interface Post {
    postTitle: string;
    postDescription: string;
    comments: Comment[];
    postAuthor: Author;

}
