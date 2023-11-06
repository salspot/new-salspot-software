import React from 'react'

const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        if (document) {
            document.addEventListener("scroll", () => {
                if (window && window.scrollY > 170) {
                    setThePosition(true)
                } else {
                    setThePosition(false);
                }
            });
        }

    }, [])

    const onScrollStep = () => {
        if (window && window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        if(window) {
            window.scroll(0, window.pageYOffset - scrollStepInPx);
        }
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <div
                className={`go-top ${thePosition ? 'active' : ''}`}
                onClick={scrollToTop}
                role="button"
                tabIndex="0"
                aria-hidden="true"
            >
                <i className="flaticon-up"></i>
            </div>
        )
    }

    return (
        <React.Fragment>
            {renderGoTopIcon()}
        </React.Fragment>
    )
}

export default GoTop;
