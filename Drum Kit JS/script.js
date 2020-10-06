window.addEventListener('keydown', playAudio);

function playAudio(e) {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`);
	const key = document.querySelector(`div[data-key="${e.key}"]`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
[ ...keys ].forEach((key) => {
	key.addEventListener('transitionend', () => {
		key.classList.remove('playing');
	});
});
