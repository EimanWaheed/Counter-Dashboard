import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate();
    return (
        <button onClick={()=>navigate('/counter')}>Click me to go Counter Dashboard!</button>
    )
}