import { useState } from "react";

export default function SearchComponent(props) {
    const { onSubmit } = props;
    const [searchQuery, setSearchQuery] = useState("");

    async function handleOnSubmit(event) {
        event.preventDefault();
        onSubmit(searchQuery);
    }

    return (
        <>
        <form onSubmit={(event) => handleOnSubmit(event)}>
            <input
                type="text"
                value={searchQuery}
                id="search-input"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search..."
            />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
