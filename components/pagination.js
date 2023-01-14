"use client";

export default function Pagination(props) {
	const page = parseInt(props.currentpage);
	const type = props.type;
	if (page == 1) {
		return (
			<div className="pagination">
				<button
					onClick={() => {
						switch (type) {
							case "movie":
								document.location = `/movies/${page + 1}`;
								break;
							case "tv":
								document.location = `/TVs/${page + 1}`;
								break;
						}
					}}
				>
					Next
				</button>
			</div>
		);
	} else {
		return (
			<div className="pagination">
				<button
					className="last"
					onClick={() => {
						switch (type) {
							case "movie":
								document.location = `/movies/${page - 1}`;
								break;
							case "tv":
								document.location = `/TVs/${page - 1}`;
								break;
						}
					}}
				>
					Last
				</button>
				<button
					onClick={() => {
						switch (type) {
							case "movie":
								document.location = `/movies/${page + 1}`;
								break;
							case "tv":
								document.location = `/TVs/${page + 1}`;
								break;
						}
					}}
				>
					Next
				</button>
			</div>
		);
	}
}
