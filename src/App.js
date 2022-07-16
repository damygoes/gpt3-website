import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Footer,
	Blog,
	Possibility,
	Features,
	WhatGPT3,
	Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Possibility />
			<Features />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
