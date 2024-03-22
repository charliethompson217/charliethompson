import React from 'react'

export default function Projects() {
    return (
        <>
            
            <div className='Projects'>
                <div className="project">
                    <h2>Sunday School Rank and File</h2>
                    <div>
                        <video
                            width="90%"
                            controls
                        >
                            <source src="/sundayschoolDemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <p className='description'>
                            Using AWS, Python, and ReactJs, I developed a full-stack, serverless web application for my brother to efficiently manage his football pool.
                            After creating a Google Sheet to track scores, he needed a submmision form.
                            This platform enables users to securely submit weekly picks via a form, which automatically updates their selections in a database.
                            A CSV file, uploaded by the admin, populates the upcoming games and team logos get rendered dynamically.
                            Participants can conveniently view and modify their picks throughout the week, and a final CSV download with everyone's choices is available to the admin.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/sunday-school-rank-and-file">GitHub</a><br />View <a href="https://sundayschoolrankandfile.com">Website</a></p>
                    </div>
                </div>
                <div className="project">
                    <h2>Minesweeper</h2>
                    <video
                        width="90%"
                        controls
                    >
                        <source src="/MinesweeperDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div>

                        <p className='description'>This project is a modern take on the classic Minesweeper game, recreated using Java Swing. I've crafted this application to replicate the timeless strategy game, providing a nostalgic yet refreshed gaming experience.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/mine-sweeper">GitHub</a></p>
                    </div>
                </div>
                <div className="project">
                    <h2>Comunity Twitter</h2>
                    <video
                        width="90%"
                        controls
                    >
                        <source src="/VikeTweetDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div>

                        <p className='description'>This project introduces a serverless web application that democratizes the sharing of text and images. Designed to encourage anonymous participation, it gives users the freedom to share content that is automatically posted to a communal Twitter account.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/tweet-commune">GitHub</a><br />View <a href="https://viketweet.com">Website</a><br />View <a href="https://twitter.com/VikeTweet">Twitter Account</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
