import styles from './Header.module.css';
import {Button} from "@/components/ui/button";
import UrlInput from "@/components/url-input/url-input";

export default function Header() {
    return (
        <div className={`${styles.header} text-white`}>
            <div className={`${styles.container} flex justify-between items-center`}>
                <div className={`${styles.logo} flex justify-between items-center`}>
                    <div className={styles.logoImageContainer}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.0874 0.833008H4.79825C2.26284 0.833008 0.208008 2.88784 0.208008 5.42325V23.7124C0.208008 26.2478 2.26284 28.3026 4.79825 28.3026H23.0874C25.6228 28.3026 27.6776 26.2478 27.6776 23.7124V5.42325C27.6776 2.88784 25.6228 0.833008 23.0874 0.833008ZM22.6842 21.8592C22.6842 22.6601 22.0351 23.3092 21.2342 23.3092H6.65146C5.85052 23.3092 5.20148 22.6601 5.20148 21.8592V7.27646C5.20148 6.47552 5.85052 5.82648 6.65146 5.82648H21.2342C22.0351 5.82648 22.6842 6.47552 22.6842 7.27646V21.8592ZM11.029 18.2963C10.5678 18.2963 10.1977 17.9235 10.1977 17.4623V11.6402C10.1977 11.179 10.5678 10.8034 11.029 10.8034H16.8594C17.3178 10.8034 17.6907 11.1762 17.6907 11.6402V17.4595C17.6907 17.9207 17.3178 18.2936 16.8594 18.2936H11.029V18.2963Z" fill="white"/>
                        </svg>
                    </div>
                    <p className={styles.logoText}>Checker</p>
                </div>

                <div className={`${styles.headerInputContainer} flex  items-center`}>
                    <UrlInput></UrlInput>
                    <Button className={`${styles.uploadButton} flex items-center text-white`}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 10.0003V15.8337C16.5 16.2757 16.3244 16.6996 16.0118 17.0122C15.6993 17.3247 15.2754 17.5003 14.8333 17.5003H3.16667C2.72464 17.5003 2.30072 17.3247 1.98816 17.0122C1.67559 16.6996 1.5 16.2757 1.5 15.8337V4.16699C1.5 3.72496 1.67559 3.30104 1.98816 2.98848C2.30072 2.67592 2.72464 2.50033 3.16667 2.50033H9M12.3333 4.16699H17.3333M14.8333 1.66699V6.66699M16.5 12.5003L13.9283 9.92861C13.6158 9.61616 13.1919 9.44063 12.75 9.44063C12.3081 9.44063 11.8842 9.61616 11.5717 9.92861L4 17.5003M8.16667 7.50033C8.16667 8.4208 7.42047 9.16699 6.5 9.16699C5.57953 9.16699 4.83333 8.4208 4.83333 7.50033C4.83333 6.57985 5.57953 5.83366 6.5 5.83366C7.42047 5.83366 8.16667 6.57985 8.16667 7.50033Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Upload screenshot</span>
                    </Button>
                </div>

                <div className={styles.headerButtonContainer}>
                    <Button className={`${styles.creditsButton}`}>
                        <div className={`${styles.creditsButtonLeftSide}`}>
                            <div className={styles.imageWithTextContainer}>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0.5C2.63562 0.5 0 2.0375 0 4V10C0 11.9625 2.63562 13.5 6 13.5C9.36438 13.5 12 11.9625 12 10V4C12 2.0375 9.36438 0.5 6 0.5ZM11 7C11 7.60125 10.5075 8.21438 9.64937 8.6825C8.68312 9.20938 7.38688 9.5 6 9.5C4.61312 9.5 3.31687 9.20938 2.35063 8.6825C1.4925 8.21438 1 7.60125 1 7V5.96C2.06625 6.8975 3.88937 7.5 6 7.5C8.11063 7.5 9.93375 6.895 11 5.96V7ZM9.64937 11.6825C8.68312 12.2094 7.38688 12.5 6 12.5C4.61312 12.5 3.31687 12.2094 2.35063 11.6825C1.4925 11.2144 1 10.6012 1 10V8.96C2.06625 9.8975 3.88937 10.5 6 10.5C8.11063 10.5 9.93375 9.895 11 8.96V10C11 10.6012 10.5075 11.2144 9.64937 11.6825Z" fill="white" fillOpacity="0.5"/>
                                </svg>
                                <p className={styles.textContainer}>
                                    <span className="text-xl font-bold">4</span>
                                    <span className="text-gray-400 text-sm">/8</span>
                                </p>
                            </div>
                            <span className={styles.text}>Credits</span>
                        </div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </Button>
                    <div className={styles.userSignInButtonController}>
                        <Button variant="secondary" className={styles.headerLogInButton}>Login</Button>
                        <Button className={styles.headerSignInButton}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
