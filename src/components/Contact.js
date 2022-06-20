import './contact.css'
const Contact = (props) => {
    const {photo,name,phone,email}= props.data
    return (
        <div className="contact">
            <img src={photo} className="img-contact" alt="contact" />
            <div className="contact-info">
                <p className='nama'>{name}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact