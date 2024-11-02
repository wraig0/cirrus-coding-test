import { MeterPage } from "./components/MeterPage";
import { MeterError } from "./components/MeterError";

export const routes = [
  {
    path: "/meter/:id",
    element: <MeterPage />,
    errorElement: <MeterError />,
  },
];
