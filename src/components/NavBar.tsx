import { Link } from "react-router-dom";

import { NavBarProps } from "../types/types";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Paper, Badge } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

function HomeIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	);
}

export default function NavBar({ favoriteLength }: NavBarProps) {
	return (
		<Paper elevation={8} style={{ margin: "0.3rem 0.5rem" }}>
			<div className="navbar_container">
				<div className="logo_container">
					<MenuIcon fontSize="large" />
					<h1>COUNTRY</h1>
				</div>
				<div className="navlink_container">
					<Link to="/">
						<HomeIcon sx={{ color: "white" }} fontSize="large" />
					</Link>
					<Link to="/countries">
						<TravelExploreIcon sx={{ color: "white" }} fontSize="large" />
					</Link>
					<Link to="/favorite">
						<Badge color="secondary" badgeContent={favoriteLength} showZero>
							<FavoriteIcon sx={{ color: "white" }} fontSize="large" />
						</Badge>
					</Link>
				</div>
			</div>
		</Paper>
	);
}
