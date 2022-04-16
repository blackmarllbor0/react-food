/* eslint-disable jsx-a11y/iframe-has-title */
export default function ContactPage() {
    return (
        <>
            <h1>My project</h1>
            <h2><a href="https://github.com/blackmarllbor0" target={'_blank'} rel="noreferrer">Link to my Github</a></h2>
            <div className="iframe" style={{margin: '5rem 0 0 0'}}>
                <iframe src="https://blackmarllbor0.github.io/react-movies/" />
                <iframe src="https://blackmarllbor0.github.io/react-shop/" />
            </div>
        </>
    );
}