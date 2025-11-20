import { useQuery } from "@tanstack/react-query";


export default function FetchPosts () {
    return useQuery({
        queryKey:['todos'],
        queryFn:()=>
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) =>res.json())
                .catch((error) => console.log(error))
        
    })
}