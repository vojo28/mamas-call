import "../styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Mama’s Call",
  description: "Prepare financially for childbirth and avoid delays in care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111827]">

        <Header />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}