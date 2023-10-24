export default function Loader() {
    return (
        <div>
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake  elevation-2" src="/images/cap.png" alt="Logo" height={60} width={60} style={{ borderRadius:"50%" }} />
            </div>
        </div>
    )
}

