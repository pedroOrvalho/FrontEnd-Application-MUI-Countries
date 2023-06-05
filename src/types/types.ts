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
	maps: {
		googleMaps: string;
	};
};

export type CountriesProps = {
	favorite: Country[];
	setFavorite: React.Dispatch<React.SetStateAction<Country[]>>;
};

export type CountryTableProps = {
	userSearchFilterList: Country[];
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
	favorite: Country[];
	setFavorite: React.Dispatch<React.SetStateAction<Country[]>>;
};

export type CountriesTableBodyProps = {
	userSearchFilterList: Country[];
	isLoading: boolean;
	page: number;
	rowsPerPage: number;
	favorite: Country[];
	setFavorite: React.Dispatch<React.SetStateAction<Country[]>>;
};

export type CountriesTablePaginationProps = {
	page: number;
	setPage: (number: number) => void;
	rowsPerPage: number;
	setRowsPerPage: (number: number) => void;
};

export type CountryCardProps = {
	country: Country;
};

export type FavoriteProp = {
	favorite: Country[];
	setFavorite: React.Dispatch<React.SetStateAction<Country[]>>;

};

export type CountryDetailProp = {
	favorite: Country[];
	setFavorite: React.Dispatch<React.SetStateAction<Country[]>>;
};

export type NavBarProps = {
  favoriteLength: number;
}
