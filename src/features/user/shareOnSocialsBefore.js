import { fetchShareOnTwitter, fetchShareOnFacebook } from "./socialAPI";

export function shareOnFacebook(webPost){
    let post = {title: webPost.title, 
        imgUrl: webPost.imgUrl, 
        description: webPost.description,
        location: webPost.location}

    //do sometings with post...
   
    fetchShareOnFacebook(post)
}

export function shareOnTwitter(webPost){
    let post = {title: webPost.title, 
        imgUrl: webPost.imgUrl, 
        description: webPost.description,
        location: webPost.location}

    //do other sometings with post...
                
    fetchShareOnTwitter(post)
}










