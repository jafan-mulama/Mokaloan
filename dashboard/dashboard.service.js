function DashboardService(containerId) {
    this.appElement = document.getElementById(containerId);
  }
  
  DashboardService.prototype.renderCard = function (title, description, linkUrl) {
    if (!this.appElement) {
      return;
    }
  
    var card = new TypeScriptCard(title, description, linkUrl);
    var cardElement = card.render();
    this.appElement.appendChild(cardElement);
  };
  