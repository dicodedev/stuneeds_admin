import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./views/Index";

function AppRouter() {
  return (
    <Routes errorElement={<p>Client Error</p>}>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Error content="404 | NOT FOUND" />} />
    </Routes>
  );
}

export default AppRouter;
