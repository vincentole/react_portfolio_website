import React from 'react';
import Project from './Project';
import DescriptionMobile from './DescriptionMobile';
import pfData from '../../data/portfolioData';

function Portfolio() {
    return (
        //  Portfolio Start
        <section id='portfolio' className='section'>
            {/* Container Start  */}
            <div className='container-cstm'>
                <h2 className='section-heading'>Some Things, That I've Built</h2>
                {/* Projects Start  */}
                <div id='projects' className='grid grid-col-1 md:grid-cols-2 gap-2'>
                    <Project           title={pfData[0].title} description={pfData[0].description} code={pfData[0].code} layout={pfData[0].layout} githubLink={pfData[0].githubLink} liveLink={pfData[0].liveLink} bgDefaultClass={pfData[0].bgDefaultClass} bgSquareClass={pfData[0].bgSquareClass} />
                    <DescriptionMobile title={pfData[0].title} description={pfData[0].description} code={pfData[0].code} layout={pfData[0].layout} githubLink={pfData[0].githubLink} liveLink={pfData[0].liveLink} />
                    
                    <Project           title={pfData[1].title} description={pfData[1].description} code={pfData[1].code} layout={pfData[1].layout} githubLink={pfData[1].githubLink} liveLink={pfData[1].liveLink} bgDefaultClass={pfData[1].bgDefaultClass} bgSquareClass={pfData[1].bgSquareClass} />
                    <DescriptionMobile title={pfData[1].title} description={pfData[1].description} code={pfData[1].code} layout={pfData[1].layout} githubLink={pfData[1].githubLink} liveLink={pfData[1].liveLink} />
                    
                    <Project           title={pfData[2].title} description={pfData[2].description} code={pfData[2].code} layout={pfData[2].layout} githubLink={pfData[2].githubLink} liveLink={pfData[2].liveLink} bgDefaultClass={pfData[2].bgDefaultClass} bgSquareClass={pfData[2].bgSquareClass} />
                    <DescriptionMobile title={pfData[2].title} description={pfData[2].description} code={pfData[2].code} layout={pfData[2].layout} githubLink={pfData[2].githubLink} liveLink={pfData[2].liveLink} />
                    
                    <Project           title={pfData[3].title} description={pfData[3].description} code={pfData[3].code} layout={pfData[3].layout} githubLink={pfData[3].githubLink} liveLink={pfData[3].liveLink} bgDefaultClass={pfData[3].bgDefaultClass} bgSquareClass={pfData[3].bgSquareClass} />
                    <DescriptionMobile title={pfData[3].title} description={pfData[3].description} code={pfData[3].code} layout={pfData[3].layout} githubLink={pfData[3].githubLink} liveLink={pfData[3].liveLink} />
                </div>
                {/* Projects End  */}
            </div>
            {/* Container End  */}
        </section>
        //  Portfolio End
    );
    
}

export default Portfolio;
