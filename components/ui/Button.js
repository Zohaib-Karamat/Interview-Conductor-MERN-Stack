export default function Button({ onClick, children, className, ...props }) {
  const handleClick = () => {
    if (window.navigator.vibrate) window.navigator.vibrate(10);
    try {
      new Audio("/sounds/click.mp3").play();
    } catch (e) {
      // Ignore audio errors
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all ${className || ''}`}
      {...props}
    >
      {children || "Submit Answer"}
    </button>
  );
}