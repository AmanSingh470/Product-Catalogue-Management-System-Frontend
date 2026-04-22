import Navbar from "@/components/Layout/Navbar";
import NotificationDropDown from "@/components/Layout/NotificationDropDown";
import { NotificationProvider } from "@/context/notification-context";
import ProfileDropDown from "@/components/Layout/ProfileDropDown";
import { ProfileProvider } from "@/context/profile-context";


export default async function Page() {
    
    return <>
        <div className="justify-items-center">
            <h1>Products Listing Page</h1>
        </div>
    </>

}