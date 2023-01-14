import Link from "next/link";
export const key = "f56afae57698aff589b1f148affb3e67";
import Discover from "../components/discover";
import DiscoverTV from "../components/discovertv";
import ComingSoon from "../components/upcoming";
export default async function Page() {
	return (
		<div>
			<h1 className="page-title">MOVIEVERSE</h1>
			<Discover />
			<DiscoverTV />
			<ComingSoon />
		</div>
	);
}
