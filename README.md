### Elevator Pitch
 The SAT/ACT is one of the most important tests students will ever take and it highly contributes to whether a student can attain the future they desire or not. My tutoring site will make it extremely easy for users to book appointments with their tutor. My hope is to save users the familiar pain of having to create an account to book an appointment, although the users will have the option to create a free account.
### Key features
* When users click "Book Online" from the landing page, they will be taken to a page displaying the tutors they can select from. For now it will be just me.
* After selecting their tutor, the available times will be displayed.
* I, the tutor, will have access to the admin portion of the site when I log in, which will be done in my backend logic checking the emails. I will be able to set my availability from here.
* After selecting the times they want, they will then be navigated to a page to input their first name, last name, email, and number. This information will be stored persistently in the database.
* After inputting their information, the user will be taken to a page with my Venmo QR code. They can submit my payment there and then click a button confirming their payment.
* After payment is confirmed, I will receive an email notification (external API) of the booking and will manually verify if they paid. 
* If they did not I can let them know through the contact information they provided
* If users create an account, their first name, last name, username, phone number, and password will be stored in the database.
* Lessons will be given on zoom. I will reach out to the user and send them the zoom information
### Technologies
HTML- Uses correct HTML structure for booking pages, account creation page, and admin page
CSS- Styling that makes UI look clean and easy on the eye
REACT- Components for tutors when user is selecting tutor, components for time availability cards, venmo QR code card, and routing
Service- Registration/login to create new user for those registering and login users by checking if provided information is correct. Tutor endpoint to retrieve tutor information for tutor cards. Available times to retrieve available times for time cards.
DB/login: Storing contact information securely on account creation including email, phone number, name, username, and password. Also securely storing contact information when booking an appointment to include in email so I can contact them. When I, the tutor login I will be authenticated to view the site from the admin side where I will be able to set my availability. Storing tutor information for tutor cards that will include a name, photo, and the type of test they tutor.
Websocket- When I edit the available times, that infromation will need to be updated on multiple users screens at once. ALso when a user books an appointment, it should display as booked for them and booked for other users as well