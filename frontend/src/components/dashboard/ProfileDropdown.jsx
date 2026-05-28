import {
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

const ProfileDropdown = () => {

  return (
    <div
      className="
        flex
        items-center
        gap-3
        bg-white/10
        px-4
        py-2
        rounded-2xl
        cursor-pointer
        hover:bg-white/20
        transition
      "
    >

      {/* Avatar */}
      <div
        className="
          w-10
          h-10
          rounded-full
          bg-gradient-to-r
          from-purple-500
          to-blue-500
          flex
          items-center
          justify-center
        "
      >
        <User size={18} />
      </div>



      {/* User Info */}
      <div className="hidden md:block">

        <h3 className="font-semibold">
          Ajay
        </h3>

        <p className="text-sm text-gray-400">
          Full Stack Developer
        </p>

      </div>

      <ChevronDown size={18} />

    </div>
  );
};

export default ProfileDropdown;