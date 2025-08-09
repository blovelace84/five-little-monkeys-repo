export default function Controls({
    onNext,
    onPlayPause,
    onRestart,
    isPlaying,
    audioAvailable,
}) {
    return(
        <div className="controls" role="region" aria-label="controls">
            <button className="btn" onClick={onNext}>Next Verse</button>
            <button className="btn secondary" onClick={onPlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button className="btn secondary" onClick={onRestart}>Restart</button>
            <div style={{ alignSelf: "center", marginLeft: 8}} className="small">
                {audioAvailable ? "Audio: ready" : "No audio file (place song.mp3 in /public)"}
            </div>
        </div>
    );
}