const timeoutId = setTimeout(() => {
    console.log("i told you this website was unprotected");
}, 5000);

clearTimeout(timeoutId); // The timeout is canceled.
