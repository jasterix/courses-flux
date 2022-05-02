import React from "react";
const ManageCoursePage = (props) => {
	return (
		<p>
			<h2>Manage Course</h2>
			{props.match.params.slug}
		</p>
	);
};

export default ManageCoursePage;
