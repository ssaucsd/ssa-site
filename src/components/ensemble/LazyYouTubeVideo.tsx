import { useState, useEffect, useRef } from "react";
import YouTube, { type YouTubeProps } from "react-youtube";

interface LazyYouTubeVideoProps {
  videoId: string;
}

const LazyYouTubeVideo = ({ videoId }: LazyYouTubeVideoProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create Intersection Observer to load video when it's near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            // Once loaded, stop observing
            observer.disconnect();
          }
        });
      },
      {
        // Load when video is within 200px of viewport
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      ) : (
        <div
          style={{
            width: "100%",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            backgroundColor: "#000",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            📹 Video will load when scrolled into view
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyYouTubeVideo;
