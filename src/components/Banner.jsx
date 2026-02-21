import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [
        "Software Engineer in Progress",
        "Full-Stack Developer",
        "Problem Solver"
    ];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)


        setText(updatedText)
        if (isDeleting) {
            setDelta(prv => prv / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setDelta(500)
        }



    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline' >Software Engineer in Progress</span>
                        <h1>{`Hi I'am Ashutosh`} <span className='wrap'>{text}</span></h1>
                        <p> I focus on deep problem-solving, scalable system design, and building real-world applications. Currently strengthening DSA and core CS concepts while developing projects that reflect production-level thinking.</p>
                        <button onClick={() => console.log('connect')}> let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner