import Navbar from "./components/Navbar"; // This points to your new file
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* This Navbar will now show on EVERY page of Testorbit */}
        <Navbar /> 
        
        {/* This 'children' tag is where your page.tsx content will load */}
        <main>{children}</main>
      </body>
    </html>
  );
}