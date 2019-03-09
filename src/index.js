
let rootView = document.getElementById('root');

let restore_action = options => {
    rootView.style.backgroundColor = options.backgroundColor;
}

restore_options(restore_action);