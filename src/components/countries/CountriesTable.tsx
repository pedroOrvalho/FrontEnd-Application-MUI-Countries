import React from "react";
import CountriesTableBody from "./CountriesTableBody";
import CountriesTablePagination from "./CountriesTablePagination";

import { CountryTableProps } from "../../types/types";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CountriesTable({
	userSearchFilterList,
	isLoading,
	setIsLoading,
	favorite,
	setFavorite,
}: CountryTableProps) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Flag</TableCell>
						<TableCell align="left">Country</TableCell>
						<TableCell align="left">Region</TableCell>
						<TableCell align="left">Population</TableCell>
						<TableCell align="left">Languages</TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
					</TableRow>
				</TableHead>
				<CountriesTableBody
					userSearchFilterList={userSearchFilterList}
					isLoading={isLoading}
					page={page}
					rowsPerPage={rowsPerPage}
					favorite={favorite}
					setFavorite={setFavorite}
				/>
			</Table>
			<CountriesTablePagination
				page={page}
				setPage={setPage}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
			/>
		</TableContainer>
	);
}
