import { Button } from "./dashboard/Button";
import { DashboardContent } from "./dashboard/DashboardContent";
import { DashboardContentHeader } from "./dashboard/DashboardContentHeader";
import { DashboardHeader } from "./dashboard/DashboardHeader";

export const App = () => {
  return (
    <div className="dark min-h-full bg-background text-foreground">
      <div className="mx-auto flex gap-4 p-8">
        <Button variant="default" size="sm">
          Default
        </Button>
        <Button variant="default">Default</Button>
        <Button variant="default" size="lg">
          Default
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <DashboardHeader />
      <DashboardContentHeader />
      <DashboardContent />
    </div>
  );
};
