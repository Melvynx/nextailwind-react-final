import { ThemeProvider } from "./components/theme-provider";
import { Dashboard } from "./dashboard/Dashboard";

export const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};
