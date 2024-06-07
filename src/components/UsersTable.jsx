"use client"; // Indicates that this file should be processed as a client-side module

import Image from "next/image"; // Importing the Image component from next/image
import { LoaderIcon, MoreHorizontal } from "lucide-react"; // Importing icons from lucide-react
import { Badge } from "@/components/ui/badge"; // Importing the Badge component
import { Button } from "@/components/ui/button"; // Importing the Button component
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Importing table components
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; // Importing dropdown menu components
import { useEffect, useState } from "react"; // Importing hooks from React
import { toast } from "./ui/use-toast";

// UsersTable component definition
const UsersTable = () => {
    const [isLoading, setIsLoading] = useState(true); // State to manage loading state
    const [users, setUsers] = useState([]); // State to store user data

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetching data from API
                const data = await response.json(); // Parsing response JSON
                setUsers(data); // Setting user data
                toast({
                    title: "Success",
                    description: "Data Fetched Successfully",
                    variant: "destructive",
                });
                setIsLoading(false); // Setting loading state to false
            } catch (error) {
                setIsLoading(false); // Setting loading state to false
                console.log("Error", error); // Logging error
            }
        };
        setIsLoading(true); // Setting loading state to true
        fetchData(); // Fetching data
    }, []); // Empty dependency array to run effect only once

    // Function to format full address
    const fullAddress = (suite, street, city) => {
        return suite + ", " + street + ", " + city;
    };

    return (
        <div>
            {isLoading ? ( // Conditional rendering based on loading state
                <div className="flex justify-center items-center h-52">
                    <LoaderIcon className="animate-spin" size={30} /> {/* Loading spinner */}
                </div>
            ) : (
                <>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span> {/* Screen reader only text */}
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Username</TableHead>
                                <TableHead>Website</TableHead>
                                <TableHead className="hidden md:table-cell">Company</TableHead>
                                <TableHead className="hidden md:table-cell">Address</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span> {/* Screen reader only text */}
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => {
                                return (
                                    <TableRow key={user.id}>
                                        {" "}
                                        {/* Unique key for each row */}
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/ShivaUni.jpg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{user.username}</Badge> {/* Badge component for username */}
                                        </TableCell>
                                        <TableCell>{user.website}</TableCell>
                                        <TableCell className="hidden md:table-cell">{user.company.name}</TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {fullAddress(user.address.suite, user.address.street, user.address.city)} {/* Full address */}
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" /> {/* More options icon */}
                                                        <span className="sr-only">Toggle menu</span> {/* Screen reader only text */}
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel> {/* Dropdown label */}
                                                    <DropdownMenuItem>Edit</DropdownMenuItem> {/* Edit action */}
                                                    <DropdownMenuItem>Delete</DropdownMenuItem> {/* Delete action */}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <div className="text-xs text-muted-foreground px-4">
                        Showing <strong>1 - 10</strong> of <strong>{users.length}</strong> users. {/* Pagination info */}
                    </div>
                </>
            )}
        </div>
    );
};

export default UsersTable; // Exporting the UsersTable component
