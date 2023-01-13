
import { key } from "../../page";
import Link from "next/link";

async function getSearch(search) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&page=1`
	);  
	return res.json();
}

export default async function search({ params: { search } }) {

	const searchData = getSearch(search);
	const [s] = await Promise.all([searchData]);
	return (
		<div>
			<h1>{search.replace('%20',' ').replace('%3B',';')}</h1>
			<div className="movies">
				{s.results.map((a) => {
					return (
						<Link href={`/movie/${a.id}`}>
							<div key={a.id} className="card">
								<img
									className="image"
									src={"https://image.tmdb.org/t/p/w300/" + a.poster_path}
								/>
								<h1 className="title">{a.original_title}</h1>
								<p className="desc">{a.overview}</p>
								<p className="vote">
									<img
										id="icon"
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoklEQVR4nO3aT4hVVRzA8TOW1kYzhSxzI4Tin1xoRBBMmyDBTTFMEGoI/lloYG6McCEUQbhIZlEQBFrQLpRoKEhdKOLkILQoo4JxkWiBi0acRrFpPnHhSNfXvDf3jffcuRf8woO3eed3vpf7fud3fueEcJ/pwcMYwin0hKaC1/xHb2gq+DYnciQ0ESzDRE5kDAtC08BB/2dHaBLowcgUIudCk8CL2rM6NAV83kHkUGgCeAR/dRD5A3ND3cEe0/NyqDu4UEDky1Bn8LRi/I0nQl3BgOLsD3UE83CtC5FfallI4lXd83yoG/hmBiKfVD3JhbEIXIVn48rdh214AwdaCsSi3MBb2I3X8Uoc+xmsxJOFC03sxGc4hhMxff6MK7iuPoziMn7CcJzrFziK/hDL66YzkolsjLZNZRQv3Xm9nsJFzePX7H/b+l+Zj+Oaw9dZEuq0IcqyyD/qyyTex5wimay/pkngJrYUSsc5mXW4pD78hg1dSeRkFuPkbBvgDB6bkURO5sH4Ts4WH5e6o8RmjFcocAvbSxNokVkf39XUXMVzSSRyMktjrZOK4SxGUomczOGEIh9UIhFFfkwo8kNVEo/H1TUVk5U0JuIGKDVbqxDJNmGp+TS1RE9Mjan5PWmHBWtVx5qUIm9WKLI3pchgl5O5jffiJ/veDYMpO4lZ+6Yo3+fL7tgXPt/F78fwUAqRFwpOYDzuMh+YYow52NXFA+lNIfJugcCnsaLAWMtbjq7b8U4Kke86BPwzPumuUmbcUndqfA+laJm2a4l+lbU272HsJR0W2Qk8WqZI1pOdatHqKzHGpjZ7nfKO6fBRS1GXPcFFpQW4+yB1oKUd9WGZAc7mDmeSX45Bb4xV7iWDOPDb2bWl0gYtdkVqX5b2q4pZC/4F/OV9zvvXBksAAAAASUVORK5CYII="
									/>{" "}
									{a.vote_average}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}