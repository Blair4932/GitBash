const SpecialMoveBar = ({ playerSpecialMoveCharge }) => {

    console.log("This is the special move charge", playerSpecialMoveCharge)

    return (
        <>
            <div className="progress-bar" style={{height: "2vh", width: "250px"}}>
                <div className="progress-bar--value">
                    <h3>{playerSpecialMoveCharge}</h3>
                </div>
                <div className="progress-bar--fill" style={{width: playerSpecialMoveCharge * 5, background: "rgb(0, 255, 229)"}}></div>
            </div>
        </>
    )

}

export default SpecialMoveBar