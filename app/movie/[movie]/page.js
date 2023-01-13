import Link from "next/link";
import { key } from "../../page";
async function getMovie(movie) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}?api_key=${key}`
	);
	return res.json();
}
async function getSimilar(movie){
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${key}`
	);
	return res.json();
}

export default async function Page({ params: { movie } }) {

	const movieData = getMovie(movie);
	const similarData = getSimilar(movie)
	const [s] = await Promise.all([similarData]);
	const [m ] = await Promise.all([movieData]);
	return (
		<div className="movie">
			<div className="img-div">
				<img src={"https://image.tmdb.org/t/p/w500/" + m.poster_path} />
			</div>
			<div className="info-div">
				{" "}
				<h1 className="title">{m.original_title}</h1>
				<p className="desc">{m.overview}</p>
				<p className="meta">release date: {m.release_date}</p>
				<p className="meta">status: {m.status}</p>
				<p className="meta">budget: {m.budget}</p>
				<p className="meta">revenue: {m.revenue}</p>
				<p className="meta">
					genres:{" "}
					{m.genres.map((a) => {
						return <span key={a.id}>{a.name} </span>;
					})}
				</p>
				<h1>Similar Movies</h1>
				<div className="similar">
					{s.results.map((a) => {
						return (
							<Link href={`/movie/${a.id}`}>
								<div key={a.id}>
									<img
										src={"https://image.tmdb.org/t/p/w300/" + a.poster_path}
									/>
									<span>{a.title}</span>
								</div>
							</Link>
						);
					})}
				</div>
				<Link href="/">Go Back</Link>
			</div>
		</div>
	);
}
