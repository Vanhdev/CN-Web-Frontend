import foot from '../../../assets/images/foot.svg';

function AboutStartHeader(props) {
    const {title} = props;

    return(
        <div className='about-us-start-header'>
            <div className='about-big-title'>{title}</div>
            <div>
                <img src={foot}/>
            </div>
        </div>
    )
}

export default AboutStartHeader;