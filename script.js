const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');

    if (!box.querySelector('.options')) {
      const options = document.createElement('div');
      options.className = 'options';
      options.innerHTML = `
        <label>Color:
          <select>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </label>
        <br/>
        <label>Size:
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
      `;
      box.appendChild(options);
    }
  });
});
