# SELL-YOUR-MAC-REACT
This project is a single-page application built with React and connected to a Firebase backend. It is a web app where users can register and buy or sell used Apple devices.

## Installation
1. Clone the project repository: `git clone https://github.com/bobirad/SellYourMac-React.git`
2. Navigate to the project directory: `cd your-repo`
3. Install the dependencies: `npm install`

## Configuration
1. Create a new Firebase project and enable Authentication and Firestore.
2. Copy the Firebase project credentials and paste them into a new file called `firebase.js` in /src/config/ directory.

## Usage
1. Start the development server: `npm start`
2. Interact with the application at http://localhost:3000

## Register and Login
In order to successfuly register or login guests must fill in a valid email and a password of atleast 6 characters.


## Guests
The guests of the website are able to browse Home and Catalog page, with limitations of the details of every listing. They can only see the model and the production year of the device.

## Logged in users
Logged in users can access full functionality. They can create their own listings, edit or delete them. They also have access to the profile page, where they can see all listings listed by the logged in user. In the Catalog page they can view Details page of every listing and Edit or Delete the ones they own or to see other sellers email as a contact.



## Credits

This project was built using [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/).

## License

This project is licensed under the MIT License.```

