import PropTypes from 'prop-types'
import styles from "./Students.module.css"
function Student(props){
    return(
        <div className={styles.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );

}
//for debugging purposes set the datatypes of each values
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student