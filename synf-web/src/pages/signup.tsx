import {useNavigate} from "react-router-dom";
import styles from "../styles/login.module.css"
import {useState} from "react";

function Signin() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegistration = function () {

	}
	return (
		<>
			<section className={styles.reg}>
				<form onSubmit={handleRegistration}>
					<input
						type="text"
						name="text"
						placeholder="John Doe"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required />
					<input
						type="email"
					   	name="email"
						value={email}
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit">Sign In</button>
				</form>
				<button onClick={() => navigate("/Login")}>
					<p>Already have an account?</p>
				</button>
			</section>
		</>
	);
}

export default Signin;
