import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      {/* TODO: Start adding pages, first main page for schedule/now-playing page */}
        <Route index
          element={
            <section className="mx-auto max-w-7xl px-4 py-12">
              <h1 className="font-display text-4xl">Welcome to CinemaNet</h1>
              <p className="mt-2 text-ink-300">Your cinema experience starts here.</p>
            </section>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
