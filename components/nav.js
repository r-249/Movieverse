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
					</Link>
					<Searchinput />
				</ul>
			</nav>
		);
}