import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { CalendarDays } from "lucide-react";

export const DashboardContentHeader = () => {
  return (
    <div className="m-auto mt-8 flex max-w-6xl flex-col items-start gap-6 px-4 lg:mt-10">
      <div className="flex w-full items-center gap-4">
        <div className="flex flex-col gap-2">
          <Typography variant="h1">Dashboard</Typography>
          <Typography ref={(ref) => {}} variant="link" href="/">
            Dashboard
          </Typography>
        </div>
        <div className="flex-1" />
        <Button variant="outline">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Jan 20, 2023 - Feb 09, 2023</span>
          </div>
        </Button>

        <Button variant="invert">Download</Button>
      </div>
      <Tabs value="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
