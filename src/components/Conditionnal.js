
function Conditional(props) {
    return(
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Now successfully loaded</h1>}
        </div>
    )
}
export default Conditional;