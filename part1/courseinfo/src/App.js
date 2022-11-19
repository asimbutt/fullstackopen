const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
/* 1.1: course information, step1
const Content = (props) => {
    return (
        <p>{props.part} {props.number}</p>
    )
}
*/

/*1.2: course information, step2*/
const Part = (props) => {
    return (
        <p>{props.part} {props.number}</p>
    )
}
const Content = () => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Part part={part1} number={exercises1}/>
            <Part part={part2} number={exercises2}/>
            <Part part={part3} number={exercises3}/>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'

    return (
        <div>
            <Header course={course}/>
            <Content/>
            {/*<Total total={exercises1+exercises2+exercises3}/>*/}
        </div>
    )
}

export default App