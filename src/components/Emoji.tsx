import React, { FC } from 'react';

interface IEmojiProps {
    image: string;
    alt: string;
    emojiClicked: (image: string) => void;
}

export const Emoji: FC<IEmojiProps> = (props): JSX.Element => {
    const onEmojiClick = () => {
        props.emojiClicked(props.image);
    };

    return (
        <img
            className='emoji'
            src={props.image}
            alt={props.alt}
            onClick={onEmojiClick}
            draggable={false}
        />
    );
};
