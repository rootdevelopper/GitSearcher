
const github = new GitHub;
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;
  if(userText !== ''){
    //HTTP call
    github.getUser(userText)
    .then(data =>{
      //console.log(data);
      if(data.profile.message === 'Not Found'){
        //alert
        //console.log(`Not here ${data.profile.message}`);
        ui.showAlert('User not found', 'alert alert-danger');
      }else{
        //profile
        //console.log(`data found: ${data.profile}`);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }

    })
  } else {
    //clear profile
    ui.clearProfile();
  }
});