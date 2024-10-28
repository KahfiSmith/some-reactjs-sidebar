import { ReactNode } from "react";

export default function SidebarV1FullContainer({ children }: { children: ReactNode }) {
  return <div className="min-h-screen text-customWhite flex">{children}</div>;
}
