import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import header from "./components/header.tsx";
import footer from "./components/footer.tsx";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import About from "./pages/about.tsx";
import Install from "./pages/install.tsx";
import Signup from "./pages/signup.tsx";
import Dashboard from "./pages/dashboard.tsx";

function App() {
	return (
		<Router>
			<>
				{header()}
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/install" element={<Install />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Login />} />
						<Route path="/Signup" element={<Signup />} />
						<Route path="Login/Dashboard" element={<Dashboard />} />
					</Routes>
				</main>
				{footer()}
			</>
		</Router>
	);
}

export default App;
