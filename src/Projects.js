import React from 'react'

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <div className='Projects'>

                <div className="project">
                    <h2>Sunday School Rank and File</h2>
                    <div>
                        <video
                            height="250px"
                            controls
                        >
                            <source src="/sundayschoolDemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <p className='description'>A full stack serveless web application I built for my brother to manage his football pool. He already had a google sheet to tabulate points, and requested a fourm to allow users to make their picks every week. In his admin console, he can update the weekly matchups by uploading a CSV file wich is just a list of the teams playing. All of the team logos are rendered dynamically. When users make their picks, they are stored in a database and autofilled for the rest of the week in case they wish to update or view their picks. At the end of the week, my brother downloads a CSV of all the players' picks.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/sunday-school-rank-and-file">GitHub</a><br />View <a href="https://sundayschoolrankandfile.com">Website</a></p>
                    </div>
                </div>
                <div className="project">
                    <h2>Minesweeper</h2>
                    <video
                        height="250px"
                        controls
                    >
                        <source src="/MinesweeperDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div>

                        <p className='description'>A Java Swing application based on the clasic game Minesweeper.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/mine-sweeper">GitHub</a></p>
                    </div>
                </div>
                <div className="project">
                    <h2>Comunity Twitter</h2>
                    <video
                        height="250px"
                        controls
                    >
                        <source src="/VikeTweetDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div>

                        <p className='description'>A full stack serveless web application which allows anyone to anonymously submmit text and or an image to a shared twitter account</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/tweet-commune">GitHub</a><br />View <a href="https://viketweet.com">Website</a><br />View <a href="https://twitter.com/VikeTweet">Twitter Account</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
