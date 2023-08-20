const userConfirmation = confirm("this website is unsecure. would you like to continue?");
if (userConfirmation) {
    console.log("User confirmed continue.");
} else { 
    window.close ();
    }
