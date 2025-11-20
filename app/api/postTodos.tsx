import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ok } from "assert";

export default function PostTodos () {
    const queryClient = useQueryClient();
    useMutation ({
        mutationFn: async (newTodo: { title: string }) => {
            return fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: { "Content-Type": "application/json" },
            });
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries()
            return ok;
        }
    })
}