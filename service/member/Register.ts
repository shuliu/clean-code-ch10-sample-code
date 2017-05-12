import { RegisterInterface } from './../../interface/member/RegisterInterface';
import { RegisterWithFacebookInterface } from './../../interface/member/RegisterWithFacebookInterface';
import { RegisterWithTwitterInterface } from './../../interface/member/RegisterWithTwitterInterface';

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