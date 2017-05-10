
/**
 * member auth interface
 */
interface AuthInterface {

    /** logout */
    logout();

    /** login */
    login(user: string, password: string);
    /** login with facebook */
    loginWithFacebook();
    /** login with twitter */
    loginWithTwitter();

}