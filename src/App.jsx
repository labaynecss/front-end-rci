import React, { useState, useEffect } from 'react';
import About from './pages/home/About';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/authPage/Login';
import { Register } from './pages/authPage/Register';
import { Loading } from './components/loading/Loading';
import StudentUi from './pages/student/StudentUi';
import Admin from './pages/private/admin';
import OnlineApplication from './pages/onlineApplication/OnlineApplication';
import BachelorsForm from './pages/onlineApplication/forms/BachelorsForm';
import ScrollToTop from './components/ScrollTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AdminLogin from './pages/auth/AdminLogin';
import PageNotFound from './components/PageNotFound';
import Roles from './pages/private/roles/index';
import PrivateRoute from './routes/PrivateRoute';
import AdminRegister from './pages/auth/AdminRegister';
import MyForm from './pages/onlineApplication/forms/test';
import Registar from './pages/private/registration/index';
import EnrollmentQueue from './pages/private/registration/EnrollmentQueue';
import BarChart from './pages/private/admin/pages/BarChart';
import Home from './pages/private/admin/pages/Home';
import LineChart from './pages/private/admin/pages/LineChart';

import AddBooks from './pages/addmiscbooks/AddBooks';

import PieChart from './pages/private/admin/pages/PieChart';
import Employee from './pages/private/admin/pages/Employee';
import Subject from './pages/private/registration/pages/Subject';
import CreateSubject from './pages/private/registration/pages/CreateSubject';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const queryClient = new QueryClient();

  // useEffect(() => {
  //   setLoading(true);

  //   const delay = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/studentportal" element={<StudentUi />} />

            <Route path="addmiscbooks" element={<AddBooks />} />
            <Route path="/applyNow" element={<OnlineApplication />} />
            <Route path="/application" element={<BachelorsForm />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/test" element={<MyForm />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Private Routes */}
            <Route path="/private" element={<PrivateRoute />}>
              <Route element={<Admin />}>
                <Route path="admin-dashboard" element={<Home />} />
                <Route path="employees" element={<Employee />} />
                <Route path="employees/:id" element={<Employee />} />
                <Route path="bar-chart" element={<BarChart />} />
                <Route path="line-chart" element={<LineChart />} />
                <Route path="pie-chart" element={<PieChart />} />
              </Route>
              <Route path="admin-registration" element={<Registar />}>
                <Route path="enrollment-queue" element={<EnrollmentQueue />} />
                <Route path="list-subject" element={<Subject />} />
              </Route>
              <Route path="roles" element={<Roles />} exact />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </Router>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;
