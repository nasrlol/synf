import styles from '../styles/about.module.css'

function about() {
	return (
		<>
			<section className={styles.about}>
				<h2>Overview</h2>
				<p>
					This project is a comprehensive system designed to efficiently manage and analyze system statistics
					through a multi-layered architecture. It integrates a <strong>C-based backend</strong>, a{" "}
					<strong>Go-powered API server</strong>, and a <strong>React frontend</strong>, all backed by{" "}
					<strong>MariaDB</strong> for persistent data storage. The project aims to provide high-performance,
					scalable, and reliable system monitoring.
				</p>
			</section>

			<section className={styles.about}>
				<h2>Key Features</h2>
				<ul>
					<li>
						<strong>Multi-Tier Architecture:</strong> The project is structured into distinct layers for
						better scalability and maintainability.
					</li>
					<li>
						<strong>High-Performance Backend:</strong> The C server ensures low-latency processing of system
						data.
					</li>
					<li>
						<strong>Efficient API Gateway:</strong> The Go API serves as an intermediary, exposing a clean
						and structured API to the frontend.
					</li>
					<li>
						<strong>Modern Frontend:</strong> The React-based interface provides an interactive and
						user-friendly experience.
					</li>
					<li>
						<strong>Secure Data Storage:</strong> MariaDB is used to store user data and system statistics
						securely.
					</li>
				</ul>
			</section>

			<section className={styles.about}>
				<h2>Technology Stack</h2>
				<ul>
					<li>
						<strong>Frontend:</strong> React, TypeScript
					</li>
					<li>
						<strong>API Layer:</strong> Go
					</li>
					<li>
						<strong>Backend:</strong> C
					</li>
					<li>
						<strong>Database:</strong> MariaDB
					</li>
					<li>
						<strong>Version Control:</strong> Git
					</li>
				</ul>
			</section>
		</>
	);
}

export default about;
