import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'E-Commerce Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}