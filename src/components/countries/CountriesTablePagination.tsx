import React from "react";

import { CountriesTablePaginationProps } from "../../types/types";

import TablePagination from "@mui/material/TablePagination";

export default function CountriesTablePagination({
	page,
	setPage,
	rowsPerPage,
	setRowsPerPage,
}: CountriesTablePaginationProps) {
	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TablePagination
			component="div"
			count={250}
			page={page}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);
}
