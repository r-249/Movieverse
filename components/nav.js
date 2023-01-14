import Link from "next/link"
import Searchinput from "./search";
export default function Navbar(){
    return (
			<nav>
				<ul className="navbar">
					<Link href="/">
						<li className="item">
							<span className="mobile">home</span>
							<img
								id="icon"
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQklEQVR4nO2ayWsUQRSHKxuoiVtuRhPEhVyVoDHgQUzwEPCmaEwED6ISJJgERIyCIrjBQBTBf0A9iCjiAop/gbgRFUUPgoob6iVocCGfPKYinaanp3qmu6cyqQ8KZtL13qv3m+7X/SqtlMPhcDgcDkcJAGbIUNMNYAPwEPirxwP5myp3gArgCLk5A1SqcgSoBa6Rn9vAHFVOAE3AE8yRuU0h/pYDQ8BJPeTzMmUjwBrgE9ERm7YcyY8GzB+1TgSgGxijcMS2x+fzcMj8Q8qyYjdOPPwvjkAmZF7Glnv7JeLnlhRHqwUAFgGPDBP6CmzUQz6bIL4vWykAsBJ4a5jIK6DZY7sEeE7xlEYAYDPww3CRd4B5AT5mAzemlABki93RCMVOilmVx36tDM/3Kj3HfgHIFrsLhgv7A+z12W/Vt7lfwA7fsZ3Ab2sFABqA+4aL+ga0G/QDk/oAfXZ8sU4AoAV4b7igl/Lk5rGtA66HzJdjdb6nPvFhynDSyW+KUOzuAvM9tgt125uPEWCxrzjeNIwpl1R3UskPRSh254Bqj21bxH5gUh8gvrRPE2SNB+NOfneEYtfrs+0psB8I6gN6dQwTtseVfCXwziDgd6DDZ3e8yH5gXPvwFscOHSsfL+ISYG4BT3ay+XGV+BBftR7/zTpmPqrjEKAqz/V7D6j3zG8EHhM/4rPRE6dex87F56KTnwA4kCPIeaDGM68V+EhyiO9WT7wavYYg9qu4IPvwMiiqaudvAp7euorc/DBFYnQFFNrX+ricrYOxJe8HmBUgzrEYNz9MGNcxK3xrmanShGw/cJHSccX/g6SZfEOEfiBJQneQk0p+RYTNjzT4AKxOK/lO4Cf2IWvqTEOADPaSmQoCjAF9csrq1rpFf+6L4TY6JQQYDvF9djoIMBDie8AJUBzuDFDuEkgY4LTFNeBU0vmrGBaZpAD9ab3wYKsAq9IQoBJ4ZqEAI/72OEkR2vXrbYWwJcSv/LusEGQt61JJfgJgTwEiyHs8C1QO5FiO93/yJb9LlQJgPfA0QrfWZeBzW4RucyT1X96P3hKTzdB+z2tr/iGNzlJliMzVNkG+TgD7dAOVzjXvcDgcDofD4XA4VLnxD9E0KOxbcAvCAAAAAElFTkSuQmCC"
							/>
						</li>
					</Link>{" "}
					<Link href="/movies/1">
						<li className="item">
							<span className="mobile">Movies</span>
							<img
								id="icon"
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVR4nN2aa4hVVRTHT1o4aihC+ECFXgZOoWAfIhEEoTQtKPzgA0Ul6EOTM6nfDDUxUFAQqZRw9MvQWEYQVKbWBw0FHUvnYT4ohXyFOooZvid/srxrbLPdZ+99zr2O9/aHy9x7zlrrrP/ea6+99jqTJDkAjATmAZuBFuAicBO4CpwCmoEG4F2gOiknAI8D84HfyI5fgbli42ESeBR4H7hA8fgLeEdsdjWJ54D9Aef2AuuBFfqR700BnV+Ap7uKxOvAZY8zZ4HRHv0xwDmPvqyriQ+axHTgVmBUp0TYmRaw0QHUPciZuBVw4DbQM8JWL5UNYQ3wSKnXhC+cOnE95sEio7IxqAe6lSo7hRa2ieD+ALxANqwvemY0xWbB5xE2G8mOj4rd7Ox9QmJ7F/AV0Jry0BqPTdkAXWhVm7s962d6XiKyY5u4ArziSKdnHGQ/Nhe+LvBPHE5K6fKyZXMicM1B5IqEZR4idtmxIEVulNZUNo4BH+jnuOP+tTTHgIUps7In0+LXAtAuIx7zyMsMZMVKj70qR1hf0L/vFRNWqwPyMitZMTxgc50lv1bT9t/AkFgiUoqbeDNCR0IpFm0R9qZYOo3AMv1eH0tEzhMmBkfobMtA5JsIe09aOi1AH63HZGYGxhBpt4w8EZCXrPSnpfOdDICEAbDFuvc70CNgc4Clc1Kvf6i/l8UQuREbWpIEZCN0jPq9OAaGOu5v8J1BgLcs+at6vb9myfbQYLiI/OFaYLJggR0OJ2OICLYDwxx2hzjW3HXjvsw29r4WE1pobC4HJgOzgU1acqdhizokJH7wyN3Us/wstb1Cn2XjvOHfDL22JutiLwccMPwbpFXCsRCRLyk/bLJ8PKzXB/mISFsnBhJahzR0tgKnA/IyijuBTzWEGgyHQqi1fPxCr7/qIzIiYFTqpCV2Lpc6SEpuj96MlOeNiWgpVVs6i301oCmYZvhfYJxHr1vKGvs5Yt9wJRlBq0NekoPgsxCRtPBq9CoWdOscem9H6C1KeWadQ3a83vs65mDlGqFpEQ5JVrExNEKv0zkT54DeDtmX9P6OJOfIzgoq3r8XdUQ2JqTjGHXiBF7U+82xzQfp0ZrYGenUeStbVUXUa0esZ0l3snvgzHQwSEQVhjnaQat8ZKT16RjZ8R75Po7q+RLwjEfneZU7FEVElSY5jrPfS6ZJkZfyxUZzSqxLiBy0ZOVZEwI+VWcmYrQ6bTL/AEuBp4zKdKODhBkqY4F+eqqs13Ruk5ga4c8old+fiYgqv6ZHTReEVLG4FJoJaxMV7E7yAHgW2Efp0eRbEzakNFG9n5K8kEyizTYzM+WF7BM1adkpDXLYU/1vk2Ihi1fbqm05CLTqPtW7iNccgs1FE3GkwzqtSg9oH+qGftr1mtyrLcXLUGDOXRrQkFQyKJxS/xdEZsYWsWUN4A0lsjWpZJC11ipXUKjPOvS02iupZFCoxAWTkkoG/70a9J8Syx1AX6O6mJxUMih0J29rh35mUsmgUFF0vp/8Ubo8Jf1ng64EhcOfvFztRMvD9ik39Ny/ADgKnLgDIYeToZAx0SkAAAAASUVORK5CYII="
							/>
						</li>
					</Link>{" "}
					<Link href="/TVs">
						<li className="item">
							<span className="mobile">TVs</span>
							<img
								id="icon"
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVR4nO3XMUoDURSG0RvBxtJOsHcBbsANWNq6BbcgLkErW9cgbiCx197CVkhjZSFyJDBFUsXAzRtzeWcB7+eDYd5MRNd1XTcGRYQiQhGhiFBEKCIUEYoIRcQWznzEXIGQPRziDt92NSRWP39O8JS90TxkKegcb9lbzUOGmH1c4TN7s2nIUtAR7vGTuivZBr8Pp3hO2zVSyBAzwWvKrmQbRCxe0bdZj1hkHLJy4PqAxT1ziY/UXcnWRJzhJXuz5T1yjIfsrZY3+wGu8ZW90yRkeBtd4D37/JYfjTeZ98Nf9f+R/yYUEYoIRYQiQhGhiOh2lRE+OzDbRshshJBpekjXdV0XiX4Bw0WQww9si1kAAAAASUVORK5CYII="
							/>
						</li>
					</Link>{" "}
					<Searchinput />
				</ul>
			</nav>
		);
}