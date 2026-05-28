import {
  Bell,
  Search,
} from "lucide-react";

import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {

  return (
    <header
      className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-10
      "
    >

      {/* Search */}
      <div
        className="
          flex
          items-center
          gap-3
          bg-white/10
          border
          border-white/10
          rounded-2xl
          px-4
          py-3
          w-full
          md:w-[420px]
        "
      >

        <Search size={18} />

        <input
          type="text"
          placeholder="Search modules..."
          className="
            bg-transparent
            outline-none
            w-full
            placeholder:text-gray-400
          "
        />

      </div>



      {/* Right Side */}
      <div className="flex items-center gap-4">

        <button
          className="
            p-3
            rounded-2xl
            bg-white/10
            hover:bg-white/20
            transition
          "
        >
          <Bell size={20} />
        </button>

        <ProfileDropdown />

      </div>

    </header>
  );
};

export default Navbar;