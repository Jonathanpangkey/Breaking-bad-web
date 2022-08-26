import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
	// set character item
	const [items, setItems] = useState([]);
	// set is loading or not
	const [isLoading, setIsLoading] = useState(true);
	// set the query for search
	const [query, setQuery] = useState('');


	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);

			// console.log(result.data)
			setItems(result.data)
			setIsLoading(false)
		};

		fetchItems();
	},
	//dependency meaning that gonna fire off everytime that's change
	 [query]);

	return (
		<div className="container">
			<Header />
			<Search getQuery={ (q)=> setQuery(q) } />
			<CharacterGrid isLoading={isLoading} items={items}/>
		</div>
	);
};

export default App;
