import { Link, NavLink, useNavigate } from "react-router";
import FetchTodos from "~/api/fetchPosts";
import Login from "~/components/Login";

export default function Home() {
  const { data, isLoading, error } = FetchTodos();
  const navigate = useNavigate();
  return (
    <>
      <div>I am in Homepage</div>
      {/* <button onClick={()=>navigate('/marketing')}>Go to Marketing!</button> */}

      <Login/>
    </>
  )
}
