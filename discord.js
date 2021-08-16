const discordInviteButton = document.querySelector(".invite-btn");
const discordInviteCode = document.querySelector(".invite-code");

discordInviteButton.addEventListener("click", () => {
  discordInviteCode.classList.add("invite-animation");
});
