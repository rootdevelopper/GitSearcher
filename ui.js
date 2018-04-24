class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  //show user profile is username exists
  showProfile(user){
    console.log(user);
    this.profile.innerHTML = 
    `
    <div class="card card-body mb-3">
  <div class="row">
    <div class="col-md-3">
      <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
      <a href="${user.html_url}" class="btn btn-primary btn-block mb-4">View profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary">Public Repos:   ${user.public_repos} </span>
      <span class="badge badge-secondary">Public Gists: ${user.public_gists} </span>
      <span class="badge badge-success">Followers:      ${user.followers}    </span>
      <span class="badge badge-info">Following:         ${user.following}    </span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company:       ${user.company}     </li>
        <li class="list-group-item">Web Site/Blog: ${user.blog}        </li>
        <li class="list-group-item">Bio:           ${user.bio}         </li>
        <li class="list-group-item">Location:      ${user.location}    </li>
        <li class="list-group-item">Hireable:      ${user.hireable}    </li>
        <li class="list-group-item">Member since:  ${user.created_at}  </li>
      </ul>
    </div>
  </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
    `;
  }

  //show user repos 

  showRepos(repos){
    let output = '';
    repos.forEach(function(repo){
      output += `
  <div class="card">
    <div class="card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers:  ${repo.watchers_count}</span>
          <span class="badge badge-info">Forks: ${repo.forks_count} </span>
        </div>
      </div>
    </div>
    <div class="card-footer"> 
    <p> Description: ${repo.description} </p> 
    </div>
  </div>
  <br>
    `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  //clear profile when user delete all the search text
  clearProfile(){
    this.profile.innerHTML = '';
  }
  //send an alert 
  showAlert(message, alert){
    //avoid having multiple alerts at the same time
    this.clearAlert();
    const div = document.createElement('div');
    div.className = alert;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    //timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}