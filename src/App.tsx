
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Layout
import AppLayout from "./components/layout/AppLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import VideoLibrary from "./pages/VideoLibrary";
import VideoPage from "./pages/VideoPage";
import Comunidade from "./pages/Comunidade";
import Matematica from "./pages/Matematica";
import Linguagens from "./pages/Linguagens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="biblioteca" element={<VideoLibrary />} />
            <Route path="video/:id" element={<VideoPage />} />
            <Route path="comunidade" element={<Comunidade />} />
            <Route path="matematica" element={<Matematica />} />
            <Route path="linguagens" element={<Linguagens />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
