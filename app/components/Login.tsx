import { Form } from "react-router";

export default function Login(){
    return (
        <div className="p-4 max-w-sm mx-auto">
        <h1 className="text-xl mb-4">Login</h1>

        {/* when Form is exported from some other component then the action will be invoked using 'action' prop of Form */}
        <Form action="/login" method="post" className="flex flex-col gap-2">
            <input
                name="username"
                type="text"
                placeholder="Username"
                className="border px-2 py-1 rounded"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Login
            </button>
        </Form>
        </div>
    )
}