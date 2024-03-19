"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);



// Shows a story from for the user to fikll out after clicking on 'submit' on the nav bar
function addSubmitFormOnClick (evt){
  console.debug('addSubmitFormOnClick', evt)
  hidePageComponents()
  document.getElementById("all-stories-list").style.display = 'block'
  document.getElementById('submit-form').style.display = 'block'
  console.log(evt.target)
}
document.getElementById('submit-story').addEventListener('click', addSubmitFormOnClick);
// This funciton uses evt as an event object that is automatically passed to the event handler functon, containing information about the event.



// show all the user's favorited stories whne clicking 'Favorites'
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);



/** Show user's Stories on clicking "my stories" */

function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-user-stories", navMyStories);



// show login and sign up form on click
function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);



/** Hide everything but profile on click on "profile" */

function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);


/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".user-nav-links").css('display', 'flex');;
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
















