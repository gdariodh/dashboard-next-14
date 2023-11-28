import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}

        <footer className="absolute bottom-0 flex h-16 w-full items-center justify-center bg-gray-900 text-white">
          <p className="text-sm">Made with ❤️ by Vercel</p>
        </footer>
      </body>
    </html>
  );
}
