import { useEffect, useRef } from 'react';

const chars = "Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ本网站目前正在重建，以提高导航的质量本サイトは、ナビゲーションの品質向上のため、現在再構築中です。для улучшения качества навигации";


class Glitch {
    constructor(selector, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
        this.selector = selector;
        this.numberOfGlitchedLetter = numberOfGlitchedLetter;
        this.innerText = '';
        this.charArray = [];
        this.charIndex = [];
        this.timeGlitch = timeGlitch;
        this.timeBetweenGlitch = timeBetweenGlitch;
        this.timePerLetter = timePerLetter;
        this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
        this.count = 0;
        this.interval = null;
    }

    init() {
        this.innerText = this.selector.innerText;
        this.charArray = this.innerText.split("");
        if (this.numberOfGlitchedLetter === undefined || this.numberOfGlitchedLetter > this.innerText.length) {
            this.numberOfGlitchedLetter = this.innerText.length;
        }
        this.defineCharIndexToRandomize();
    }

    defineCharIndexToRandomize() {
        this.charIndex = [];
        for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
            let randCharIndex = Math.floor(Math.random() * this.charArray.length);
            this.charIndex.push(randCharIndex);
        }
    }

    randomize() {
        let randomString = Array.from(this.charArray);
        for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
            let randIndex = Math.floor(Math.random() * chars.length);
            let randCharIndex = this.charIndex[i];
            if (randomString[randCharIndex] !== ' ') {
                randomString[randCharIndex] = chars[randIndex];
            }
        }
        this.selector.innerText = randomString.join("");
    }

    update() {
        if (this.count >= this.maxCount - 1) {
            this.selector.innerText = this.innerText;
            this.defineCharIndexToRandomize();
            setTimeout(() => {
                this.count = 0;
            }, this.timeBetweenGlitch);
        } else {
            this.randomize();
            this.count++;
        }
    }

    glitch() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
            this.update();
        }, this.timePerLetter);
    }

    cleanup() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

const GlitchText = ({ text, className, component: Component = "div", ...props }) => {
    const textRef = useRef(null);
    const glitchRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            glitchRef.current = new Glitch(textRef.current, 8, 8000, 100, 3000);  // Paramètres ralentis
            glitchRef.current.init();
            glitchRef.current.glitch();
        }

        return () => {
            if (glitchRef.current) {
                glitchRef.current.cleanup();
            }
        };
    }, []);

    useEffect(() => {
        if (textRef.current && glitchRef.current) {
            textRef.current.innerText = text;
            glitchRef.current.innerText = text;
            glitchRef.current.init();
        }
    }, [text]);

    return (
        <Component className={className} {...props} ref={textRef}>
            {text}
        </Component>
    );
};

export default GlitchText;
