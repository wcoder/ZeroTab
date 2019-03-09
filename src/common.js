const DEFAULT_OPTIONS = {
    backgroundColor: '#ffffff'
}

const restore_options = restore_action => {
    chrome.storage.sync.get(DEFAULT_OPTIONS, restore_action);
}