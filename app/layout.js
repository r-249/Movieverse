import Navbar from "../components/nav";
import './index.scss'
import Footer from "../components/footer";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
