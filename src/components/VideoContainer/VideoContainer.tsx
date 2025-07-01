const VideoContainer = () => {
    return (
        <div className="relative aspect-video h-full max-h-[95vh] w-full">
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