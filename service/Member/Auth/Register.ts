import { RegisterInterface } from './../../../interface/Member/Auth/RegisterInterface';
import { RegisterWithFacebookInterface } from './../../../interface/Member/Auth/RegisterWithFacebookInterface';
import { RegisterWithTwitterInterface } from './../../../interface/Member/Auth/RegisterWithTwitterInterface';

export class Register implements RegisterInterface {

    /** register */
    register() {};

}

export class RegisterWithFacebook implements RegisterWithFacebookInterface {

    /** register with facebook */
    registerWithFacebook() {};

}

export class RegisterWithTwitter implements RegisterWithTwitterInterface {

    /** register with twitter */
    registerWithTwitter() {};

}