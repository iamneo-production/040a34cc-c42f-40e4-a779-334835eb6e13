import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/public/home/Home';
import Login from './pages/public/login/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Users from './pages/admin/users/Users';
import UserDetails from './pages/admin/userDetails/UserDetails';
import Transactions from './pages/admin/transactions/Transactions';
import DueList from './pages/admin/dueList/Transaction';
import LoansInAdmin from './pages/admin/loans/LoansInAdmin';
import AdminSettings from './pages/admin/settings/AdminSettings';
import Application from './pages/admin/applications/Application';
import Signup from './pages/public/signup/Signup';
import NavbarUserOutlet from './pages/user/userDashboard/NavbarUserOutlet';
import Notification from './pages/user/notifications/Notification';
import PaymentSection from './pages/user/payment/PaymentSection';
import UserAnalysis from './pages/user/analysis/UserAnalysis';
import EditProfile from './pages/user/profile/EditProfile';
import Logout from './pages/user/logout/Logout';
import AdminNavbar from './components/admin/AdminNavbar';
import LoansInUser from './pages/user/loans/LoansInUser';
import ApplicationUpload from './components/user/ApplicationForm-3';
import Applicationform from './components/user/ApplicationForm-1';
import ApplicationFormContinue from './components/user/ApplicationForm-2';
import ApplicationForm from './pages/user/application/ApplicationForm';
import UserDashboard from './pages/user/userDashboard/UserDasboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
       

        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Redirect to home page for unauthorized routes */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function AdminRoutes() {
  const role = localStorage.getItem('role');

  return role === 'ADMIN' ? (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/dueList" element={<DueList />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/loans" element={<LoansInAdmin />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  ) : (
    <Navigate to="/user/dashboard" />
  );
}

function UserRoutes() {
  const role = localStorage.getItem('role');

  return role === 'USER' ? (
    <>
      <NavbarUserOutlet />
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/loans" element={<LoansInUser />} />
        <Route path="/applicationform/:loanId" element={<ApplicationForm />} />
        <Route path="/loan-applications2/:userId/:loanApplicationId/:loanId" element={<ApplicationFormContinue />} />
        <Route path="/image/upload/:userId/:loanApplicationId/:loanId" element={<ApplicationUpload />} />
        <Route path="/analysis" element={<UserAnalysis />} />
        <Route path="/notifications" element={<Notification/>}/>
        <Route path="/payment" element={<PaymentSection />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/logout" element={<Logout />} />
       
      </Routes>
    </>
  ) : (
    <Navigate to="/admin/dashboard" />
  );
}

export default App;