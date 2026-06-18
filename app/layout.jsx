import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import styles from "./layout.module.css";
import "@/styles/globals.css";

export const metadata = {
  title: "ResQFood",
  description: "Reduce food waste - An app to find foods having short expiry date and get them at a discounted price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={styles.siteMain}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
