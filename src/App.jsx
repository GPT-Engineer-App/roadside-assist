import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Truck, Calendar, Mail } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Truck className="h-4 w-4" />,
  },
  {
    title: "Booking",
    to: "/booking",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Contact Us",
    to: "/contact-us",
    icon: <Mail className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="services" element={<Services />} />
              <Route path="booking" element={<Booking />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;