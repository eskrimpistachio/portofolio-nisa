import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('./components/Navbar'), {
  ssr: false,
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Nisa Portfolio',
  description: 'Nisa Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="icon" href="/logo.svg" type="image/png" sizes="32x32" /> */}
      </head>

      <body className="mx-12 md:mx-16 poppins">
        <Nav />
        <div className="my-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
