import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import policecarousal from '../Allimages/policecarousal.jpeg';
import policecarousal2 from '../Allimages/policecarousal2.jpeg';
import policecarousal3 from '../Allimages/policecarousal3.jpeg';
import policecarousal4 from '../Allimages/policecarousal4.jpeg';
import policecarousal5 from '../Allimages/policecarousal5.jpeg';
import policecarousal6 from '../Allimages/policecarousal6.jpeg';

const stories = [
    {
        image: policecarousal,
        title: "Rapid Response",
        description: "Emergency teams coordinated quickly and helped citizens receive timely assistance during a local safety incident."
    },
    {
        image: policecarousal2,
        title: "Traffic Awareness",
        description: "Police outreach programs encouraged helmet use, safe driving, and responsible road behavior across busy areas."
    },
    {
        image: policecarousal3,
        title: "Community Support",
        description: "Local officers worked with residents to improve reporting, follow-up, and trust in citizen services."
    },
    {
        image: policecarousal4,
        title: "Case Follow-Up",
        description: "Digital complaint tracking helped citizens submit details online and stay connected with department support."
    },
    {
        image: policecarousal5,
        title: "Public Safety Drive",
        description: "Awareness campaigns supported safer neighborhoods through prevention guidance and visible police presence."
    },
    {
        image: policecarousal6,
        title: "Citizen Assistance",
        description: "Verification and online service workflows made important police services easier for citizens to access."
    }
];

export function SuccessStory() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 4,
        speed: 500,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2, centerMode: false } },
            { breakpoint: 576, settings: { slidesToShow: 1, centerMode: false } }
        ]
    };

    return (
        <section className="success-section">
            <Container>
                <div className="section-title-row">
                    <div>
                        <span className="section-kicker">Positive Impact</span>
                        <h1>Success Stories</h1>
                    </div>
                    <p>Highlights from citizen support, safety drives, and department services.</p>
                </div>
                <Paper elevation={0} className="success-slider">
                    <Slider {...settings}>
                        {stories.map((story) => (
                            <div className="success-slide" key={story.title}>
                                <Card className="success-card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={story.image}
                                            alt={story.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {story.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {story.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Paper>
            </Container>
        </section>
    )
}
