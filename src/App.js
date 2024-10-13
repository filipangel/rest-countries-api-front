import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
	return (
		<>
			<Header></Header>
			<div className="main-content">
				<HomePage></HomePage>
			</div>
		</>
	);
}

export default App;
