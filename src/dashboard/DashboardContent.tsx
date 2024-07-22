import { Activity, CreditCard, DollarSign, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./Avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

export const DashboardContent = () => {
  return (
    <main className="m-auto mt-8 flex max-w-6xl flex-col gap-6 px-4 pb-8 lg:mt-10 lg:gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <Card>
          <CardHeader className="relative pb-2">
            <p className="text-base">Total Revenue</p>
            <DollarSign className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p className="text-3xl font-bold">$45,231.89</p>
            <p className="text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="relative pb-2">
            <p className="text-base">Subscriptions</p>
            <User className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p className="text-3xl font-bold">+2350</p>
            <p className="text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="relative pb-2">
            <p className="text-base">Sales</p>
            <CreditCard className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p className="text-3xl font-bold">+12,234</p>
            <p className="text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="relative pb-2">
            <p className="text-base">Active now</p>
            <Activity className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p className="text-3xl font-bold">+573</p>
            <p className="text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <Card className="flex-[3]">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64" />
          </CardContent>
        </Card>
        <Card className="flex-[2]">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <p className="text-sm text-muted-foreground">
              You made 265 sales this month.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <SalesLine name="Melvyn" email="melvyn@gmail.com" amount={1200} />
            <SalesLine name="Alex" email="alex123@example.com" amount={850} />
            <SalesLine
              name="Taylor"
              email="taylor456@example.com"
              amount={2200}
            />
            <SalesLine
              name="Jordan"
              email="jordan789@example.com"
              amount={1500}
            />
            <SalesLine
              name="Morgan"
              email="morgan321@example.com"
              amount={1350}
            />
            <SalesLine name="Casey" email="casey654@example.com" amount={910} />
            <SalesLine
              name="Riley"
              email="riley987@example.com"
              amount={1800}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const SalesLine = ({
  name,
  email,
  amount,
}: {
  name: string;
  email: string;
  amount: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <p className="ml-auto text-xl font-medium">
        +
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)}
      </p>
    </div>
  );
};
