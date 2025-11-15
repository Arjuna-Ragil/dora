import "./globals.css";
import { LoginProvider } from "./login/hook/useLogin";

export const metadata = {
  title: "Dora",
  description: "Help explore doraemon from student, by student, for student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LoginProvider>
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
