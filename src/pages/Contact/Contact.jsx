import './contact.css';
import Nav from '../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
    const contact = () => {
    };
    return (
        <>
            <Nav />
            <section id="contact">
                <div className="contact__container">
                    <div className="contact__row">
                        <div className="contact">
                            <h2 className="contact__heading--title">
                                Contact Us
                            </h2>
                            <form id="contact__form" onSubmit={contact}>
                                <div className="form__item">
                                    <input type="text" className="input" name="user_name" required></input>
                                    <label className="form__item--label">Name</label>
                                </div>
                                <div className="form__item">
                                    <input type="email" className="input" name="user_email" required></input>
                                    <label className="form__item--label">Email</label>
                                </div>
                                <div className="form__item">
                                    <textarea type="text" className="input" name="message" required rows={10} cols={30}></textarea>
                                    <label className="form__item--label">Message</label>
                                </div>
                                <button className="button" type="submit" value="Send">
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    <span className="button--span"></span>
                                    Submit
                                </button>
                            </form>
                            <div className={`modal__overlay modal__overlay--loading`}>
                                <FontAwesomeIcon icon="spinner" className="modal__overlay--spinner" />
                            </div>
                            <div className={`modal__overlay modal__overlay--success`}>
                                <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="contact__faq">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
