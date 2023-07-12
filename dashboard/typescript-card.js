function TypeScriptCard(title, description, linkUrl) {
    this.title = title;
    this.description = description;
    this.linkUrl = linkUrl;
  }
  
  TypeScriptCard.prototype.render = function () {
    var card = document.createElement('div');
    card.className = 'card';
  
    var cardTitle = document.createElement('h2');
    cardTitle.textContent = this.title;
  
    var cardDescription = document.createElement('p');
    cardDescription.textContent = this.description;
  
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
  
    var button1 = document.createElement('a');
    button1.textContent = 'Apply';
    button1.className = 'card-button apply-button';
    button1.href = this.linkUrl;
  
    buttonContainer.appendChild(button1);
  
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(buttonContainer);
  
    return card;
  };
  