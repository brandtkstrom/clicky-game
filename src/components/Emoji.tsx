import React, { FC, useState } from 'react';

interface IEmojiProps {
    image: string,
    alt: string,
    emojiClicked: (image: string) => void
}

export const Emoji: FC<IEmojiProps> = (props) => {

    const onEmojiClick = () => {
        props.emojiClicked(props.image);
    }

    return (
        <img className="emoji m-3" src={props.image} alt={props.alt} onClick={onEmojiClick} />
    );
};