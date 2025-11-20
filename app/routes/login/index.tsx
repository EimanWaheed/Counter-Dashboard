import { Form, redirect, useNavigate } from "react-router";
import LoginComponent from "~/components/Login";

// server action defined for handling Form submit for 'Login' 
// Data mutations are done through Route actions.
export async function action({request}:any){ 
    const formData = await request.formData();
    console.log(formData)

    return redirect('/')
}