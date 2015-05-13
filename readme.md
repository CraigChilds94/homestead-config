# Homestead Configuration Reader

A simple Express based app which reads & parses your Homestead configuration file. This will eventually have a nice GUI and will enable modifications to the configuration; with automated provisioning and command line access.


Download the .zip then run `npm install; npm start` and go to `localhost:3000`. Currently the app assumes you have a readable file in `~/.homestead/` called `Homestead.yaml`.


## Todos

- [ ] Implement clean controller system for the routes
- [ ] Make pretty (More like a dashboard with UI)
- [ ] Enable editing of values
- [ ] Status updates / etc
- [ ] Management of sites / hosts / databases
    - [ ] Modification
    - [ ] Deletion
    - [ ] Addition
- [ ] Globally installable; uses a `/bin` script
- [ ] Setup tests
- [ ] Add configuration; such as not always running on `localhost:3000`
