import { UserSearchType } from "../types/types";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function SearchForm({
	userSearch,
	setUserSearch,
}: UserSearchType) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setUserSearch(event.target.value);
	}

	function handleClear(): void {
		setUserSearch("");
		const inputField = document.getElementById(
			"standard-basic"
		) as HTMLInputElement;
		if (inputField) {
			inputField.value = "";
		}
	}

	return (
    <div className="searchForm_container">
    <div className="searchForm_content">
      <TextField
        value={userSearch}
        id="standard-basic"
        label="Enter your product..."
        variant="standard"
        onChange={handleChange}
      />
    </div>
    <div className="form_clear">
      <Button variant="text" onClick={handleClear}>
        Clear
      </Button>
    </div>
  </div>
	);
}
