import { fetchShareOnTwitter, fetchShareOnFacebook } from "./socialAPI";

function createPost(webPost){
    return {title: webPost.title, 
        imgUrl: webPost.imgUrl, 
        description: webPost.description,
        location: webPost.location}
}

export function shareOnFacebook(webPost){
    let post = createPost(webPost)

    //do sometings with post...

    fetchShareOnFacebook(post)
}

export function shareOnTwitter(webPost){
    let post = createPost(webPost)

    //do other sometings with post...

    fetchShareOnTwitter(post)
}










