import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import VisitUs from "@/components/sections/VisitUs";
import SectionDivider from "@/components/ui/SectionDivider";
import { theme } from "@/styles/theme";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider
        fillColor={theme.colors.background}
        bgColor={theme.colors.primary}
      />
      <About />
      <SectionDivider
        fillColor={theme.colors.white}
        bgColor={theme.colors.background}
      />
      <Menu />
      <SectionDivider
        fillColor={theme.colors.background}
        bgColor={theme.colors.white}
      />
      <VisitUs />
    </main>
  );
}
