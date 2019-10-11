import React from 'react';

interface INavbarProps {
    score: Number;
    topScore: Number;
}

export const Navbar = (props: INavbarProps) => {
    return (
        <nav className='navbar fixed-top py-4'>
            <div className='grid w-100'>
                <div className='row'>
                    <div className='col text-left'>
                        <h3>
                            <strong>Emoji Clicky Game</strong>
                        </h3>
                    </div>
                    <div className='col text-center'>
                        <h3>Click an emoji to begin!</h3>
                    </div>
                    <div className='col text-right'>
                        <h3>
                            Score: {props.score} | Top Score: {props.topScore}
                        </h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};
