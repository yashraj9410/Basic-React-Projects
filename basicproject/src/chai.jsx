const name = "Yash Raj"  // we can use the name inside the return component 
                         // NOTE : we can only pass a evaluated Expression with final value inside the compinent in the tag {}

function Chai() {
    return (
        <p>
            <h1>Hello how are you doing {name}</h1>
        </p>
    )
}
// component name should have a upper case starting 
export default Chai
