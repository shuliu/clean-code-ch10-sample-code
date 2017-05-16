import { RegisterWithFacebookInterface } from './../../../../interface/Member/Auth/Register/RegisterWithFacebookInterface';
import { Register as defaultRegister } from './../../../Member/Auth/Register/Register';

export class Register extends defaultRegister implements RegisterWithFacebookInterface {

    /** register with facebook */
    facebook() {};

}
