import { useReducer } from "react";
import CounterReducer from "~/reducers/CounterReducer";

export async function loader(){
    return { initialCount: 0 }
}
export default function CounterHomepage({loaderData}:any){
    const { initialCount } = loaderData;
    const [state, dispatch]=useReducer(CounterReducer, {count:initialCount});
    return (
        <div>
            <h2>Current Count:{state?.count}</h2>

            <button
                onClick={() => {dispatch({type:'INCREMENT'})}}
                style={{
                    padding: "10px 20px",
                    margin: "0 8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    background: "#4f46e5",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    transition: "0.2s ease",
                }}
            >
                +
            </button>
            <button 
                onClick={() => {dispatch({type:'DECREMENT'})}}
                style={{
                    padding: "10px 20px",
                    margin: "0 8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    background: "#4f46e5",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    transition: "0.2s ease",
                }}
            >
                -
            </button>
        </div>
    )
}