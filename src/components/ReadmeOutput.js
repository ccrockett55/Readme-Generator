import './readme.css';
import { Link } from 'react-router-dom'

function ReadmeOutput({projects}) {
    function NewlineText(props) {
        const text = props.text;
        return text.split('\n').map(str => <div>{str}</div>);
    }
    return (
        <div>
            {projects.map((project) => (
            <div  key={project.ptitle} className='container card space'>
                 <div className='card-body'>
                 <p className='fw-bold'># {project.ptitle}</p>

                <p className='fw-bold'>## Project Description</p>
                <p>{project.pdescription}</p>
             
                <p><span className='fw-bold'>## Table of Contents</span><br /><NewlineText text={project.pcontents} /></p>
             
                <p className='fw-bold'>## How to install/run project</p>
                <p>{project.prun}</p>

                <p className='fw-bold'>## Project use instructions</p>                
                <p>{project.pusage}</p>

                <p className='fw-bold'>## Collaborators</p>
                <p>{project.pcollaborators}</p>

                <p className='fw-bold'>## License</p>
                <p>This code is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).</p>
                 </div>
                

            </div>
            
        

            ))}
        </div>
    );
}

export default ReadmeOutput;