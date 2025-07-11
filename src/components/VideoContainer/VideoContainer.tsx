const VideoContainer = () => {
    return (
        <div className="relative h-full w-full row-start-1 col-start-1 overflow-hidden"
            style={{ marginBottom: '-3px' }}
        >
            <video
                src={"https://dlwra9x5wdukt.cloudfront.net/bg-video.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
        </div>
    );
}

export default VideoContainer;