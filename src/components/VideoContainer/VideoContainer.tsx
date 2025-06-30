const VideoContainer = () => {
    return (
        <div className="relative w-full h-full max-h-[95vh]">
            <video
                src={"https://dlwra9x5wdukt.cloudfront.net/background.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark bg-opacity-40 pointer-events-none" />
        </div>
    );
}

export default VideoContainer;