import React, { FC } from 'react';

interface IHeaderProps {
    score: Number;
    topScore: Number;
    message: string;
}

export const Header: FC<IHeaderProps> = (props): JSX.Element => {
    return (
        <header className='text-light bg-dark py-4'>
            <nav className='navbar sticky-top p-0'>
                <div className='grid w-100'>
                    <div className='row'>
                        <div className='col text-center'>
                            <a className='text-light' href={window.location.href}>
                                <h3>Emoji Clicky Game</h3>
                            </a>
                        </div>
                        <div className='col text-center'>
                            <h3>{props.message}</h3>
                        </div>
                        <div className='col text-center'>
                            <h3>
                                Score: {props.score} | Top Score:{' '}
                                {props.topScore}
                            </h3>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
