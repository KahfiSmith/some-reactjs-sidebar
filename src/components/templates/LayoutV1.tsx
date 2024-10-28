import SidebarV1Container from "@/components/molecules/SidebarV1Container";
import SidebarV1FullContainer from "@/components/molecules/SidebarV1FullContainer";
import SidebarV1Component from "@/components/organisms/SidebarV1Component";
import { ReactNode, useState } from "react";

export default function LayoutV1({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarV1FullContainer>
      <SidebarV1Component open={open} setOpen={setOpen} />
      <SidebarV1Container open={open}>
        {children}
      </SidebarV1Container>
    </SidebarV1FullContainer>
  );
}
