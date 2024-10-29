import {
  Calendar,
  ChevronLeft,
  Folder,
  LayoutGrid,
  LogOut,
  MessageCircleCode,
  Search,
  Settings,
  Spline,
  User,
} from "lucide-react";

interface SidebarV1ComponentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItem {
  title: string;
  icon: JSX.Element;
  gap?: boolean;
}

export default function SidebarV3Component({
  open,
  setOpen,
}: SidebarV1ComponentProps) {
  const Menus: MenuItem[] = [
    { title: "Dashboard", icon: <LayoutGrid size={20} /> },
    { title: "Inbox", icon: <MessageCircleCode size={20} /> },
    { title: "Accounts", icon: <User size={20} />, gap: true },
    { title: "Schedule", icon: <Calendar size={20} /> },
    { title: "Search", icon: <Search size={20} /> },
    { title: "Analytics", icon: <Spline size={20} /> },
    { title: "Files", icon: <Folder size={20} />, gap: true },
    { title: "Setting", icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`${
        open ? "w-64 min-w-64" : "w-20 min-w-20"
      } bg-secondary min-h-screen p-5 pt-8 fixed duration-500 border-tertiary border-2 font-medium flex flex-col justify-between`}
    >
      <ChevronLeft
        size={16}
        className={`absolute cursor-pointer -right-3 top-11 w-6 h-6 border-tertiary border-2 rounded-full text-customWhite bg-secondary ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center mb-4">
        <img
          src="/images/react.svg"
          className={`w-12 h-12 cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Sidebar
        </h1>
      </div>

      <ul className="pt-6 flex-grow">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-4 p-2 rounded-md cursor-pointer text-gray-300 text-sm hover:bg-tertiary ${
              Menu.gap ? "mt-9" : "mt-2"
            } ${index === 0 && "bg-tertiary"}`}
          >
            <div>{Menu.icon}</div>
            <span
              className={`whitespace-nowrap truncate transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between pt-4 border-t-2 border-tertiary">
        <div className="flex space-x-3 items-center">
          <img src="/images/waifu.jpeg" alt="" className="w-10 rounded-md" />
          <span>Kahfi Smith</span>
        </div>
        <div className="flex items-center">
          <LogOut size={20} />
        </div>
      </div>
    </aside>
  );
}
