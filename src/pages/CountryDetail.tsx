import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Country, CountryDetailProp } from "../types/types";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function CountryDetail({
	favorite,
	setFavorite,
}: CountryDetailProp) {
	const [country, setCountry] = useState<Partial<Country>>({});
	const [isLoading, setIsLoading] = useState(true);
	const [expanded, setExpanded] = React.useState(false);
	const { id } = useParams();
	const countryUrl = `https://restcountries.com/v3.1/name/${id}?fullText=true`;
	const {
		name = { common: "" },
		flags = { png: "", alt: "" },
		capitalInfo = { latlng: [] },
		region,
		subregion,
		population,
		independent,
		maps = { googleMaps: "" },
	} = country;

	const { common: countryName } = name;
	const { png: flagUrl, alt: flagAlt } = flags;
	const { latlng: capitalLatLng } = capitalInfo;
	const { googleMaps: mapUrl } = maps;

	useEffect(() => {
		fetch(countryUrl)
			.then((resp) => resp.json())
			.then((data) => {
				setCountry(data[0]);
				setIsLoading(false);
			});
	}, [countryUrl]);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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
	console.log(country);
	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>{" "}
			</div>
		);
	} else {
		return (
			<Card sx={{ maxWidth: 500 }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
							{countryName.slice(0, 1)}
						</Avatar>
					}
					title={countryName}
					subheader={region}
				/>
				<CardMedia component="img" height="194" image={flagUrl} alt={flagAlt} />
				<CardActions disableSpacing>
					<IconButton
						aria-label="add to favorites"
						color={isAlreadyFavorite(country as Country) ? "error" : "default"}
						onClick={() => addToFavorites(country as Country)}
					>
						<FavoriteIcon />
					</IconButton>
					<a href={mapUrl} target="_blank" rel="noopener noreferrer">
						<IconButton aria-label="map">
							<LocationOnIcon />
						</IconButton>
					</a>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>Country Information:</Typography>
						<Typography paragraph>
							The country belings to {region} region and {subregion} sub-region.
							Located at the {capitalLatLng[0]} °N and {capitalLatLng[1]} °W,
							this country has a population of {population}, and{" "}
							{independent === true
								? "is an independent country"
								: "it isn't an independent country"}
							, according to the CIA World FactBook.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		);
	}
}
