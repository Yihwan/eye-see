const inputs = document.querySelectorAll('.controls input');

function handleUpdate(e) {
  const suffix = this.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${this.name}`, e.target.value + suffix);

}

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);
});

inputs.forEach(function(input) {
  input.addEventListener('mousemove', handleUpdate);
});
