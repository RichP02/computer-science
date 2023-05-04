function showImageDetails(card) {
  const imageSrc = card.querySelector('img').src;
  const imageTitle = card.querySelector('h2').textContent;
  const imageDescription = card.querySelector('.description').textContent;

  const popup = document.createElement('div');
  popup.classList.add('image-popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('image-popup-content');

  const popupImg = document.createElement('img');
  popupImg.classList.add('image-popup-img');
  popupImg.src = imageSrc;

  const popupInfo = document.createElement('div');
  popupInfo.classList.add('image-popup-info');

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = imageTitle;

  const popupDescription = document.createElement('p');
  popupDescription.textContent = imageDescription;

  popupInfo.appendChild(popupTitle);
  popupInfo.appendChild(popupDescription);

  popupContent.appendChild(popupImg);
  popupContent.appendChild(popupInfo);

  popup.appendChild(popupContent);

  document.body.appendChild(popup);

  const popupClose = document.createElement('button');
  popupClose.classList.add('image-popup-close');
  popupClose.textContent = 'Cerrar';
  popupClose.addEventListener('click', closeImageDetails);

  popupContent.appendChild(popupImg);
  popupContent.appendChild(popupInfo);
  popupContent.appendChild(popupClose);

  popup.appendChild(popupContent);

  document.body.appendChild(popup);
}

function closeImageDetails() {
  const popup = document.querySelector('.image-popup');
  document.body.removeChild(popup);
}