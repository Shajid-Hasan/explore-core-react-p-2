import { useState } from "react"

export default function Bowler () {

    const [ball, setBall] = useState(0);
    const [wite, setWite] = useState(true);

    const handelBall = () => {
        const countBall = ball + 1;
        setBall(countBall)
    }

    const witeBall = () => {
        const ball = wite - 1;
        setWite(ball)
    }
    return(
        <div>
            <h2>Bowler</h2>
            <p>Set Ball : {ball}</p>
            {
                ball >= 6 && <p>One over finish</p>
            }
            <button onClick={handelBall}>Ball</button>
            {
                wite === true && <p>Wite Ball</p>
            }
            <button onClick={witeBall}>Wite</button>
        </div>
    )
}