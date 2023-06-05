import { FavoriteProp } from "../types/types";

import { Box, Paper, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Favorite({ favorite, setFavorite }: FavoriteProp) {
	console.log(favorite);
	function deleteRecipe(id: string) {
		const newList = favorite.filter((country) => country.cca3 !== id);
		setFavorite(newList);
	}
	return (
		<div className="favorite_container">
			<h1>Favorite Countries</h1>
			{favorite.length === 0 ? (
				<div className="favorite_no_results">
					<p>No contries have been added yet.</p>
				</div>
			) : (
				favorite.map((country) => (
					<div className="favorite_item_container">
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								"& > :not(style)": {
									m: 1,
									width: 925,
									height: 200,
								},
							}}
						>
							<Paper
								sx={{
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
								}}
								elevation={8}
							>
								<div className="item_content_container">
									<div className="item_content">
										<p className="item_name">{country.name.common}</p>
										<p>{country.region}</p>
									</div>
									<img src={country.flags.png} alt={country.flags.alt} />
									<div className="delete_button">
										<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
											<IconButton
												color="error"
												onClick={() => deleteRecipe(country.cca3)}
											>
												<DeleteForeverIcon />
											</IconButton>
										</Box>
									</div>
								</div>
							</Paper>
						</Box>
					</div>
				))
			)}
		</div>
	);
}
