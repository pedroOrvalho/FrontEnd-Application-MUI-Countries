import { useState } from "react";

import SearchForm from "../components/SearchForm";
import CountriesTable from "../components/CountriesTable"

export default function Countries() {
	const [userSearch, setUserSearch] = useState<string>("");
	console.log(userSearch);
	return (
		<div>
			<h1>Countries</h1>
			<SearchForm userSearch={userSearch} setUserSearch={setUserSearch} />
      <CountriesTable />
		</div>
	);
}
