import React, { useState } from "react";

const Search = ({getQuery}) => {
	const [text, setText] = useState("");

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

	return (
		<section className="search">
			<form action="">
				<input
					type="text"
					className="form-control"
					placeholder="Search char"
					autoFocus
                    onChange={(e)=> onChange(e.target.value)}
                    value={text}
				/>
			</form>
		</section>
	);
};

export default Search;
