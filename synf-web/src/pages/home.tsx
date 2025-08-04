import hero from "../components/hero.tsx";
import styles from "../styles/home.module.css";

function home() {
	return (
		<>
			<div className={styles.home}>
				{hero()}
				<section className={styles.features}>
					<article>
						<h3>Real-Time Monitoring</h3>
						<p>Track CPU, RAM, storage, and network usage live.</p>
					</article>
					<article>
						<h3>Smart Alerts</h3>
						<p>Receive instant notifications for unusual device activity.</p>
					</article>
					<article>
						<h3>Secure & Private</h3>
						<p>Your data is encrypted, ensuring your privacy.</p>
					</article>
					<article>
						<h3>Detailed Reports</h3>
						<p>View historical logs and trends for better system insights.</p>
					</article>
				</section>
			</div>
		</>
	);
}

export default home;
