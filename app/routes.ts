import { index, route, layout, type RouteConfig, prefix } from "@react-router/dev/routes";

export default [

    index('./routes/index.tsx'), // /

    // using 'prefix' because 'layout' does not add path to the URL segment
    ...prefix('counter',[ 
        layout('./routes/counter/layout.tsx',[
            index('./routes/counter/index.tsx'), // /counter
            route('/reset','./routes/counter/reset.tsx') // /counter/reset
        ])
    ])

] satisfies RouteConfig;
