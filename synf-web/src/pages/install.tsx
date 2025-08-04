import styles from "../styles/install.module.css";

function install() {
    return (
        <>
            <h1>Installation Guide</h1>
            <section className={styles.install}>
                    <h2>Prerequisites</h2>
                    <p>Before you begin, ensure you have the following installed on your system:</p>
                    <ul>
                        <li>
                            <strong>Go </strong>
                        </li>
                        <li>
                            <strong>Clang </strong>
                        </li>
                        <li>
                            <strong>MariaDB </strong>
                        </li>
                        <li>
                            <strong>Git</strong>
                        </li>
                    </ul>
            </section>

            <section className={styles.install}>
                <h2>Clone the Repository</h2>
                    <pre>
					    <code>git clone https://github.com/nasrlol/synf</code>
                        <br/>
                        <code>cd synf</code>
				    </pre>
            </section>
            <section className={styles.install}>
                    <h2>Set up the API (Go Server)</h2>
                    <pre>
					    <code>cd api</code>
                        <br/>
                        <code>go mod tidy</code>
                        <br/>
                        <code>go run main.go</code>
				    </pre>
                    <p>
                        By default, the API runs on <strong>port 8080</strong>.
                    </p>

            </section>

            <section className={styles.install}>

                <h2>Set up the Frontend (React)</h2>
                <pre>
					<code>cd frontend</code>
                    <br/>
                    <code>npm install</code>
                    <br/>
                    <code>npm start</code>
                    <br/>
				</pre>
                    <p>
                        By default, the frontend is available at <strong>http://localhost:3000</strong>.
                    </p>
            </section>

            <section className={styles.install}>

                    <ul>
                        <li>
                            Open <strong>http://localhost:3000</strong> in your browser to access the React frontend.
                        </li>
                        <li>
                            The backend and API are accessible on
                            ports <strong>5000</strong> and <strong>8080</strong>{" "}
                            respectively.
                        </li>
                    </ul>

            </section>
        </>
    );
}

export default install;
