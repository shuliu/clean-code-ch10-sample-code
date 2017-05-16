import { RegisterWithTwitterInterface } from './../../../../interface/Member/Auth/Register/RegisterWithTwitterInterface';
import { Register as defaultRegister } from './../../../Member/Auth/Register/Register';

export class Register extends defaultRegister implements RegisterWithTwitterInterface {

    /** register with twitter */
    twitter() {};

}
