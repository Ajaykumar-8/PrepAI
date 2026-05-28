import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {

  return (

    <div
      className="
        flex
        min-h-screen
        bg-black
        text-white
      "
    >

      {/* Sidebar */}
      <Sidebar />



      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">

          Welcome to PrepAI 🚀

        </h1>



        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {/* Card 1 */}
          <div
            className="
              p-6
              rounded-3xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
            "
          >

            <h2 className="text-2xl font-semibold mb-3">
              AI Interviews
            </h2>

            <p className="text-gray-300">
              Practice AI-generated interview questions.
            </p>

          </div>



          {/* Card 2 */}
          <div
            className="
              p-6
              rounded-3xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
            "
          >

            <h2 className="text-2xl font-semibold mb-3">
              Resume Analyzer
            </h2>

            <p className="text-gray-300">
              Analyze resumes with AI feedback.
            </p>

          </div>



          {/* Card 3 */}
          <div
            className="
              p-6
              rounded-3xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
            "
          >

            <h2 className="text-2xl font-semibold mb-3">
              Mock Tests
            </h2>

            <p className="text-gray-300">
              Improve technical interview preparation.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;