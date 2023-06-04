export type UserSearchType = {
	userSearch: string;
	setUserSearch: (search: string) => void;
};

export type Country = {
	flags: {
		png: string;
		alt: string;
	};
	name: {
		common: string;
	};
	cca3: string;
	ccn3: string;
	region: string;
	population: number;
	languages: {
		[key: string]: string;
	};
	capital: string[];
	subregion: string;
	capitalInfo: {
		latlng: number[];
	};
	independent: boolean;
};

export type CountryTableProps = {
	userSearchFilterList: Country[];
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
};

export type CountriesTableBodyProps = {
	userSearchFilterList: Country[];
  isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
  page: number;
	setPage: (number: number) => void;
	rowsPerPage: number;
	setRowsPerPage: (number: number) => void;
};

export type CountriesTablePaginationProps = {
	page: number;
	setPage: (number: number) => void;
	rowsPerPage: number;
	setRowsPerPage: (number: number) => void;
};
