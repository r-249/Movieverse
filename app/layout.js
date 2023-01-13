import Navbar from "../components/nav";
import './index.scss'
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
