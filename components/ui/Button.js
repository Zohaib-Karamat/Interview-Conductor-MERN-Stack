<button
  onClick={() => {
    if (window.navigator.vibrate) window.navigator.vibrate(10);
    new Audio("/sounds/click.mp3").play();
  }}
  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all"
>
  Submit Answer
</button>