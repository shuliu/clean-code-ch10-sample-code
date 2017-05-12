import { AuthInterface } from './../../../interface/Member/Auth/AuthInterface';

export class Auth implements AuthInterface {

    /** logout */
    logout() {};

    /** login */
    login(user: string, password: string) {};
    /** login with facebook */
    loginWithFacebook() {};
    /** login with twitter */
    loginWithTwitter() {};

}