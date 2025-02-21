import * as React from 'react';
import './App.css';
import {useAppDispatch} from "./hooks/redux";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
    //useAppDispatch is a usual useDispatch but with types
    const dispatch = useAppDispatch()

    //unused useEffect with dispatch that was used in case when we use toolkit without RTK query
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
