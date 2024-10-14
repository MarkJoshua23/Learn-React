import styles from "./Students.module.css"
interface Students{
    name: string
    age: number
    isStudent: boolean
}
function Student({name,age,isStudent}: Students){
    return(
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes": "No"}</p>
        </div>
    );

}
//for debugging purposes set the datatypes of each values

export default Student