import AdminClient from "@/app/admin/AdminClient";
import { ToggleSidebarProvider } from "@/context/admin/sidebar-context";
import {DashboardProvider} from "@/context/admin/dashboard-context";
import {getDashboard} from "@/services/admin/dashboard.service";

export default async function page() {
  const res = await getDashboard();
  return (
    <ToggleSidebarProvider>
      <DashboardProvider initialData={res}>
      <AdminClient />        
      </DashboardProvider>
    </ToggleSidebarProvider>
  )
}
