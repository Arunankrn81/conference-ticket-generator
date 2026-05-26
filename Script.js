const form =
    document.getElementById("ticketForm");

const avatarInput =
    document.getElementById("avatar");

const fileName =
    document.getElementById("fileName");

const ticketAvatar =
    document.getElementById("ticketAvatar");

const ticketName =
    document.getElementById("ticketName");

const ticketGithub =
    document.getElementById("ticketGithub");

let uploadedAvatar = "";

/* AVATAR */

avatarInput.addEventListener(
    "change",
    function () {

        const file =
            avatarInput.files[0];

        if (!file) return;

        fileName.textContent =
            file.name;

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                uploadedAvatar =
                    event.target.result;
            };

        reader.readAsDataURL(file);
    }
);

/* FORM */

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById(
                "fullName"
            ).value.trim();

        const github =
            document.getElementById(
                "github"
            ).value.trim();

        ticketName.textContent =
            name;

        ticketGithub.textContent =
            github;

        if (uploadedAvatar) {

            ticketAvatar.src =
                uploadedAvatar;

            ticketAvatar.style.display =
                "block";
        }
    }
);