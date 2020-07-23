import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "exact-active-link-class",
    linkActiveClass: "link-active-class",
    routes: [
        { path: "/", name: "home", component: Home },
        {
            path: "/helloworld",
            name: "helloworld",
            component: () =>
                import(
                    /* webpackChunckName:"hello_world" */ "./views/HelloWorld"
                ),
        },
        {
            path: "/test",
            name: "test",
            component: () =>
                import(/* webpackChunckName:"test" */ "./views/Test"),
        },
        {
            path: "/users",
            name: "users",
            component: () =>
                import(/* webpackChunckName:"users" */ "./views/Users"),
        },
        {
            path: "/brazil",
            name: "brazil",
            component: () =>
                import(/* webpackChunckName:"brazil" */ "./views/Brazil"),
        },
        {
            path: "/panama",
            name: "panama",
            component: () =>
                import(/* webpackChunckName:"panama" */ "./views/Panama"),
        },
        {
            path: "/hawaii",
            name: "hawaii",
            component: () =>
                import(/* webpackChunckName:"hawaii" */ "./views/Hawaii"),
        },
        {
            path: "/jamaica",
            name: "jamaica",
            component: () =>
                import(/* webpackChunckName:"jaimaca" */ "./views/Jamaica"),
        },
        {
            path: "/details/:id",
            name: "DestinationDetails",
            component: () =>
                import(
                    /* webpackChunckName:"details" */ "./views/DestinationDetails"
                ),
        },
    ],
});
