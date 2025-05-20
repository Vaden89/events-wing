import { Sidebar } from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
