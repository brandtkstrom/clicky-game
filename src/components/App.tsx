import React, { useState } from 'react';
import EmojiMapper from '../util/EmojiMapper';
import { Header } from './Header';
import { Emoji } from './Emoji';
import { Container } from './Container';
import { Footer } from './Footer';

export const App: React.FC = (): JSX.Element => {
    // State hooks
    const [score, updateScore] = useState<number>(0);
    const [topScore, updateTopScore] = useState<number>(0);
    const [emojis, shuffle] = useState<string[]>(EmojiMapper.getImages());
    const [message, setMessage] = useState<string>('Click any emoji to begin!');
    const [clickedSet, updateClicked] = useState<Set<string>>(new Set());

    // Click handler for when an emoji is clicked
    const clicked = (image: string): void => {
        // Shuffle emojis
        shuffle(EmojiMapper.getImages());

        // Check to see if emoji already clicked... reset if true
        if (clickedSet.has(image)) {
            setMessage('Emoji already guessed. Try again!');
            updateScore(0);
            updateClicked(new Set<string>());
            return;
        }

        // If first click, update scores and continue
        updateClicked(clickedSet => clickedSet.add(image));
        setMessage('Good job! Keep going!');
        const newScore: number = score + 1;
        updateScore(newScore);
        if (newScore > topScore) {
            updateTopScore(newScore);
        }
    };

    // Creates Emoji component from provided image URL
    const createEmoji = (url: string): JSX.Element => {
        return (
            <Emoji
                key={url}
                image={url}
                alt={'emoji image'}
                emojiClicked={clicked}
            />
        );
    };

    return (
        <>
            <Header score={score} topScore={topScore} message={message} />
            <Container>{emojis.map(url => createEmoji(url))}</Container>
            <Footer />
        </>
    );
};
