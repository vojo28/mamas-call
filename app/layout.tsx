import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}