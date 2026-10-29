import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){
    // ADD LANGUAGE CHANGE OPTION, maybe i18n hook
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main" className="flex-1">
                <Outlet />
            </main>
            <footer className="border-t border-ink-700 px-4 py-8 text-center text-sm text-ink-500">
               © 2026 CinemaNet. Cinema Network project
            </footer>
        </div>
    )
}