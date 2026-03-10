import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} texture-dots`}>
        <ThemeProvider>
          <div className="min-height-screen relative">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
