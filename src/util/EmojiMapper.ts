class EmojiMapper {
    static getImages(): string[] {
        const images = [
            'emoji/angry.png',
            'emoji/angry-1.png',
            'emoji/bored.png',
            'emoji/bored-1.png',
            'emoji/bored-2.png',
            'emoji/confused.png',
            'emoji/confused-1.png',
            'emoji/crying.png',
            'emoji/crying-1.png',
            'emoji/embarrassed.png',
            'emoji/emoticons.png',
            'emoji/happy.png',
            'emoji/happy-1.png',
            'emoji/happy-2.png',
            'emoji/happy-3.png',
            'emoji/happy-4.png',
            'emoji/ill.png',
            'emoji/in-love.png',
            'emoji/kissing.png',
            'emoji/mad.png',
            'emoji/nerd.png',
            'emoji/ninja.png',
            'emoji/quiet.png',
            'emoji/sad.png',
            'emoji/secret.png',
            'emoji/smart.png',
            'emoji/smile.png',
            'emoji/smiling.png',
            'emoji/surprised.png',
            'emoji/surprised-1.png',
            'emoji/suspicious.png',
            'emoji/tongue-out.png',
            'emoji/tongue-out-1.png',
            'emoji/unhappy.png',
            'emoji/wink.png'
        ];

        return images.sort(() => Math.random() - 0.5);
    }
}

export default EmojiMapper;
