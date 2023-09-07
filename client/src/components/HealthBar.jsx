const HealthBar = ({ playerHealth, opponentHealth }) => {

    return (
        <>
            <div className="container--progress-bar">
                <div className="progress-bar">
                    <div className="progress-bar--value">
                        <h3>{playerHealth}</h3>
                    </div>
                    <div className="progress-bar--fill" style={{width: playerHealth * 3}}></div>
                </div>

                <div className="progress-bar">
                    <div className="progress-bar--value opponent">
                        <h3>{opponentHealth}</h3>
                    </div>
                    <div className="progress-bar--fill opponent" style={{width: opponentHealth * 3}}></div>
                </div>
            </div>
        </>
    )

}

export default HealthBar