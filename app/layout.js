'use client';
import { useTheme } from '@/lib/zustand';
import { AppContextProvider } from './context/theme';
import './globals.css';
import Footer from './ui/Footer';
import NavigationMenu from './ui/NavigationMenu';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
});

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  return (
    <AppContextProvider>
      <html lang="en" className={theme}>
        <body
          className={`${montserrat.className} dark:bg-black dark:text-white bg-white text-black relative`}
        >
          <NavigationMenu />
          <div className="mt-[80px] relative z-10">
            {children}
            <Footer />
          </div>

          <div
            style={{
              background: theme === 'dark' ? 'url("/stardust.png")' : 'none',
            }}
            className="absolute inset-0 z-0"
          ></div>
        </body>
      </html>
    </AppContextProvider>
  );
}
