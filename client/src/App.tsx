import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";
import { RaveLayout } from "@/components/layout/RaveLayout";
import { CustomCursor } from "@/components/ui/CustomCursor";

function Router() {
  const [location] = useLocation();

  return (
    <RaveLayout>
        <CustomCursor />
        <AnimatePresence mode="wait">
            <Switch location={location} key={location}>
                <Route path="/" component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </AnimatePresence>
    </RaveLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
    </QueryClientProvider>
  );
}

export default App;
