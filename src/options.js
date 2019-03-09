
// var saveButton = document.getElementById('save');
let backgroundColorOption = document.getElementById('background_color');
// var statusView = document.getElementById('status');

let save_options = () => {
    // saveButton.disabled = true;
    chrome.storage.sync.set({
        backgroundColor: backgroundColorOption.value
    }, () => {
        // statusView.textContent = 'Options saved.';
        // saveButton.disabled = false;
        // setTimeout(function() {
        //     statusView.textContent = '';
        // }, 750);
    });
}

let restore_action = options => {
    backgroundColorOption.value = options.backgroundColor;
}

restore_options(restore_action);
// saveButton.addEventListener('click', save_options);
backgroundColorOption.addEventListener("change", save_options, false);