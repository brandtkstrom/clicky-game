import React, { FC } from 'react';

interface IEmojiProps {
    image: string,
    alt: string,
    onClick: Function
}

export const Navbar: FC<IEmojiProps> = (props) => {
    return (
        <img src={props.image} alt={props.alt} />
    );
};