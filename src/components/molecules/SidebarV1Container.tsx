import { ReactNode } from "react";

export default function SidebarV1Container({ children, open }: { children: ReactNode; open: boolean }) {
  return (
    <div
      className={`min-h-screen text-customWhite p-8 transition-all duration-500 ${
        open ? "ml-64" : "ml-20"
      }`}
    >
      {children}
    </div>
  );
}
