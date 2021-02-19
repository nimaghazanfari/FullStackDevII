const displayAlert = () => {
    alert('Hey, this is an alert box.');
}

const displayPrompt = () => {
    console.log(prompt('Hey, this is a prompt box.'));
}

const displayConfirm = () => {
    if(confirm('Do you really want to close the browser?'))
        window.close();
}