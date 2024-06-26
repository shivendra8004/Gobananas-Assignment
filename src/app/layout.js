// Importing the Inter font from Google Fonts using next/font/google
import { Inter } from "next/font/google";

// Importing global CSS styles
import "./globals.css";

// Importing ThemeProvider and TooltipProvider components from the specified paths
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

// Initializing the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Defining metadata for the document
export const metadata = {
    title: "GoBananas Assignment", // Title of the document
    description: "Generated by create next app", // Description of the document
};

// Exporting the RootLayout component as the default export
export default function RootLayout({ children }) {
    return (
        // Defining the HTML structure with language set to English
        <html lang="en">
            {/* Applying the Inter font class to the body */}
            <body className={inter.className}>
                {/* Wrapping the children components with ToastProvider, TooltipProvider and ThemeProvider */}

                <TooltipProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <Toaster />
                        {children}
                    </ThemeProvider>
                </TooltipProvider>
            </body>
        </html>
    );
}
