import { index, route, layout, type RouteConfig } from "@react-router/dev/routes";

export default [

    route('/login','./routes/login/index.tsx'), // /login
    route('/search','./routes/search/index.tsx'), // /search

    layout('./routes/layout.tsx',[
        index("./routes/index.tsx"),        // /
        route("/contact",'./routes/contact.tsx'),      // /contact
        route("/profile",'./routes/profile/index.tsx'),      // /profile
        route("/profile/:id",'./routes/profile/[id].tsx'),      // /dynamic profile ids
        route('/posts', './routes/posts/index.tsx'), // /posts
    ]),

    // adding nested shared layout routes
    layout('./routes/marketing/layout.tsx',[
        route('/marketing',"./routes/marketing/index.tsx"), // /marketing
        route('/marketing/contact','./routes/marketing/contact.tsx') // /marketing/contact
    ]),

] satisfies RouteConfig;
