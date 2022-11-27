import {useEffect, useState, useTransition} from "react";
import {Comments} from "./Comments";

const filterBySearch = (entities, search) => entities.filter(item => item.name.concat(item.body).includes(search));

function App() {
    const [comment, setComment] = useState([]);
    const [search, setSearch] = useState('');
    const [isPending, startTransition] = useTransition();


    const handleSearch = (e) => {
        // startTransition(() => {
        //     setSearch(e.target.value)
        // })
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()).then(setComment)
    }, []);

    return (
        <div>
            <input onChange={handleSearch}/>
            <Comments entities={filterBySearch(comment,search)}/>
        </div>
    );
}

export default App;
