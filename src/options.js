
const backgroundColorOption = document.getElementById('background_color');

const save_options = () => {
    chrome.storage.sync.set({
        backgroundColor: backgroundColorOption.value
    }, () => {

    });
}

const restore_action = options => {
    backgroundColorOption.value = options.backgroundColor;
}

restore_options(restore_action);

backgroundColorOption.addEventListener("change", save_options, false);