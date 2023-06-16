import HelpUs from "../HelpUs";
import aboutUs from '../../../assets/images/about-us.svg';
import aboutUs1 from '../../../assets/images/about-us-1.svg';
import aboutUs2 from '../../../assets/images/about-us-2.svg';


function AboutUsContent() {
    return(
        <>
            <div 
                className='about-big-title'
                style={{textAlign: 'center', margin: "20px 0"}}
            >Travel made easy</div>
            <div className='about-normal-text' style={{margin: "10px 0"}}>
                Say goodbye to stress Browse and book, and we’ll tell you when to be where. 
                You can just focus on having a great time.
            </div>
            <div className='about-us-content-uses'>
                <HelpUs
                    image={aboutUs}
                    title="Never settle for average" 
                    content="Incredible experiences — that’s what we’re all about. You’ll find unbeatable activities for all ages and interests on Tripwise."
                />
                <HelpUs
                    image={aboutUs1}
                    title="Don’t waste a moment" 
                    content="Memories aren’t made while standing in line. Book ahead and skip the lines at the world’s biggest attractions."
                />
                <HelpUs
                    image={aboutUs2}
                    title="See it all" 
                    content="Get personalized recommendations before and during your trip to experience all your destination has to offer."
                />
            </div>
        </>
    )
}

export default AboutUsContent;