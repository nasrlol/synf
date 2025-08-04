import { useState } from "react";
import styles from "../styles/login.module.css";
import {useNavigate} from "react-router-dom";

function LoginPage() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin  = function (){
		// login system
	};

	return (
		<>
			<section className={styles.reg}>
				<form onSubmit={handleLogin}>
					<input
						type="email"
						name="email"
						placeholder="example@gmail.com"
						value={email}
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
					<br />
					<button type="submit">Login</button>
				</form>
				<button onClick={() => navigate("/Signup")}>
					<p>Register</p>
				</button>
			</section>
		</>
	);
}

export default LoginPage;
