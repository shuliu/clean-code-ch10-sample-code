
/**
 * member password interface
 */
export interface PasswordInterface {

    /** forget password: email, user name */
    forgetpassword(validateMessage: string);
    /** change password */
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirmation: string);

}