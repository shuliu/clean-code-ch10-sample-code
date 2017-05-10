import { PasswordInterface } from './../../interface/member/PasswordInterface';

export class Password implements PasswordInterface {

    /** forget password: email, user name */
    forgetpassword(validateMessage: string) {};
    /** change password */
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirmation: string) {};

}