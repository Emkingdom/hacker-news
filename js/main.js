"use strict";

const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");

const $navSubmitStory = $("#nav-submit");
const $submitForm = $("#submit-form");
const $navMyFavorites = $("#nav-my-favorites");
const $navMyStories = $("#nav-my-stories");
const $myFavoritedStories = $("#my-favorited-stories");
const $storiesLists = $(".stories-list");
const $ownStories = $("#my-stories");

function hidePageComponents() {
  const components = [
    $allStoriesList,
    $loginForm,
    $signupForm,
    $submitForm,
    $myFavoritedStories,
    $ownStories,
  ];
  components.forEach((c) => c.hide());
}

async function start() {
  console.debug("start");

  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  if (currentUser) updateUIOnUserLogin();
}

console.warn(
  "HEY STUDENT: This program sends many debug messages to" +
    " the console. If you don't see the message 'start' below this, you're not" +
    " seeing those helpful debug messages. In your browser console, click on" +
    " menu 'Default Levels' and add Verbose"
);
$(start);
