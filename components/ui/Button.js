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
      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm sm:text-base ${className || ''}`}
      {...props}
    >
      {children || "Submit Answer"}
    </button>
  );
}