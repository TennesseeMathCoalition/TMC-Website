import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import { lusitana } from "./ui/fonts";
import "./globals.css";
import NavLinks from "./ui/default-layout/nav-links";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-auto bg-slate-50 w-screen h-screen min-h-[900px]`}>
        <div className={`w-screen h-[10%] pl-[1vw] pb-[1vw] text-cyan-700 ${lusitana.className} Tablet:text-[60px] Mobile-L:text-[37px] Mobile-S:text-[28px]`}>
          <span className={`align-text-bottom`}>
            Tennessee Math Coalition
          </span>
        </div>

        <div className='w-[100%] h-[8%] bg-auto bg-slate-500 grid 
          Laptop:grid-cols-[7%_8%_12%_13%_52%_8%] 
          Mobile-S:grid-cols-[9%_15%_20%_23%_25%_8%]
          Tablet:grid-cols-[10%_13%_20%_20%_29%_8%]'
        >

          <NavLinks></NavLinks>

          <div></div>

          <div className={`flex items-center justify-center text-[1vw] ${inter.className}`}>
            Sign Out
          </div>
        </div>

        <div className={`w-screen h-[72%] overflow-auto`}>
          {children}
        </div>

        <div className='w-screen h-[0.5%] bg-auto bg-blue-900'></div>

        <div className='w-screen h-[8%] origin-bottom bg-auto flex items-center justify-center text-cyan-500
          Mobile-S:text-[10px]
          Mobile-M:text-[12px]
          Tablet:text-[20px]'
        >
          For issues or questions contact [tnmathcoalition@gmail.com]
        </div>
      </body>
    </html>
  );
}
