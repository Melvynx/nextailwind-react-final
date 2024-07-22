import { CalendarDays } from "lucide-react";
import { Button } from "./Button";
import { Select } from "./Select";
import { Tab, Tabs } from "./Tabs";

export const DashboardContentHeader = () => {
  return (
    <div className="m-auto mt-8 flex max-w-4xl flex-col items-start gap-6 px-2 lg:mt-10">
      <div className="flex w-full items-center gap-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex-1" />
        <Select>
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Jan 20, 2023 - Feb 09, 2023</span>
          </div>
        </Select>

        <Button>Download</Button>
      </div>
      <Tabs>
        <Tab isActive>Overview</Tab>
        <Tab>Analytics</Tab>
        <Tab>Reports</Tab>
      </Tabs>
    </div>
  );
};
