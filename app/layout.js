import StyledComponentsRegistry from "@/components/utils/Registry";
import { Providers } from "./providers"; // Import the new client component
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Just Pita & Bar | Fresh Pitas & Cocktails in Barcelona",
  description:
    "Come hungry. Leave happy. Discover Barcelona's best spot for bold pitas, craft cocktails, and good vibes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {" "}
            {/* This wraps everything in our client-side providers */}
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
