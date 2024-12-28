import type { Metadata } from "next";
import { Poppins, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import ThemeProvider from "@/components/Theme";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const noto_serif = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${noto_serif.variable} bg-light-gray dark:bg-black text-dark-gray dark:text-light-gray`}
        >
          <ThemeProvider>
            <NavBar />
            <div className="flex overscroll-y-auto  ">
              <LeftSideBar />
              {children}
              <RightSideBar />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
