
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { TerminalProvider } from "./contexts/TerminalContext";
import Terminal from "./components/Terminal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

console.log('App.tsx loading...');

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TerminalProvider>
          <Toaster />
          <Sonner />
          <Terminal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TerminalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
