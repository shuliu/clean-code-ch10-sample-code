
/**
 * member password interface
 */
interface PasswordInterface {

    /** forget password: email, user name */
    forgetpassword(validateMessage: string);
    /** change password */
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirmation: string);

}