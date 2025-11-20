//dynamic route for profile/:id

import { useParams } from "react-router";

const Profile = ({params}:any) => {
    // const params = useParams(); //used for fetching 
    return (
        <div>
            <h1>User Profile Page</h1>
            <p>Profile ID: {params.id}</p>
        </div>
    )
}
export default Profile;