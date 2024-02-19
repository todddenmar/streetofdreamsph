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
  const theme = useTheme((state) => state.theme);
  return (
    <AppContextProvider>
      <html lang="en" className={theme}>
        <body
          className={`${montserrat.className} dark:bg-black dark:text-white bg-white text-black `}
        >
          <NavigationMenu />
          <div className="mt-[80px]">{children}</div>
          <Footer />
        </body>
      </html>
    </AppContextProvider>
  );
}
