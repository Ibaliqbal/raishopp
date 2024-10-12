import UserLayout from "@/layouts/user-layout";
import StoreDashboardView from "@/views/my/store/dashboard/store-dashboard-view";

const Page = () => {
  return (
    <UserLayout>
      <StoreDashboardView />
    </UserLayout>
  );
};

export default Page;
