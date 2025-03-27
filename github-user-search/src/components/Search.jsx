import { useState} from "react";
function Search () {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(null);
    

    const handleSearch = () => {
        fetch(`https://api.github.com/users/${search}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((error) => console.error("error", error));
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

    return (

        <div>
            <form onSubmit ={onSubmit}> <input type="text" placeholder="Enter GitHub username" id="name" value={search} onChange ={onChange} />
                 
          <button type="submit">Submit</button>
          </form>
        </div>
    )


}

export default Search;

