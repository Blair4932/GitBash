const HealthBar = ({ playerHealth }) => {

    console.log(playerHealth)

    return (
        <>
            <div className="progress-bar">
                <div className="progress-bar--value">{playerHealth}</div>
                <div className="progress-bar--fill" style={{width: playerHealth * 3}}></div>
            </div>
        </>
    )

}

export default HealthBar