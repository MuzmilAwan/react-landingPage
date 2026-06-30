import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import useStore from "./store/userStore.js";

import {
  Home, About, Solution, Explore, Blog, Login, SignUp
} from "@sections";

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-secondary">
    <div className="w-10 h-10 border-4 border-btn border-t-transparent rounded-full animate-spin" />
  </div>
)

const ProtectedRoute = ({ children }) => {

  const { userData, isRestoring } = useStore();
  if (isRestoring) return <PageLoader />;
  return userData ? children : <Navigate to="/login" replace />;

}

const GuestRoute = ({ children }) => {

  const { userData, isRestoring } = useStore();
  if (isRestoring) return <PageLoader />;
  return userData ? <Navigate to="/explore" replace /> : children;

}

const Layout = ({ children }) => {

  const { isRestoring } = useStore();
  const location = useLocation();
  const authPages = ["/login", "/signup"];
  const isAuthPage = authPages.includes(location.pathname);

  if (isRestoring) return <>{children}</>;

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  const { setUserData, setRestoring } = useStore();

  useEffect(() => {
    const restoreSession = async () => {

      try {

        const response = await fetch("http://localhost:3000/auth/user/me", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.user) {
            setUserData(data.user);
          }
        }

      }
      // catch {} 
      finally {
        setRestoring(false);
      }
    }

    restoreSession();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Guest route redirect to /explore if logged in */}
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
          <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />

          {/* Protected redirect to /login if not logged in */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/solutions" element={<ProtectedRoute><Solution /></ProtectedRoute>} />
          <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}