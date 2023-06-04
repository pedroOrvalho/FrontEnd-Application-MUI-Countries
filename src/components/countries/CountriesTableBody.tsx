import { CountriesTableBodyProps } from "../../types/types";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function CountriesTableBody({
	userSearchFilterList,
	isLoading,
	setIsLoading,
	page,
	setPage,
	rowsPerPage,
	setRowsPerPage,
}: CountriesTableBodyProps) {
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
							<FavoriteBorderOutlinedIcon />
						</TableCell>
						<TableCell>
							<ArrowForwardIosOutlinedIcon />
						</TableCell>
					</TableRow>
				))
			)}
		</TableBody>
	);
}
