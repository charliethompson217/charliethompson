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
                            <source src="/assets/sundayschoolDemo.mp4" type="video/mp4" />
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
                    </div>
                </div>
                <div className="project">
                    <h2>Minesweeper</h2>
                    <video
                        width="90%"
                        controls
                    >
                        <source src="/assets/MinesweeperDemo.mp4" type="video/mp4" />
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
                        <source src="/assets/VikeTweetDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div>

                        <p className='description'>This project introduces a serverless web application that democratizes the sharing of text and images. Designed to encourage anonymous participation, it gives users the freedom to share content that is automatically posted to a communal Twitter account.</p>
                        <p>View Code on <a href="https://github.com/charliethompson217/tweet-commune">GitHub</a></p>
                    </div>
                </div>
                <div className="project">
                    <h1>Audio Visualizer</h1>
                    <video
                        width="90%"
                        controls
                    >
                        <source src="/assets/VisualizerDemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className='description'>This React web application enables users to play and visualize audio files, convert audio to MIDI using machine learning, and interact with a customizable synthesizer. Users can upload various audio formats or use their microphone for live input. The synthesizer allows customization of waveforms, timbre, ADSR settings, vibrato, and tremolo, and can be played using the computer keyboard. The app features real-time visualizations, including a custom FFT visualizer, waveform display, and piano roll.</p>
                    <p>View Code on <a href="https://github.com/charliethompson217/AudioVisualizer">GitHub</a><br></br><p>View <a href="https://audiovisualizer.link">Website</a></p></p>
                </div>
            </div>
        </>
    )
}
