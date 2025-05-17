import { useEffect } from 'react'

const project_data = [
    {
        title: "Orrery Solar System",
        description: "Interactive 3D solar system built with Three.js",
        url: "https://com676solarsystem.vercel.app/",
        image: "/images/projects/solar-system.jpg"
    }
];

function Projects() {
    const previousPath = localStorage.getItem('previousPath');

    useEffect(() => {
        document.title = 'Liam Broadway - Projects';
    }, []);

    return (
        <>
            <div>
                <a className="anchor-button" onClick={() => { window.location.href = previousPath }}>
                    <span class="material-symbols-rounded">arrow_back</span> Go Back</a>
            </div>
            <div className="row flex projects">
                {/* Links */}
                {project_data.map((project, index) => (
                    <div
                        key={index}
                        className="scale background card-link card"
                        onClick={() => { window.open(project.url, '_blank') }}
                        style={{
                            backgroundImage: `linear-gradient(to bottom, transparent -20%, var(--background) 70%), url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="link-title">
                            <span className="title">{project.title}</span>
                            <span className="material-symbols-rounded">arrow_outward</span>
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects