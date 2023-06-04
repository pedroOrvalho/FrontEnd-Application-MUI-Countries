import { useState, useEffect } from "react";

import SearchForm from "../components/SearchForm";
import CountriesTable from "../components/countries/CountriesTable";

import { Country } from "../types/types";

export default function Countries() {
	const [userSearch, setUserSearch] = useState<string>("");
	const [countriesData, setCountriesData] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((resp) => resp.json())
			.then((data) => {
				setCountriesData(data);
				setIsLoading(false);
			});
	}, []);

	const userSearchFilterList: Country[] = userSearch
		? countriesData.filter(
				(countryData: Country) =>
					countryData.name.common
						.toLowerCase()
						.includes(userSearch.toLowerCase()) ||
					countryData.region.toLowerCase().includes(userSearch.toLowerCase())
		  )
		: countriesData;

	return (
		<div>
			<h1>Countries</h1>
			<SearchForm userSearch={userSearch} setUserSearch={setUserSearch} />
			<CountriesTable
				userSearchFilterList={userSearchFilterList}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
		</div>
	);
}
