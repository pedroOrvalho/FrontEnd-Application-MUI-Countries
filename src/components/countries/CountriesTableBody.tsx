import { Link } from "react-router-dom";

import { CountriesTableBodyProps, Country } from "../../types/types";

import { IconButton } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function CountriesTableBody({
	userSearchFilterList,
	isLoading,
	page,
	rowsPerPage,
	favorite,
	setFavorite,
}: CountriesTableBodyProps) {
	function isAlreadyFavorite(country: Country): boolean {
		return favorite.some(
			(favoriteCountry) => favoriteCountry.cca3 === country.cca3
		);
	}

	function addToFavorites(country: Country) {
		if (isAlreadyFavorite(country)) {
			setFavorite((prevFavorites: Country[]) =>
				prevFavorites.filter(
					(favoriteCountry) => favoriteCountry.cca3 !== country.cca3
				)
			);
		} else {
			setFavorite((prevFavorites: Country[]) => [...prevFavorites, country]);
		}
	}

	return (
		<TableBody>
			{isLoading ? (
				<TableRow>
					<TableCell align="center" colSpan={7}>
						Loading...
					</TableCell>
				</TableRow>
			) : (
				(rowsPerPage > 0
					? userSearchFilterList.slice(
							page * rowsPerPage,
							page * rowsPerPage + rowsPerPage
					  )
					: userSearchFilterList
				).map((country) => (
					<TableRow
						key={country.cca3}
						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
					>
						<TableCell component="th" scope="row">
							<img src={country.flags.png} alt={country.flags.alt} />
						</TableCell>
						<TableCell align="left">{country.name.common}</TableCell>
						<TableCell align="left">{country.region}</TableCell>
						<TableCell align="left">{country.population}</TableCell>
						<TableCell align="left">
							{country.languages &&
								Object.keys(country.languages).length > 0 && (
									<ul>
										{Object.keys(country.languages).map((languageKey) => (
											<li key={languageKey}>
												{country.languages[languageKey]}
											</li>
										))}
									</ul>
								)}
						</TableCell>
						<TableCell>
							<IconButton
								aria-label="add to favorites"
								color={isAlreadyFavorite(country) ? "error" : "default"}
								onClick={() => addToFavorites(country)}
							>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</TableCell>
						<TableCell>
							<Link to={`/countries/${country.name.common}`}>
								{" "}
								<ArrowForwardIosOutlinedIcon />
							</Link>
						</TableCell>
					</TableRow>
				))
			)}
		</TableBody>
	);
}
