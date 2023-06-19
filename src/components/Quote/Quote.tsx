import './Quote.scss';

interface QuoteParams {
    text: string,
    author: string
}

export function Quote({text, author}: QuoteParams) {
    return (
        <div className="quote">
            <q>{text}</q>
            <div className="author">{author}</div>
        </div>
    )
}