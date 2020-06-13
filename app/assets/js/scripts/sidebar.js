
// Bind main menu button
document.getElementById('sidebar_index').onclick = (e) => {
    switch (getCurrentView()) {
        case VIEWS.landing:
            break;
        case VIEWS.settings:
            saveAllSettings()
            switchView(getCurrentView(), VIEWS.landing)
            break;
        default:
            switchView(getCurrentView(), VIEWS.landing)
            break;
    }
}

// Bind store button
document.getElementById('sidebar_store').onclick = (e) => {
    switch (getCurrentView()) {
        case VIEWS.store:
            break;
        case VIEWS.settings:
            saveAllSettings()
            switchView(getCurrentView(), VIEWS.store)
            break;
        default:
            switchView(getCurrentView(), VIEWS.store)
            break;
    }
}

// Bind settings button
document.getElementById('sidebar_config').onclick = (e) => {
    switch (getCurrentView()) {
        case VIEWS.settings:
            break;
        default:
            prepareSettings()
            switchView(getCurrentView(), VIEWS.settings)
            break;
    }
}
