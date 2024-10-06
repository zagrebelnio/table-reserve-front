import { Poppins } from 'next/font/google';
import './globals.css';

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
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
