"use client"; // Indicates that this file should be processed as a client-side module

// Importing necessary modules and components
import Image from "next/image";
import Link from "next/link";
import { File, Home, LineChart, ListFilter, PanelLeft, PlusCircle, Search, Settings, Share2, Users2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import UsersTable from "./UsersTable";

// Dashboard component definition
export function Dashboard() {
    const { setTheme } = useTheme(); // Hook to manage theme settings

    return (
        // Main container for the dashboard
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            {/* Sidebar navigation */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/about"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Users2 className="h-5 w-5" />
                                <span className="sr-only">About</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">About</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                target="_blank"
                                href="https://shivendra.me/"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Share2 className="h-5 w-5" />
                                <span className="sr-only">Portfolio</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Portfolio</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
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
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
            {/* Main content area */}
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
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

                                <Link href="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>

                                <Link href="/about" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Users2 className="h-5 w-5" />
                                    About
                                </Link>
                                <Link
                                    href="https://shivendra.me/"
                                    target="_blank"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Share2 className="h-5 w-5" />
                                    Portfolio
                                </Link>
                                <Link href="/" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <LineChart className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Products</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]" />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                <Image src="/shivendra.jpg" width={44} height={44} alt="Shiva" className="overflow-hidden rounded-full" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Draft</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-7 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size="sm" variant="outline" className="h-7 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                                </Button>
                                <Button size="sm" className="h-7 gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>Products</CardTitle>
                                    <CardDescription>Manage your products and view their sales performance.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <UsersTable />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}
