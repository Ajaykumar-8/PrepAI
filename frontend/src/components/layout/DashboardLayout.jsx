import Sidebar from "../dashboard/Sidebar";

import Navbar from "../dashboard/Navbar";

const DashboardLayout = ({ children }) => {

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Sidebar */}
      <Sidebar />



      {/* Main Content */}
      <main className="flex-1 relative z-10 p-6 md:p-10 overflow-y-auto">

        <Navbar />

        {children}

      </main>

    </div>
  );
};

export default DashboardLayout;