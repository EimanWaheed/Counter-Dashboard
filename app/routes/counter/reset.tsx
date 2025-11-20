import { Form, redirect } from "react-router";

export async function action() {
  return redirect('/counter')
}

export default function ResetCounter(){
    return (
        <Form method="post">
            <button type="submit" 
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
            }}>
                Reset Counter
            </button>
        </Form>
    )
}