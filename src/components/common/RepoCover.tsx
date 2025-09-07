import { useState } from "react";

interface RepoCoverProps {
  repoName: string;
  className?: string;
}

function RepoCover({ repoName, className = "" }: RepoCoverProps) {
  const [src, setSrc] = useState(
    `https://raw.githubusercontent.com/KaiChuuu/${repoName}/main/cover.jpg`
  );
  const [attempt, setAttempt] = useState<"jpg" | "png" | "done">("jpg");

  const handleError = () => {
    if (attempt === "jpg") {
      setSrc(
        `https://raw.githubusercontent.com/KaiChuuu/${repoName}/main/cover.png`
      );
      setAttempt("png");
    } else {
      setAttempt("done");
    }
  };

  if (attempt === "done") {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        No image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={repoName}
      onError={handleError}
      className={`${className}`}
    />
  );
}

export default RepoCover;
