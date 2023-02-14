import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
    <h1>About Isaiah Levy</h1>
    <p>Hi my name is Isaiah Levy. I like playing basketball and am interested in tech. Im excited to take agile dev becuase it will teach me how to go about independent projects in the future </p>
    <p>Check out the <Link to="/messages">messages page</Link>.</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
