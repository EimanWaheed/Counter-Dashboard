import { NavLink, Outlet } from "react-router";

export default function CounterLayout () {
    return (
        <>
            <h1>Counter Dashboard</h1>

            <nav style={{ display: "flex", gap: 20 }}>
                <NavLink to="/counter">Counter</NavLink>
                <NavLink to="/counter/reset">Reset</NavLink>
            </nav>

            <Outlet />
        </>
    )
}