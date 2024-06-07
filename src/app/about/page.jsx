// Enable React client-side rendering
"use client";

// Import Next.js components for optimized images and client-side navigation
import Image from "next/image";
import Link from "next/link";

// Import reusable UI components
import { Button } from "@/components/ui/button";

// Import icons from Lucide React library
import { MoonIcon, MousePointerClick, SunIcon } from "lucide-react";

// Import dropdown menu components
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

// Main Page component
export default function Page() {
    // Use a custom hook to manage theme state (light/dark/system)
    const { setTheme } = useTheme();
    return (
        <main className="bg-muted/40">
            {/* Landing Page Header Started */}
            <header>
                <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link className="text-primary font-semibold satisfyFont text-3xl" href="/">
                        About Me
                        <span className="font-normal text-sm absolute items-center">
                            <MousePointerClick className="animate-ping " size={14} />
                        </span>
                    </Link>
                    <div className="ms-auto">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            {/* Header Code Ended */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                height={1000}
                                width={1000}
                                alt=""
                                src="/ShivaUni.jpg"
                                quality={100}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Go Bananas Task Completed by Shivendra Jat</h2>

                            <p className="mt-4 text-gray-500">
                                I am writing to formally submit my completed project as per the assigned task guidelines. Adhering meticulously to the provided
                                instructions, I have ensured that every aspect of the project reflects a commitment to excellence and professionalism.
                            </p>

                            <p className="text-sm p-2">
                                Or checkout my{" "}
                                <Link href="https://github.com/shivendra8004" className="text-sm underline" target="_blank">
                                    Github
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-500 dark:bg-secondary"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-gray-500 dark:bg-secondary"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-gray-500 dark:bg-secondary"></span>
                <span className="shrink-0 px-6">xxxxx</span>
                <span className="h-px flex-1 bg-gray-500 dark:bg-secondary"></span>
            </span>

            <section>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Technologies Used</h2>

                            <p className="mt-4 text-gray-500">
                                This task is built with the latest technologies to showcase excellence in every aspect. following their instructions closely and
                                using the newest technology to make it great.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-muted/40 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Next.Js</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">React framework for seamless web development.</p>
                            </div>

                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-muted/40 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Tailwind CSS</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">Streamlined styling approach for design implementation.</p>
                            </div>
                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-muted/40 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Shadcn/ui</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">Best open source library of beautiful components.</p>
                            </div>
                            <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg bg-muted/40 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Lucide React</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">Icon library enhancing visuals and functionality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
