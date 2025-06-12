const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Close other boxes
    boxes.forEach(b => {
      if (b !== box) {
        b.classList.remove('active');
        const opts = b.querySelector('.options');
        if (opts) opts.remove();
      }
    });

    const isActive = box.classList.toggle('active');

    if (isActive && !box.querySelector('.options')) {
      const options = document.createElement('div');
      options.className = 'options';

      options.innerHTML = `
        <div class="option-group">
          <label><strong>Color:</strong>
            <select>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </label>
        </div>
        <div class="option-group">
          <label><strong>Size:</strong>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </label>
        </div>
        <button class="apply-btn">Apply</button>
      `;

      box.appendChild(options);

      // Add button handler
      options.querySelector('.apply-btn').addEventListener('click', e => {
        e.stopPropagation();
        alert(
          `Box ${box.id} settings:\n` +
          `Color: ${options.querySelector('select').value}, ` +
          `Size: ${options.querySelectorAll('select')[1].value}`
        );
      });
    }
  });
});
