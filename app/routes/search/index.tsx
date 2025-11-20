import { Form, redirect, useNavigate } from "react-router";

// only data mutations are done through actions, no action defined for method='get'

export default function SearchPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("q") || "";

  return (
    <div className="p-4">
      <h1>Search</h1>
      <Form method="get">
        <input name="q" placeholder="Search..." />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}