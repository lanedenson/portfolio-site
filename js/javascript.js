function output(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `{value}`;
  }