import FetchPosts from "~/api/fetchPosts";

export async function clientLoader() { //this can also accept 'params'
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
                            .then(r => r.json())
                            .catch(error=> {return error})
    
    return posts
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Posts({loaderData}:any){
    console.log(loaderData);
}