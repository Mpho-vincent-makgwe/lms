import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "EDU-PULSE | Early Childhood & Skills",
  description: "A premium learning platform for the future.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} texture-grid antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
