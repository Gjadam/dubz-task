import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import "./globals.css";

// Components
import AOSInit from '../../utils/aos';


export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} sm:bg-[#1c1c1c] h-screen sm:p-5 transition-all duration-300`}
      >
        <AOSInit />
        <div className=" flex justify-center items-center bg-white w-full h-full p-5 rounded-2.5">
          {children}
        </div>
      </body>
    </html>
  );
}
