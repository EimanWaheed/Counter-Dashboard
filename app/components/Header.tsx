import { Link, NavLink } from "react-router";

export default function Header () {
    const links = [
        {to:'/', label:'Home'},
        {to:'/contact', label:'Contact'},
        {to:'/profile', label:'Profile'},
        {to:'/posts', label:'Posts'},

    ]
    return (
        <>
            <div>This navar is using Link </div>
            <nav className="p-4 bg-red-200 text-black flex gap-4">
            {/* Use <Link> when the link doesn't need active styling */}
                {links.map(link =><Link to={link.to}>{link.label}</Link>)}
                {/* <Link to="/profile/1">Profile</Link> */}  {/* even if i comment this Link then routes will be available for users, whenever
                user hits /profile/1, it will be available */}
            </nav>

            <div>This navar is using NavLink </div>
            {/* now using NavLink, This component is for navigation links that need to render active and pending states. */}
            <nav className="p-4 bg-red-200 text-black flex gap-4">
            {/* Use <Link> when the link doesn't need active styling */}
                {links.map(link => <NavLink to={link.to} className={({isActive})=>isActive? "text-red-500" : "text-black"}>{link.label}</NavLink>)}
            </nav>
        </>
    )
}