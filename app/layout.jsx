import "./globals.css";

export const metadata = {
  title: "J-1 Visa Sponsor & DS-2019 Service USA",
  description:
    "Als offizieller Partner führender J-1 Visa Sponsor Organisationen ermöglichen wir Studenten und Absolventen bezahlte Praktika in den USA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
