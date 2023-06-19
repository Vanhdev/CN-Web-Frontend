function HelpUs(props) {
    const {title, content, image} = props;

    return(
        <div className="help-us">
            <img src={image} style={{width: "100%"}}/>
            <div className='about-normal-blue-text'>{title}</div>
            <div className='about-normal-text'>
                {content}
            </div>
        </div>
    )
}

export default HelpUs;