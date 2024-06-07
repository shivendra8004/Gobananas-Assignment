"use client"; // Indicates that this file should be processed as a client-side module

import * as React from "react"; // Importing React
import { ThemeProvider as NextThemesProvider } from "next-themes"; // Importing ThemeProvider from next-themes

// ThemeProvider component definition
export function ThemeProvider({ children, ...props }) {
    // Returning the NextThemesProvider component with passed props and children
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
