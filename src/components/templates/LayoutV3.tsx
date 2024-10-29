import SidebarV1Container from "@/components/molecules/SidebarV1Container";
import SidebarV1FullContainer from "@/components/molecules/SidebarV1FullContainer";
import SidebarV3Component from "@/components/organisms/SidebarV3Component";
import { ReactNode, useState } from "react";

export default function LayoutV3({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarV1FullContainer>
      <SidebarV3Component open={open} setOpen={setOpen} />
      <SidebarV1Container open={open}>
        {children}
      </SidebarV1Container>
    </SidebarV1FullContainer>
  );
}
