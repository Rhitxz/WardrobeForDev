import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Wardrobe9TO5",
  description: "E-Commerce by Rohit singh ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Toaster />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
