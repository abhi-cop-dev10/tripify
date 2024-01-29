# TripiFy Web Application :airplane:

## Simple Web Application To Make Tour Booking :blush:

### Technologies :technologist:<br />
UI: HTML/CSS/Js/PUG<br />
Backend: Node<br />
Database: MongoDb<br />
Assets: Flaticon, Icon 8<br />

### Backend API :v:<br />
URL: https://documenter.getpostman.com/view/31808337/2s9Yyqjhhu
<br />

### Key Features :feather:<br />
* Authentication and Authorization
    * Sign up, Log in, Logout, Update, and reset password.
* User profile
    * Update username, photo, email, password, and other information
    * A user can be either a regular user or an admin or a lead guide or a guide.
    * When a user signs up, that user by default regular user.
* Tour
    * Manage booking, check tour map, check users' reviews and rating
    * Tours can be created by an admin user or a lead-guide.
    * Tours can be seen by every user.
    * Tours can be updated by an admin user or a lead guide.
    * Tours can be deleted by an admin user or a lead-guide.
* Bookings
    * Only regular users can book tours (make a payment).
    * Regular users can not book the same tour twice.
    * Regular users can see all the tours they have booked.
    * An admin user or a lead guide can see every booking on the app.
    * An admin user or a lead guide can delete any booking.
    * An admin user or a lead guide can create a booking (manually, without payment).
    * An admin user or a lead guide can not create a booking for the same user twice.
    * An admin user or a lead guide can edit any booking.
* Reviews
    * Only regular users can write reviews for tours that they have booked.
    * All users can see the reviews of each tour.
    * Regular users can edit and delete their own reviews.
    * Regular users can not review the same tour twice.
    * An admin can delete any review.
* Favorite Tours
    * A regular user can add any of their booked tours to their list of favorite tours.
    * A regular user can remove a tour from their list of favorite tours.
    * A regular user can not add a tour to their list of favorite tours when it is already a favorite.
* Credit card Payment

### HOW TO USE :card_index:<br />
* Book a tour
    * Login to the site
    * Search for tours that you want to book
    * Book a tour
    * Proceed to the payment checkout page
    * Enter the card details (Test Mood):
    ```
        - Card No. : 4242 4242 4242 4242
        - Expiry date: Any
        - CVV: Any
    ```

### Steps To Setup :gear:<br />
```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the necessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID, and MAILTRAP.
* Create config.env file in the root directory.
* In your .env file, set environment variables for the following:
    * DATABASE=your Mongodb database URL
    * DATABASE_PASSWORD=your MongoDB password

    * SECRET=your JSON web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real-life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password

    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe webhook secret

* Start the server.
* Your app should be running just fine.
```

### Admin Login :superhero:<br />
Email: abhinay@tripify.com
<br />
Password: test1234

### User Login :superhero:<br />
Email: ankit@example.com
<br />
Password: test1234

### To-Do :round_pushpin:<br />
* Review and rating
    * Allow users to add a review directly at the website after they have taken a tour Booking
* Prevent duplicate bookings after a user has booked that exact tour, implement favorite tours
* Signup, confirm user email, log in with refresh token, two-factor authentication
* And More!

### DFD :framed_picture:<br />
![User](https://github.com/abhi-cop-dev10/tripify/assets/62385700/12020e68-59de-439b-9664-d2a5ae4baba1)

### Application Screenshots :framed_picture:<br />
![Screenshot 2024-01-29 083743](https://github.com/abhi-cop-dev10/tripify/assets/62385700/5de0b1f1-4d7e-4b36-83e5-1f4610a652fb)

![Screenshot 2024-01-29 083814](https://github.com/abhi-cop-dev10/tripify/assets/62385700/5d5f09bb-56a9-426e-9c3a-5c226d7b1434)
743.png…]()

![Screenshot 2024-01-29 083856](https://github.com/abhi-cop-dev10/tripify/assets/62385700/35bcc409-8004-4cfe-a200-cd17c142fadb)
