export default function backbtn({setSubmitted}){

    function goback(){
        setSubmitted(false)
    }

    return(
        <button type="button" className="backtoformbtn" onClick={goback}>Form</button>
    )
}