import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

const signika = Signika({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-signika",
});

export const metadata: Metadata = {
	title: "Rivers of Waters Foundation",
	description:
		"The Rivers of  Waters Foundation is a nonprofit organization dedicated to transforming lives and uplifting communities by providing essential resources, opportunities for those in need. Founded on the principles of compassion, equality, and empowerment, our foundation aims to bridge the gap between under deserved communities and sustainable development.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${signika.className} antialiased`}>{children}</body>
		</html>
	);
}
