import React, { FC } from 'react';

export const Footer: FC = (): JSX.Element => {
    return (
        <footer className='text-light bg-dark'>
            <p className='py-1 m-0'>Created By: Brandt K Strom</p>
            <p className='py-1 m-0'>
                Icons made by
                <a
                    href='https://www.flaticon.com/authors/roundicons'
                    title='Roundicons'
                >
                    {' Roundicons '}
                </a>
                {' from '}
                <a href='https://www.flaticon.com/' title='Flaticon'>
                    www.flaticon.com
                </a>
            </p>
        </footer>
    );
};
