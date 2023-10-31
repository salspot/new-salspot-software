export class EmailService {
  sendMessage(event) {
    event.preventDefault();
    if (!this.validateMail()) {
      return;
    }
    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: {wherever you are sending the email},
      feedback: this.state.feedback
    };
    emailjs
      .send("gmail", "portfoliositecontact", templateParams, {id given from your EmailJS template})
      .then(
        function (response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          toast.error("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      feedback: ""
    });
  }
}
