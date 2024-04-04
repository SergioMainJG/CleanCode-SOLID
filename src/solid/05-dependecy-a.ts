import { PostService } from './05-dependecy-b';
import { JsonDataBaseService, LocalDataBaseService, WebAPIPostService } from './05-dependecy-c';


// Main
(async () => {

    // const provider = new WebAPIPostService();
    const provider = new JsonDataBaseService();
    // const provider = new LocalDataBaseService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();