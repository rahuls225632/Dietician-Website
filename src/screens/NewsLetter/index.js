import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = 'https://gmail.us14.list-manage.com/subscribe/post?u=4aa9d46e4dc52e2124e5e8885&amp;id=7d154368ec&amp;f_id=00679de0f0'

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)

export default CustomForm