// Importing React library
import * as React from "react";

// Importing Dashboard component from the specified path
import { Dashboard } from "@/components/Dashboard";

// Exporting the Home component as the default export
export default function Home() {
    return (
        // Main HTML tag to wrap the Dashboard component
        <main>
            {/* Rendering the Dashboard component */}
            <Dashboard />
        </main>
    );
}
