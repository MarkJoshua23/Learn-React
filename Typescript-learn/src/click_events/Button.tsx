

function Button(){

    const handleClick2 = (name:string) => console.log(`${name} stop clicking`)

    // 'e' means event, you can see in console what can be modified
    const handleClick3 = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e)
    //use event object
    const handleClick4 = (e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.textContent = "Ouch!"

    let count=0;
    const handleClick = (name:string) => {
        if(count<3){
            count++
            console.log(`${name} you clicked me ${count} times`)
        }else{
            console.log(`${name} stop!!!!`)
        }
    }

    //arrow func is important for onclick to not call it right at start but by clicking
    return(
        <>
        <p>See console for this part</p>
        <button onClick={() => handleClick2("bro")}>Dont click bro</button>
        <button onClick={() => handleClick("bro")}>Click Me</button>
        <button onClick={(e) => handleClick3(e)}>Event button</button>
        <button onDoubleClick={(e) => handleClick4(e)}>Changing Button</button>
        </>
        
    );
}

export default Button