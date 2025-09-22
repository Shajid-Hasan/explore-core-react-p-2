import { use } from "react"

import Friend from "./Friend";

export default function Friends({fetchFriends}){

    const friends = use(fetchFriends);
    console.log(friends)

    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                // friends.map(friend => <Friend></Friend>)
            }
        </div>
    )
}