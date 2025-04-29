import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SchoolTuitions from "@/pages/SchoolTuitions";
import EntranceExams from "@/pages/EntranceExams";
import CompetitiveExams from "@/pages/CompetitiveExams";
import CommunicationCourses from "@/pages/CommunicationCourses";
import Courses from "@/pages/Courses";
import TechCourses from "@/pages/TechCourses";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/school-tuitions" element={<SchoolTuitions />} />
            <Route path="/courses/entrance-exams" element={<EntranceExams />} />
            <Route path="/courses/competitive-exams" element={<CompetitiveExams />} />
            <Route path="/courses/communication-courses" element={<CommunicationCourses />} />
            <Route path="/courses/tech-courses" element={<TechCourses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
