import { useMemo } from 'react';
import { Board } from './Board';
import { Game } from './Game';


const image = require("./formation.png")
const containerStyle = {
    width: "600px",
    height: "1000px",
    border: '1px solid gray',
    backgroundImage:  "url(https://media.vlpt.us/images/qnrl3442/post/733d5e03-5531-4e99-98e6-6f9a05c26c15/formation.png)",
    };
/**
 * The Chessboard Tutorial Application
 */
export const TutorialApp = () => {
    const game = useMemo(() => new Game(), []);
    return (<div style={containerStyle}>
			<Board game={game}/>
		</div>);
};
