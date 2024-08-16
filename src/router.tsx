import { type RouteObject, createBrowserRouter } from "react-router-dom";

import { DemosPage } from "./pages/DemosPage";

export const routes: Array<RouteObject> = [
  { element: <DemosPage />, path: "/" },
];

export const router = createBrowserRouter(routes);
