import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import PracticeAreaDetail from "./pages/PracticeAreaDetail";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

import ThankYou from "./pages/ThankYou"; // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* New Thank You Route */}
          <Route path="/thankyou" element={<ThankYou />} />

          {/* Catch All - keep this last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
