import HomePage from "./components/pages/homepage";
import Search from "./components/pages/search";

const routes = [
  {
    path: "/",
    name: "Main",
    component: HomePage,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

export default routes;
