import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import "./App.css";
import Favorite from "./pages/Favorite";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />}/>
        <Route path="/favorite" element={<Favorite />}/>
			</Routes>
		</div>
	);
}

export default App;
