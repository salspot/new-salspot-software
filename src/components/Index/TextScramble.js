import React from 'react'

export class TextScramble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'initial', unmounted: false};
        this.chars= '!<>-_\\/[]{}—=+*^?#________';
        this.counter = 0;
    }

    componentDidMount() {
        this._ismounted = true;
        this.next()
    }

    componentWillUnmount() {
        this._ismounted = false;
    }

    next = () => {
        if (!this._ismounted) {
            return;
        }
        this.updateText(this.props.phrasesToDecode[this.counter]).then(() => {
            setTimeout(this.next, 2500)
        })
        this.counter = (this.counter + 1) === this.props.phrasesToDecode.length ? 0 : (this.counter + 1);
    }

    updateText = (newText) => {
        if (!this._ismounted) {
            return;
        }

        const oldText = this.state.text;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({from, to, start, end});
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update = () => {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {from, to, start, end, char} = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }

        this.setState({text: output});

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar = () => {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }

    render() {
        return <span>{this.state.text}</span>
    }
}
