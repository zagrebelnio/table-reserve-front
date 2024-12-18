import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/ui/navbar';
import { Providers } from './providers';
// import { AuthProvider } from '@/lib/auth/authContext';
// import { SessionProvider } from 'next-auth/react';
// import { ReservationProvider } from '@/lib/reservation/reservationContext';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'La Terraza | Table Reserve',
  description:
    'Зручно забронюйте столик онлайн за кілька кліків - швидко, просто і без турбот',
  icons: {
    icon: './logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
