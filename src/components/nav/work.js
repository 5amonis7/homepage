import React from 'react'

const work = () => {

    const linkedin = { url: 'https://www.linkedin.com/in/andrew-monis-022681209/'}
    const github = { url: 'https://github.com/5amonis7'}
    const stack = { url: 'https://stackoverflow.com/users/16513794/andrew-monis'}
    const figma = { url: 'https://www.figma.com/'}

    return (
        <div className='work'>
            <p className='work-title'>Work</p>
            <div className='work-links'>
                <a rel="noreferrer" target="_blank" href={linkedin.url} class='linkedin' ><img src={require('./images/linkedin.png')} alt="linkedin" /></a>
                <a rel="noreferrer" target="_blank" href={github.url} class='github' ><img src={require('./images/github1.png')} alt="github" /></a>
                <a rel="noreferrer" target="_blank" href={stack.url} class='stack' ><img src={require('./images/stack.png')} alt="stack" /></a>
                <a rel="noreferrer" target="_blank" href={figma.url} class='figma' ><img src={require('./images/figma.png')} alt="figma" /></a>
            </div>
        </div>
    )
}

export default work
