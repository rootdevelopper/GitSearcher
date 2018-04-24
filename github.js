class GitHub {
  constructor(){
    this.client_id = 'GetYourOwnIdFromGitHub';
    this.client_secret = 'GetYourOwnSecretFromGitHub';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){                            
    //https://api.github.com/users/rootdevelopper
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profileData = await profileResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposData = await repoResponse.json();
    return {
     profile: profileData,
     repos: reposData
    }
  }
}