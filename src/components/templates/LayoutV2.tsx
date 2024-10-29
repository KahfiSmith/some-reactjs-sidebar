import SidebarV1Container from "@/components/molecules/SidebarV1Container";
import SidebarV1FullContainer from "@/components/molecules/SidebarV1FullContainer";
import SidebarV2Component from "@/components/organisms/SidebarV2Component";
import { ReactNode, useState } from "react";

export default function LayoutV2({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarV1FullContainer>
      <SidebarV2Component open={open} setOpen={setOpen} />
      <SidebarV1Container open={open}>
        {children}
      </SidebarV1Container>
    </SidebarV1FullContainer>
  );
}
