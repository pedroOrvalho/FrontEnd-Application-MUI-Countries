import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorite from "./pages/Favorite";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";

import { Country } from "./types/types";

function App() {
  const [favorite, setFavorite] = useState<Country[]>([]);
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/countries" element={<Countries favorite={favorite} setFavorite={setFavorite} />} />
				<Route path="/favorite" element={<Favorite favorite={favorite}/>} />
				<Route path="/countries/:id" element={<CountryDetail favorite={favorite} setFavorite={setFavorite}/>} />
			</Routes>
		</div>
	);
}

export default App;
