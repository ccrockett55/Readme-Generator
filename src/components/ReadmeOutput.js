import './readme.css';

function ReadmeOutput({projects}) {
    return (
        <div>
            {projects.map((project) => (
            <div  key={project.ptitle} className='container card space'>
                 <div className='card-body'>
                 <p className='fw-bold'># {project.ptitle}</p>
                <p>{project.pdescription}</p>
                <p className='fw-bold'>Table of Contents<br />{project.pcontents}</p>
                <p>{project.prun}</p>
                <p>{project.pusage}</p>
                <p>{project.pcollaborators}</p>
                 </div>
                

            </div>
            
        

            ))}
        </div>
    );
}

export default ReadmeOutput;