"use client"
import Navbar from "@/components/Layout/Navbar";
import NotificationDropDown from "@/components/Layout/NotificationDropDown";
import { NotificationProvider } from "@/context/notification-context";
import ProfileDropDown from "@/components/Layout/ProfileDropDown";
import { ProfileProvider } from "@/context/profile-context";
import ProductsLandingPage from "@/components/Products/ProductsLandingPage";
import Main from "@/components/Products/Main";
import BackButton from "@/components/Layout/BackButton";

export default function ProductsClient() {
    return <>
        <NotificationProvider>
            <ProfileProvider>
                <Navbar />
                <NotificationDropDown />
                <ProfileDropDown />
            </ProfileProvider>
        </NotificationProvider>
        <BackButton />
        <div className="ml-10 mr-10 mb-10">
        <ProductsLandingPage />
        <Main />
        </div>

    </>
}
