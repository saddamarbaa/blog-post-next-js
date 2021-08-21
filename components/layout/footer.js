/** @format */

import Link from "next/link";

import Logo from "./logo";
import classes from "./footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.copyRight}>
				Made With <span style={{ color: "red" }}>&#10084;</span>
				<Link href='https://saddam-portfolio.web.app/'>
					<a a target='_blank'>
						By Saddam Inc
					</a>
				</Link>
				&copy; 2021
			</div>
			<nav className={classes.socialMedia}>
				<ul>
					<li>
						<Link
							className={classes.facebook}
							href='https://www.facebook.com/saddam.arbaa'>
							<a a target='_blank'>
								<FacebookIcon className={classes.icon} />
							</a>
						</Link>
					</li>

					<li>
						<Link
							className={classes.github}
							href='https://github.com/saddamarbaa'>
							<a target='_blank'>
								<GitHubIcon className={classes.icon} />
							</a>
						</Link>
					</li>

					<li>
						<Link
							className={classes.instagram}
							href='https://www.instagram.com/saddam.dev/'>
							<a target='_blank'>
								<InstagramIcon className={classes.icon} />
							</a>
						</Link>
					</li>

					<li>
						<Link
							className={classes.linkedin}
							href='https://www.linkedin.com/in/saddamarbaa/'>
							<a target='_blank'>
								<LinkedInIcon className={classes.icon} />
							</a>
						</Link>
					</li>

					<li>
						<Link
							className={classes.twitter}
							href='https://twitter.com/ArbaaSaddam/'>
							<a target='_blank'>
								<TwitterIcon className={classes.icon} />
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
