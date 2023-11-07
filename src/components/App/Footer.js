import React from 'react'
import {Link} from 'gatsby'
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 footer-about-us">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iZWk2OUNGRTB5OEExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjIwIDQwIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHRleHQgZHg9IjAiIGR5PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7ZWk2OUNGRTB5OEExOjo6TnVuaXRvJnF1b3Q7IiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjQ1MzE0MSAyOS45NDM1MjUpIiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAiPjx0c3BhbiB5PSIwIiBmb250LXdlaWdodD0iNDAwIiBzdHJva2Utd2lkdGg9IjAiPjwhW0NEQVRBW1NhbHNwb3QgU29mdHdhcmVdXT48L3RzcGFuPjwvdGV4dD48c3R5bGU+PCFbQ0RBVEFbQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6ICdlaTY5Q0ZFMHk4QTE6OjpOdW5pdG8nO2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogNDAwO3NyYzogdXJsKGRhdGE6Zm9udC90dGY7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVIwUkZSZ0hnQUNrQUFBSVFBQUFBUWtkUVQxT1JCNW1BQUFBRHhBQUFBWHhIVTFWQ2tBdU1IQUFBQXB3QUFBQmNUMU12TW9RNFpqY0FBQUw0QUFBQVlGTlVRVlRuWnN3MEFBQUNWQUFBQUVoamJXRndBaHNCMEFBQUExZ0FBQUJzWjJGemNBQUFBQkFBQUFFVUFBQUFDR2RzZVdZYUdURklBQUFIY0FBQUJaNW9aV0ZrRzlvcEJRQUFBYUFBQUFBMmFHaGxZUWRzQWs4QUFBRjhBQUFBSkdodGRIZ2F6d0l4QUFBQjJBQUFBRGhzYjJOaERFb0t2Z0FBQVJ3QUFBQWViV0Y0Y0FBZkFOTUFBQUU4QUFBQUlHNWhiV1V3WUZiU0FBQUZRQUFBQWk1d2IzTjAvN01BSEFBQUFWd0FBQUFnY0hKbGNHZ0dqSVVBQUFFTUFBQUFCN2dCLzRXd0JJMEFBQUVBQWYvL0FBOEFBQUFWQUdjQXN3RHpBUzRCVmdHSEFjZ0I5UUpBQW4wQ3d3TFBBczhBQUFBQkFBQUFEZ0JpQUFjQWJ3QUZBQUVBQUFBQUFBQUFBQUFBQUFBQUJBQUJBQU1BQUFBQUFBRC9zQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBL1ArbndBQUJSLytndjZDQlBRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUE0QUFRQUFBQU9hSFluRUpIVmZEenoxQUFNRDZBQUFBQURiRjZYVkFBQUFBTjR5cFRYK2d2N3NCUFFFRHdBQUFBWUFBZ0FBQUFBQUFBSDBBRElDWndBeEFoSUFOZ0lVQUM0QlRRQURBU2dBVEFJc0FDNENSd0JNQVdZQVRBSGhBQzhCWHYvOUEwa0FKZ0oxQUFNQkFnQUFBQUVBQWdBeUFBQUFIZ0FBQUE0QUFRQUNBQUFBREFBQUFBd0FBUUFBQUFZQUFRQU1BQUVBQVFBTUFBRUFCQUFCQVRvQUFnQUNBQUVBQ3dBQkFBd0FEQUFDQUFBQUFRQUJBQWdBQWdBQUFCUUFBZ0FBQUNRQUFuZG5hSFFCQUFBQWFYUmhiQUVCQUFFQUJBQVVBQU1BQUFBQ0FRUUJrQUFBQXJ3QUFBQURBQUVBQWdFaEFBQUFBQUFCQUFBQUFRQUFBQW9BS2dBNEFBTkVSa3hVQUJSamVYSnNBQlJzWVhSdUFCUUFCQUFBQUFELy93QUJBQUFBQVd4cFoyRUFDQUFBQUFFQUFBQUJBQVFBQkFBSUFBRUFDQUFCQUJJQUFRQUlBQUVBQkFBTUFBSUFCUUFCQUFFQUJBQUVBallCa0FBRkFBQUNpZ0pZQUFBQVN3S0tBbGdBQUFGZUFCd0JJZ0FBQUFBQUFBQUFBQUFBQUtBQUF2OVFBQ0JMQUFBQUFBQUFBQUJPVDA1RkFNQUFBUHNDQS9QK253QUFCRFVCTENBQUFaY0FBQUFBQWVRQ3dRQUFBQ0FBQXdBQUFBSUFBQUFEQUFBQUZBQURBQUVBQUFBVUFBUUFXQUFBQUJJQUVBQURBQUlBSUFCVEFHRUFaZ0JzQUhBQWRBQjMvLzhBQUFBZ0FGTUFZUUJsQUd3QWJ3QnlBSGYvLy8vdC82Ny9vZitlLzVuL2wvK1cvNVFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFDZ0FxQURnQUEwUkdURlFBRkdONWNtd0FGR3hoZEc0QUZBQUVBQUFBQVAvL0FBRUFBQUFCYTJWeWJnQUlBQUFBQVFBQUFBRUFCQUFDQUFnQUFnRW9BQW9BQWdEWUFBUUFBQUVBQU9JQUNnQUtBQUFBQUFBQUFBRC8rUUFBQUFELyt3QUEvL3NBQUFBQUFBQUFBUC82QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy9zQUFBQUFBQUFBQUFBQUFBRC8rUUFBQUFBQUV3QUEvL1lBRFAvMkFBWUFBQUFBQUFBQUFQLzZBQUFBQVAvK0FBRC8vZ0FBQUFBQUFBQUEvL1lBQUFBQS8vc0FBQUFBQUFELyt3QUFBQUQvOVFBQS8vdi85d0FBLy9rQUFQLzZBQUFBQUFBZUFBRC8rd0FhLy9zQUdnQUEvL3NBQmdBQUFBWUFBQUFBLy9NQUFBQUNBQUQvOGdBQUFBRC8rUUFBLy92LzZQLzcvL0FBQWdBQkFBRUFEQUFBQUFFQUFRQU1BQVVBQ0FBQkFBa0FBZ0FCQUFNQUF3QUdBQWNBQkFBSkFBRUFBUUFNQUFRQUFnQUJBQWtBQmdBQUFBQUFCd0FGQUFnQUF3QUdBQUVBREFBRUFBQUFBUUFTQUFFQUFRQUxBQUVBQ2dBS0FBQUFEQUNXQUFNQUFRUUpBQUFBb2dEMkFBTUFBUVFKQUFFQURBRHFBQU1BQVFRSkFBSUFEZ0RjQUFNQUFRUUpBQU1BTWdDcUFBTUFBUVFKQUFRQUhBQ09BQU1BQVFRSkFBVUFHZ0IwQUFNQUFRUUpBQVlBSEFCWUFBTUFBUVFKQUE0QU5nQWlBQU1BQVFRSkFRQUFEQUFXQUFNQUFRUUpBUUVBREFBS0FBTUFBUVFKQVFRQURnRGNBQU1BQVFRSkFTRUFDZ0FBQUZJQWJ3QnRBR0VBYmdCSkFIUUFZUUJzQUdrQVl3QlhBR1VBYVFCbkFHZ0FkQUJvQUhRQWRBQndBSE1BT2dBdkFDOEFjd0JqQUhJQWFRQndBSFFBY3dBdUFITUFhUUJzQUM0QWJ3QnlBR2NBTHdCUEFFWUFUQUJPQUhVQWJnQnBBSFFBYndBdEFGSUFaUUJuQUhVQWJBQmhBSElBVmdCbEFISUFjd0JwQUc4QWJnQWdBRE1BTGdBMkFEQUFNZ0JPQUhVQWJnQnBBSFFBYndBZ0FGSUFaUUJuQUhVQWJBQmhBSElBTXdBdUFEWUFNQUF5QURzQVRnQlBBRTRBUlFBN0FFNEFkUUJ1QUdrQWRBQnZBQzBBVWdCbEFHY0FkUUJzQUdFQWNnQlNBR1VBWndCMUFHd0FZUUJ5QUU0QWRRQnVBR2tBZEFCdkFFTUFid0J3QUhrQWNnQnBBR2NBYUFCMEFDQUFNZ0F3QURFQU5BQWdBRlFBYUFCbEFDQUFUZ0IxQUc0QWFRQjBBRzhBSUFCUUFISUFid0JxQUdVQVl3QjBBQ0FBUVFCMUFIUUFhQUJ2QUhJQWN3QWdBQ2dBYUFCMEFIUUFjQUJ6QURvQUx3QXZBR2NBYVFCMEFHZ0FkUUJpQUM0QVl3QnZBRzBBTHdCbkFHOEFid0JuQUd3QVpRQm1BRzhBYmdCMEFITUFMd0J1QUhVQWJnQnBBSFFBYndBcEFBQUFBZ0F5LzB3QndnTEJBQU1BQndBQUZ4RWhFU1VoRVNFeUFaRCtvZ0VzL3RTMEEzWDhpeklERVFBQUFRQXgvL2NDUHdMS0FEY0FBQVVpSmlZbkppWStBaGNXRmpNeU5qVTBKaWNuSmlZMU5ENENNeklXRnhZV0RnSW5KaVlqSWdZR0ZSUVdGeGNXRmhVVURnSUJPeTlhVFI4TUNRVVBGZzB0WmtCYVZ6OUthRjVkSmtSZU9UOXRMQXNJQmc4WERpaFdORFZOS3p0RGFHVmhKRVJnQ1JBZUZ3a1hGeEFDQ0NBZFF6Y3RNdzhWRkZ0TUwwMDNIaU1qQ1JjVkRnSUpIaHNnUFNnd09BMFdGVlZKTEVvMUhBQUJBRGIvOXdISUFlOEFOZ0FBRnlJbUpqVTBOall6TXhVaklnWUdGUlFXTXpJMk5qVTFOQ1lqSWdZSEJpNENOamMyTmpNeUZoWVZFUlFHSXlJbU5UVXpEZ0xsTWs4dU4zOXVMU3hSWFNVNU1TZzlJekk1STBZbkRoUU1BZ3NNTEZZblAxSW9FeElURkFrSUxVSUpKMFFxTmo0YU5ROGtJU2swSmtJcmNqNDNFaFFIQlJBVkZBWVdGQ2xUUWY3eEZCWVdGRTRtTmg0QUFBRUFMdi8zQWVzQjd3QXJBQUFGSWlZbU5UUTJOak15SGdJVkZBWWpJVFVoQnpRbUppTWlCZ1lWRlJRV016STJOelllQWdZSEJnWUJKMDF2UFR4cFJURk9OeDBTRWY2a0FVa1FJRDB1TTBja1dWSWlReUFPRnc0RkNRMGhXZ2s5Y0U1TWNVQWhQbGczRUE4MURUWkxLQzlUTndaY1lCSVZDUUVORXhZSUdCb0FBUUFELy9rQlhnTEdBQ2dBQUJjaUpqVVJJeUltTlRRMk16TUhOVFEyTnpjMkZoWUdCZ2NIQmdZVkZTY3pNaFlWRkFZakl4RVVqaE1WUUJBVEV4QldGbDFhSFE0UkJRUU9DaGM5Tnd4NEVSSVNFV3dIRmhRQmhCRVBEeEFWSmw5a0NBTUJEQklURGdFQ0JVQStLZzhRRHc4Ui9ud3FBQUVBVFAvM0FTUUN5QUFaQUFBWElpWTFFVFEyTXpJV0ZSRVVGak15TmpNMkZoVVVCZ2NHQnVCSVRCUVVFeFlyS2drT0J3c0pFQklJRWdsWVVnSCtGQlVWRlA0SU5qVUNBUXdTRWhJREFRSUFBZ0F1Ly9jQi9nSHZBQkVBSHdBQUJTSW1KalUwUGdJek1oWVdGUlFPQWljeU5qWTFOQ1lqSWdZR0ZSUVdBUlpIYURrZ1BsVTFSMmc1SUQ1Vk5TMUVKVkZGTGtNbFVnaytjVTA2WFVJalBuRk5PbHhESTBFc1ZEdGJZQ3RUUFZwaEFBQUNBRXovUlFJWkFlOEFIZ0FzQUFBWElpWTFFVFEyTXpJV0ZSVW5Oall6TWhZV0ZSUUdCaU1pSmljekVSUUdOekkyTmpVMEppTWlCZ1lWRkJaMEZCUVVFeFFWQ3hCZlFrRmhOVFZnUWtKZUVRd1dxaTVESlZGRkxVUWxVcnNWRkFKV0ZCVVZGRjhPT1VNOWNVNU5jVDVET1A3OEZCWHpMRlE3VzJBclV6MWFZUUFBQVFCTS8va0JZQUh4QUJ3QUFCY2lKalVSTkRZek1oWVZGU00yTmpjMkZoY1dCZ2NIQmdZVkZSUUdkUlFWRkJNVEZRb1FXa0lQRWdFQkVoTVFSRWtWQnhZVUFhRVVGUlVVVVR0QUFnRVBFaEVVQWdJR1MwSHlGQllBQVFBdi8vY0JzZ0h2QURJQUFCY2lKaWNtSmo0Q0Z4WVdNekkyTlRRbUp5Y21KalUwTmpZek1oWVhGaFlPQWljbUppTWlCaFVVRmhjWEZoWVZGQWJ3TFZzbkNnZ0REUk1NSjBra09Ub21LVnMvUFM5V09TeFBJQW9IQlE0VUN4NCtIamc2SkNaYlFVRnFDUlliQnhNVERnTUdHQk1xSkJ3aENSUU5RRE10UVNRWEdRY1RFdzBDQnhRVExDUWNKQWdURGowMFFrNEFBZi85Ly9jQlpnS0NBQ3dBQUFVaUppWTFOU01pSmpVME5qTXpOVFEyTXpJV0ZSVXpNaFlWRkFZakl4VVVGak15TmpNMkZoVVVCZ2NHQmdFUE9VMG1ReEVTRWhGREZoTVRGWDRSRWhJUmZqQTJFeHNKQ1F3SkN3d25DU2xQT2Y4UkR3OFFjeFFWRlJSekVBOFBFZmM1T3dnQkRoRU1GQVFFQndBQkFDYi8rUU1qQWUwQUtnQUFGeUltSndNbU5qWXpNaFlYRXlNVE5qWXpNaFlYRXlNVE5qWXpNaFlXQndNR0JpTWlKaWNETXdNR0J2UVJHZ2lWQmdVVUR3OFRCb3dZa0FjVkVSQVdCbzBYamdjVURoQVJBZ2FWQnhzUkVSb0hsQ3VUQnhvSEVoUUJsUkVhRGc0VC9uQUJrQklQRUJIK2NBR1NFZzBRR2cvK2F4TVRFeE1CbHY1cUV4TUEvLzhBQS8vM0FuRUN5QUFtQUFRQUFBQUhBQVVCVFFBQUFBQT0pIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XV0+PC9zdHlsZT48L3N2Zz4=" className="logo logo-white" alt="logo"/>
                            </a>
                            <p>By seamlessly integrating the latest technology and fostering a culture of excellence, we elevate your business towards unparalleled success</p>

                            <ul className="social-link">
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/work">
                                        Our Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Cluj-Napoca, Transylvania,, <br /> Romania
                                </li>
                                {/*<li>*/}
                                {/*    <i className='bx bx-phone-call'></i>*/}
                                {/*    <a href="tel:+40755881771">+40 755 881 771</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <i className='bx bx-envelope'></i>*/}
                                {/*    <a href="mailto:hello@rewy.com">contact.salspot@gmail.com</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong className="text-strong">Salspot Software</strong> All rights reserved</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;
