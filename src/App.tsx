import * as React from 'react';
import './App.css';
import {useAppDispatch} from "./hooks/redux";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div className="App">
            <PostContainer/>
        </div>
    );
}

export default App;
