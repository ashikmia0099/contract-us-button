import Nabbar from '@/Component/Shared/Navbar/Nabbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const Home = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;