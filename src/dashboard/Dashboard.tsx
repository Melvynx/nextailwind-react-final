import { DashboardContent } from "./DashboardContent";
import { DashboardContentHeader } from "./DashboardContentHeader";
import { DashboardHeader } from "./DashboardHeader";

export const Dashboard = () => {
  return (
    <div className="min-h-full bg-background text-foreground">
      <DashboardHeader />
      <DashboardContentHeader />
      <DashboardContent />
    </div>
  );
};
