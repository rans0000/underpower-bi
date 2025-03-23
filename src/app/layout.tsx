import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import DataProvider from "@/lib/data-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DataProvider>
      <html lang="en">
        <body className="flex h-svh flex-col antialiased ">
          <Header />
          <main className="h-[calc(100svh-(--spacing(25)))] mt-15 overflow-auto">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </DataProvider>
  );
}
