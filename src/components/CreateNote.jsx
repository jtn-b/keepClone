import React, { useState } from "react";
import CreateBotton from "./CreateButton";
import CreateArea from "./CreateArea";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	createSection: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "20px",
	},
});

function CreateNote() {
	const classes = useStyles();
	const [isCollapsed, setCollapse] = useState(true);

	return (
		<div className={classes.createSection}>
			{isCollapsed ? (
				<CreateBotton handleClick={() => setCollapse(false)} />
			) : (
				<CreateArea />
			)}
		</div>
	);
}

export default CreateNote;
