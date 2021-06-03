import { useState } from "react";
import "./SearchComponent.css";

export default function SearchComponent(props) {
    const { onSubmit } = props;
    const [searchQuery, setSearchQuery] = useState("");

    async function handleOnSubmit(event) {
        event.preventDefault();
        onSubmit(searchQuery);
    }

    return (
        <>
        <form className="mt-5 mb-2" onSubmit={(event) => handleOnSubmit(event)}>
            <div className="search">
                <input
                    type="text"
                    value={searchQuery}
                    id="search-input"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search..."
                />
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
        </>
    );
}
