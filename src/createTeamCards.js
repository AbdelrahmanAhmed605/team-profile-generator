/*
* Function takes in an array of class instances (Manager, Engineer, Intern) and creates BootStrap 5 cards for every
  instances based on its class. The cards are pushed into an array (teamCards). This array is returned after looping
  through all the class instances
* @param {Array} teamInfo : array of class instances
* @return {Array} teamCards : array of Boostrap5 cards for the respective class instance in teamInfo
*/
function createCards(teamInfo) {
  let teamCards = teamInfo.map((teamMember) => {
    memberRole = teamMember.getRole();
    switch (memberRole) {
      case "Manager":
        const managerCard = `<div class="card">
  <div class="card-header bg-primary">
    <h5 class="card-title text-light">${teamMember.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-mug-hot"></i> ${teamMember.getRole()}</h6>
  </div>
  <div class="card-body bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.getId()}</li>
      <li class="list-group-item">Email: <a class="text-decoration-none" href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${teamMember.getOfficeNum()}</li>
    </ul>
  </div>
</div>`;
        return managerCard;
      case "Engineer":
        const engCard = `<div class="card">
  <div class="card-header bg-primary">
    <h5 class="card-title text-light">${teamMember.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-glasses"></i> ${teamMember.getRole()}</h6>
  </div>
  <div class="card-body bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.getId()}</li>
      <li class="list-group-item">Email: <a class="text-decoration-none" href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
      <li class="list-group-item">Github: <a class="text-decoration-none" target="_blank" href="https://github.com/${teamMember.getGithub()}">${teamMember.getGithub()}</a></li>
    </ul>
  </div>
</div>`;
        return engCard;
      case "Intern":
        const internCard = `<div class="card">
  <div class="card-header bg-primary">
    <h5 class="card-title text-light">${teamMember.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-user-graduate"></i> ${teamMember.getRole()}</h6>
  </div>
  <div class="card-body bg-light">
    <ul class="list-group">
      <li class="list-group-item">ID: ${teamMember.getId()}</li>
      <li class="list-group-item">Email: <a class="text-decoration-none" href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
      <li class="list-group-item">School: ${teamMember.getSchool()}</li>
    </ul>
  </div>
</div>`;
        return internCard;
      default:
        const errorCard = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">Invalid member (member was not given a valid role)</h5>
  </div>
</div>`;
        return errorCard;
    }
  });
  return teamCards;
}

module.exports = createCards;
