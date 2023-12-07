import React from "react";
import MainLayout from "../layouts/dashboard";
import User from "../sections/user/view/user-view";
import Product from "../sections/products/view/products-view";
import Blog from "../sections/blog/view/blog-view";
import DashboardLayout from "../sections/overview/view/app-view";
export default function Admin(){
return(
    <>
    <MainLayout children = {<DashboardLayout/>}/>
    </>
)
}
