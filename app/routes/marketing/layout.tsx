import { Outlet, Link } from "react-router";

// used for shared component across children
export default function MarketingLayout() {
  return (
    <div>
      <header>
        <Link to="/marketing">Home</Link> | <Link to="/marketing/contact">Contact</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
