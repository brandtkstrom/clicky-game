import React, { FC, MouseEvent } from 'react';

interface IEmojiProps {
    image: string,
    alt: string,
    onClick: (event: MouseEvent) => void
}


export const Navbar: FC<IEmojiProps> = (props) => {
    return (
        <img className="emoji" src={props.image} alt={props.alt} onClick={props.onClick} />
    );
};