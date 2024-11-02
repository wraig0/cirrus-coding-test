import { signalBlank, signalFilled } from "../styleConstants";

interface SignalStrengthIconProps {
  strengthPercentage: number;
}

export function SignalStrengthIcon(props: SignalStrengthIconProps) {
  // Ensure the strength level is within 0-4 range
  const convertedToBarsStrength = Math.round(props.strengthPercentage * 4);
  const level = Math.min(Math.max(convertedToBarsStrength, 0), 4);

  return (
    <svg
      width="56px"
      height="56px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[1, 2, 3, 4].map((bar) => (
        <rect
          key={bar}
          x={bar * 5 - 3} // Position bars evenly across the icon
          y={24 - bar * 5} // Decrease bar height as bar index decreases
          width="3"
          height={bar * 5}
          fill={bar <= level ? signalFilled : signalBlank} // Fill color based on strength level
        />
      ))}
    </svg>
  );
}
