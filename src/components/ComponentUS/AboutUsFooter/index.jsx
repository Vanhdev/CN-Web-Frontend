function AboutUsFooter() {
    return(
        <div>
            <div 
                className='about-big-title'
                style={{textAlign: 'center', margin: "20px 0"}}
            >
                Made for travelers
            </div>
            <div style={{width: "60%", textAlign: "center", margin: "20px auto"}} className='about-normal-text'>
                “Absolutely amazing! This was one of the most incredible experiences I have ever had. 
                It was perfectly timed and well organized." 
                <div>
                    <strong style={{color: "var(--pink-color)"}}>
                        – Kristy from the UK after touring the Harry Potter studio
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFooter;