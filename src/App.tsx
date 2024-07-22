import { DashboardContentHeader } from "./dashboard/DashboardContentHeader";
import { DashboardHeader } from "./dashboard/DashboardHeader";

export const App = () => {
  return (
    <div className="dark min-h-full bg-background text-foreground">
      <DashboardHeader />
      <DashboardContentHeader />
    </div>
  );
};
